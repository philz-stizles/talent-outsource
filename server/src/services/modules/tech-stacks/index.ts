import ApiError from '@src/error/api-error';
import TechStack, { TechStackDocument } from '@src/models/tech-stack';
import { httpStatus } from '@src/utils/api.utils';
import slugify from 'slugify';

type CreateTechStack = Pick<
  TechStackDocument,
  'name' | 'description' | 'isPublished'
>;

/**
 * Create a TechStack
 * @param {CreateTechStack} createTechStack
 * @returns {Promise<TechStackDocument>}
 */
const create = async ({
  name,
  description,
  isPublished,
}: CreateTechStack): Promise<TechStackDocument> => {
  if (await findOne(name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'TechStack already exists');
  }

  return await TechStack.create({
    name,
    slug: slugify(name),
    description,
    isPublished,
  });
};

/**
 * Get user by email
 * @param {string} name
 * @param {Array<Key>} select
 * @returns {Promise<TechStackDocument | null>}
 */
const findOne = async (
  name?: string,
  select?: string[]
): Promise<TechStackDocument | null> => {
  return await TechStack.findOne({
    name,
  }).exec();
};

/**
 * Get user by email
 * @param {string} id
 * @param {Array<Key>} select
 * @returns {Promise<TechStackDocument | null>}
 */
const findById = async (
  id: string,
  select?: string[]
): Promise<TechStackDocument | null> => {
  return await TechStack.findById(id).exec();
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {Array<string>} fields -
 * @returns {Promise<QueryResult>}
 */
const find = async (
  filter?: object,
  options?: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  },
  fields: string[] = []
): Promise<TechStackDocument[]> => {
  const page = options?.page ?? 1;
  const limit = options?.limit ?? 10;
  const skip = (page - 1) * limit;
  const sortBy = options?.sortBy;
  const sortType = options?.sortType ?? 'desc';
  const query = TechStack.find(filter ?? {})
    .select(fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}))
    .skip(skip)
    .limit(limit)
    .sort(sortBy ? { [sortBy]: sortType } : undefined);

  return await query.exec();
};

/**
 * Update a TechStack.
 * @param {string} id
 * @returns {Promise<void>}
 */
const update = async (
  id: string,
  { name }: Pick<TechStackDocument, 'name'>
): Promise<void> => {
  await TechStack.findByIdAndUpdate(id, { name });
};

/**
 * Update a TechStack.
 * @param {string} id
 * @returns {Promise<void>}
 */
const archive = async (id: string): Promise<void> => {
  await TechStack.findByIdAndDelete(id);
};

export default { create, findOne, findById, find, update, archive };
