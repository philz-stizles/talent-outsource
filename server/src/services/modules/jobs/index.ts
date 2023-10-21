import ApiError from '@src/error/api-error';
import Job, { IJobDocument } from '@src/models/job';
import { httpStatus } from '@src/utils/api.utils';
import slugify from 'slugify';

type CreateJob = Pick<
  IJobDocument,
  'title' | 'description' | 'closingAt' | 'isPublished'
>;

/**
 * Create a job
 * @param {CreateJob} createJob
 * @returns {Promise<Job>}
 */
const create = async ({
  title,
  description,
  closingAt,
  isPublished,
}: CreateJob): Promise<IJobDocument> => {
  if (await findOne(title)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Job already exists');
  }

  return await Job.create({
    title,
    slug: slugify(title),
    description,
    closingAt,
    isPublished,
  });
};

/**
 * Get user by email
 * @param {string} title
 * @param {Array<Key>} select
 * @returns {Promise<IJobDocument | null>}
 */
const findOne = async (
  title?: string,
  select?: string[]
): Promise<IJobDocument | null> => {
  return await Job.findOne({
    title,
  }).exec();
};

/**
 * Get user by email
 * @param {string} id
 * @param {Array<Key>} select
 * @returns {Promise<IJobDocument | null>}
 */
const findById = async (
  id: string,
  select?: string[]
): Promise<IJobDocument | null> => {
  return await Job.findById(id).exec();
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
  filter: object,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  },
  fields: string[]
): Promise<IJobDocument[]> => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy;
  const sortType = options.sortType ?? 'desc';
  const query = Job.find(filter)
    .select(fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}))
    .skip(skip)
    .limit(limit)
    .sort(sortBy ? { [sortBy]: sortType } : undefined);

  return await query.exec();
};

/**
 * Update a job.
 * @param {string} id
 * @returns {Promise<void>}
 */
const update = async (
  id: string,
  { title }: Pick<IJobDocument, 'title'>
): Promise<void> => {
  await Job.findByIdAndUpdate({ name });
};

/**
 * Update a job.
 * @param {string} id
 * @returns {Promise<void>}
 */
const archive = async (id: string): Promise<void> => {
  await Job.findByIdAndUpdate({ name });
};

export default { create, findOne, findById, find, update, archive };
