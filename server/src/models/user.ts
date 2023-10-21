import { Document, Model, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { RoleType } from '@src/models/role';

// Create an interface representing a document in MongoDB.
export interface IUser {
  firstname: string;
  lastname: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
  avatar?: string;
  password?: string;
  role: RoleType;
  passwordChangedAt?: Date;
  passwordResetExpiresIn?: number;
  passwordResetToken: string | undefined;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserDocument extends IUser, Document {
  comparePassword: (candidatePassword: string) => Promise<boolean>;
  createPasswordResetToken: () => string;
}

export interface IUserModel extends Model<IUserDocument> {
  findByAuthentication(email: string, password: string): Promise<void | any>;
}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUserDocument, IUserModel>({
  firstname: String,
  name: String,
  lastname: String,
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    index: true,
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'A user role is required'],
    enum: RoleType,
  },
  isEmailVerified: { type: Boolean, default: false },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    trim: true,
    select: false,
  },
});

// Create schema methods
userSchema.pre('save', async function (next: any) {
  const user = this as IUserDocument;
  // If password was not modified, do not encrypt
  if (!user.isModified('password')) return next();
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(12);

    // Encrypt password
    user.password = await bcrypt.hash(user.password as string, salt);

    return next();
  } catch (error: any) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (password: string) {
  // This is essentially the same as `return await bcrypt.compare();`,
  // but the rule checks only`await` in `return` statements
  const user = this as IUserDocument;
  try {
    const isMatch = await bcrypt.compare(password, user.password as string);
    return isMatch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

userSchema.statics.findByAuthentication = async (
  email: string,
  password: string
): Promise<void | any> => {
  // You can use arrow functions here as we will not be requiring
  // the 'this' reference
  // eslint-disable-next-line no-use-before-define
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid Credentials');
  }

  const isMatch = await user.comparePassword(password);
  // console.log(isMatch)
  if (!isMatch) {
    throw new Error('Invalid Credentials');
  }

  return user;
};

const User = model<IUserDocument, IUserModel>('User', userSchema);

export default User;
