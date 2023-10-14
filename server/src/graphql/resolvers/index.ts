// import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import auth from './auth';
import jobs from './jobs';
import profiles from './profiles';

console.log(jobs.queries);

const resolvers = {
  // This maps the `Upload` scalar to the implementation provided
  // by the `graphql-upload` package.
  // Upload: GraphQLUpload,
  Query: {
    ...profiles.queries,
    ...jobs.queries,
  },
  Mutation: {
    ...auth.mutations,
    ...profiles.mutations,
    ...jobs.mutations,
  },
  // Subscription: {},
};

export default resolvers;
