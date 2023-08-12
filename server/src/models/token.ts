import jwt from 'jsonwebtoken';
import { Model, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '@src/config';
import moment, { Moment } from 'moment';

export enum TokenType {
  ACCESS,
  REFRESH,
  RESET_PASSWORD,
  VERIFY_EMAIL,
}

// Create an interface representing a document in MongoDB.
export interface IToken {
  _id: string;
  userId?: string;
  token: string;
  expiresAt: number;
  type: TokenType;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITokenDocument extends IToken, Document {
  verify: (candidatePassword: string) => Promise<boolean>;
}

export interface ITokenModel extends Model<ITokenDocument> {
  generate(userId: string, type: TokenType, expiresAt: Moment): Promise<string>;
  build(userId: string, type: TokenType, expiresAt: Moment): Promise<string>;
}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const tokenSchema = new Schema<ITokenDocument, ITokenModel>(
  {
    userId: String,
    token: String,
    expiresAt: Date,
    type: String,
    isActive: { type: Boolean, default: true, select: false },
  },
  {
    timestamps: true,
  }
);

/**
 * Generate token
 * @param {string} userId
 * @param {Moment} expiresAt
 * @param {TokenType} type
 * @returns {string}
 */
tokenSchema.statics.generate = async (
  userId: string,
  type: TokenType,
  expiresAt: Moment
) => {
  // You can use arrow functions here as we will not be requiring
  // the 'this' reference
  // eslint-disable-next-line no-use-before-define
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expiresAt.unix(),
    type,
  };

  // expiresIn: Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count.
  // If you use a string be sure you provide the time units (days, hours, etc),
  // otherwise milliseconds unit is used by default ("120" is equal to "120ms").
  return jwt.sign(payload, config.jwt.secret);
};

/**
 * Generate token
 * @param {string} userId
 * @param {Moment} expiresAt
 * @param {TokenType} type
 * @returns {ITokenDocument}
 */
tokenSchema.statics.build = async (
  userId: string,
  type: TokenType,
  expiresAt: Moment
) => {
  const token = Token.generate(userId, type, expiresAt);
  const newToken = new Token({
    userId,
    token,
    type,
    expiresAt: expiresAt.toDate(),
  });
  await newToken.save();

  return newToken.token;
};

const Token = model<ITokenDocument, ITokenModel>('Token', tokenSchema);

export default Token;
