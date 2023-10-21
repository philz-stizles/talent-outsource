import jwt, { JwtPayload }  from 'jsonwebtoken';
import ApiError from '@src/error/api-error';
import { userService } from '..';
import config from '@src/config';
import Token, { ITokenDocument, TokenType } from '@src/models/token';
import { IUserDocument } from '@src/models/user';
import moment from 'moment';
import { httpStatus } from '@src/utils/api.utils';
 
export interface IJWTokenPayload extends JwtPayload {
  id: string;
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

const generateAuthTokens = async (user: IUserDocument) => {
  const accessExpiry = config.jwt.accessExpirationMinutes;
  const accessTokenExpires = moment().add(accessExpiry, 'minutes');
  const accessToken = Token.generate(
    user._id,
    TokenType.ACCESS,
    accessTokenExpires
  );

  const refreshExpiry = config.jwt.refreshExpirationDays;
  const refreshTokenExpires = moment().add(refreshExpiry, 'days');

  const refreshToken = await Token.build(
    user._id,
    TokenType.REFRESH,
    refreshTokenExpires
  );
  //   await saveToken(
  //     refreshToken,
  //     user.id,
  //     refreshTokenExpires,
  //     TokenType.REFRESH
  //   );

  return {
    access: {
      token: accessToken,
      expiresIn: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expiresIn: refreshTokenExpires.toDate(),
    },
  };
};

/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
const generateResetPasswordToken = async (email: string): Promise<string> => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No users found with this email');
  }
  const expiresAt = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    'minutes'
  );
  const token = await Token.build(
    user._id,
    TokenType.RESET_PASSWORD,
    expiresAt
  );

  return token;
};

/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
const generateVerifyEmailToken = async (user: {
  id: string;
}): Promise<string> => {
  const expiresAt = moment().add(
    config.jwt.verifyEmailExpirationMinutes,
    'minutes'
  );

  const token = await Token.build(user.id, TokenType.VERIFY_EMAIL, expiresAt);

  return token;
};

/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
const verifyToken = async (
  token: string,
  type: TokenType
): Promise<ITokenDocument> => {
  const payload = jwt.verify(token, config.jwt.secret);
  const userId = Number(payload.sub);
  const existingToken = await Token.findOne({
    token,
    type,
    userId,
    isActive: true,
  });
  if (!existingToken) {
    throw new Error('Token not found');
  }
  return existingToken;
};

export default {
  generateAuthTokens,
  generateResetPasswordToken,
  generateVerifyEmailToken,
  verifyToken,
};
