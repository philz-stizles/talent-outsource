import ApiError from '@src/error/api-error';
import User, { IUserDocument } from '@src/models/user';
import { httpStatus } from '@src/utils/api.utils';

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (
  email: string,
  password: string,
  firstname?: string,
  lastname?: string
): Promise<IUserDocument> => {
  if (await getUserByEmail(email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  return await User.create({
    email,
    firstname,
    lastname,
    password,
  });
};

/**
 * Get user by email
 * @param {string} email
 * @param {Array<Key>} select
 * @returns {Promise<IUserDocument | null>}
 */
const getUserByEmail = async (
  email: string,
  select?: string[]
): Promise<IUserDocument | null> => {
  return await User.findOne({
    email,
  }).exec();
};

export default { createUser, getUserByEmail };
