import { GraphQLNonNull, GraphQLString } from 'graphql';
import Job from '@src/models/job';
import JobType from '../types/job_type';

const jobMutations = {
  createJob: {
    type: JobType,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parentValue: any, args: any) => {
      const { title, description } = args;
      return await Job.create({ title, description });
    },
  },
  updateJob: {
    type: JobType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parentValue: any, args: any) => {
      const { id, title, description } = args;
      return await Job.updateOne({ id, description });
    },
  },
  deleteJob: {
    type: JobType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parentValue: any, { id }: any) => {
      return await Job.deleteOne({ id });
    },
  },
};

export default jobMutations;
