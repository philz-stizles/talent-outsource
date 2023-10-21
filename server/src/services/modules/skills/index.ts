import ApiError from '@src/error/api-error';
import Skill, { ISkillDocument } from '@src/models/skill';
import { httpStatus } from '@src/utils/api.utils';

/**
 * Create a skill
 * @param {string} name
 * @returns {Promise<Skill>}
 */
const create = async ({
  name,
}: Pick<ISkillDocument, 'name'>): Promise<ISkillDocument> => {
  if (await findOne(name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Skill already exists');
  }

  return await Skill.create({ name });
};

/**
 * Get user by email
 * @param {string} name
 * @param {Array<Key>} select
 * @returns {Promise<ISkillDocument | null>}
 */
const findOne = async (
  name?: string,
  select?: string[]
): Promise<ISkillDocument | null> => {
  return await Skill.findOne({
    name,
  }).exec();
};

/**
 * Get user by email
 * @param {string} id
 * @param {Array<Key>} select
 * @returns {Promise<ISkillDocument | null>}
 */
const findById = async (
  id: string,
  select?: string[]
): Promise<ISkillDocument | null> => {
  return await Skill.findById(id).exec();
};

/**
 * Get user by email
 * @param {string} name
 * @param {Array<Key>} select
 * @returns {Promise<ISkillDocument[]>}
 */
const findMany = async (select?: string[]): Promise<ISkillDocument[]> => {
  return await Skill.find({}).exec();
};

/**
 * Update a skill.
 * @param {string} id
 * @returns {Promise<void>}
 */
const update = async (
  id: string,
  { name }: Pick<ISkillDocument, 'name'>
): Promise<void> => {
  await Skill.findByIdAndUpdate({ name });
};

/**
 * Update a skill.
 * @param {string} id
 * @returns {Promise<void>}
 */
const archive = async (id: string): Promise<void> => {
  await Skill.findByIdAndUpdate({ name });
};

export default { create, findOne, findById, findMany, update, archive };
