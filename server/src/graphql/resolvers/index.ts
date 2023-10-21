// import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import auth from './auth';
import jobs from './jobs';
import profiles from './profiles';
import techStacks from './tech-stacks';

console.log(jobs.queries);

const resolvers = {
  // This maps the `Upload` scalar to the implementation provided
  // by the `graphql-upload` package.
  // Upload: GraphQLUpload,
  Query: {
    ...profiles.queries,
    ...jobs.queries,
    ...techStacks.queries,
  },
  Mutation: {
    ...auth.mutations,
    ...profiles.mutations,
    ...jobs.mutations,
    ...techStacks.mutations,
  },
  // Subscription: {},
  TechStack: {
    technologies: async (
      parent: any,
      args: any,
      context: any
    ): Promise<any> => {
      return parent.technologies;
    },
  },
};

export default resolvers;
