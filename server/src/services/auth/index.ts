import ApiError from '@src/error/api-error';
import { IUserDocument } from '@src/models/user';
import { userService } from '@src/services';
import { httpStatus } from '@src/utils/api.utils';
import { exclude } from '@src/utils/object.utils';
/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Omit<IUserDocument, 'password'>>}
 */
const signIn = async (
  email: string,
  password: string
): Promise<Omit<IUserDocument, 'password'>> => {
  const existingUser = await userService.getUserByEmail(email, [
    'id',
    'email',
    'name',
    'password',
    'role',
    'isEmailVerified',
    'createdAt',
    'updatedAt',
  ]);
  if (!existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user credentials');
  }

  // Validate password.
  if (!(await existingUser.comparePassword(password))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user credentials');
  }
  return exclude(existingUser, ['password']);
};

const verifyEmail = async (refresh: string) => {};

const refreshToken = async (refresh: string) => {};

const forgotPassword = async (email: string) => {};

const resetPassword = async (token: string, password: string) => {};

const signOut = async (refreshToken: string) => {};

export default { signIn, verifyEmail, refreshToken, forgotPassword, resetPassword, signOut };
