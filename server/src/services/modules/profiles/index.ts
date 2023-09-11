import ApiError from '@src/error/api-error';
import Profile from '@src/models/profile';
import { httpStatus } from '@src/utils/api.utils';

export const createOrUpdate = (userId: string) => {};

/**
 * Get user profile.
 * @param {string} userId
 
 */
export const getProfile = async (userId: string) => {
  const profile = await Profile.findOne({
    user: userId,
  }).populate('user', ['name', 'avatar']);

  if (!profile) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'There is no profile for this user'
    );
  }

  return Profile;
};

export const deleteProfile = () => {};

export default { createOrUpdate, getProfile, deleteProfile };
