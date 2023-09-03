import ApiError from '@src/error/api-error';
import User, { IUserDocument } from '@src/models/user';
import { httpStatus } from '@src/utils/api.utils';

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<IUserDocument>}
 */
const createUser = async (
  name: string,
  email: string,
  password: string,
  firstname?: string,
  lastname?: string
): Promise<IUserDocument> => {
  if (await getUserByEmail(email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  return await User.create({
    name,
    email,
    firstname,
    lastname,
    password,
  });
};

/**
 * Get user by email
 * @param {string} email
 * @param {Array<string>} fields
 * @returns {Promise<IUserDocument | null>}
 */
const getUserByEmail = async (
  email: string,
  fields: string[] = []
): Promise<IUserDocument | null> => {
  return await User.findOne(
    {
      email,
    },
    {}
  )
    .select(fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}))
    .exec();
};

type UserUpdateInput = Partial<
  Pick<IUserDocument, 'email' | 'isEmailVerified'>
>;

/**
 * Update user by email
 * @param {string} email
 * @param {UserUpdateInput} update
 * @param {Array<string>} fields
 * @returns {Promise<IUserDocument | null>}
 */
const updateUserByEmail = async (
  email: string,
  update: UserUpdateInput,
  fields: string[] = []
): Promise<IUserDocument | null> => {
  const existingUser = await getUserByEmail(email, ['id', 'email', 'name']);
  if (!existingUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (
    update.email &&
    (await getUserByEmail(update.email as string)) &&
    update.email !== email
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  const updatedUser = await User.findOneAndUpdate({ email }, update).select(
    fields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
  );

  return updatedUser;
};

export default { createUser, getUserByEmail, updateUserByEmail };
