import ApiError from '@src/error/api-error';
import Company, { ICompany, CompanyDocument } from '@src/models/company';
import {
  FilterQuery,
  UpdateQuery,
  QueryOptions,
  SchemaDefinition,
} from 'mongoose';

type Filter = FilterQuery<CompanyDocument>

type Query = {
  query?: Filter;
  options?: QueryOptions<CompanyDocument> | null;
};

export const createCompany = async (input: SchemaDefinition<ICompany>) => {
  const existingCompany = await getCompany({ name: input.name });
  if (existingCompany) {
    throw new ApiError(400, 'A company with the given name already exists.');
  }

  return await Company.create(input);
};

export const updateCompany = async ({
  query,
  update,
  options,
}: Query & {
  update?: UpdateQuery<CompanyDocument>;
}) => {
  return await Company.findOneAndUpdate(query, update, options);
};

export const getCompanies = async ({ query, options }: Query) => {
  return await Company.find();
};

export const getCompany = async (query: Filter) => {
  return await Company.findOne(query);
};

export const deleteCompany = async ({ query }: Query) => {
  return await Company.deleteOne(query);
};

export default {
  createCompany,
  updateCompany,
  getCompany,
  getCompanies,
  deleteCompany,
};
