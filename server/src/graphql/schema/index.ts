import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import query from './types/query_type';
import jobMutations from './mutations/job';
import authMutations from './mutations/auth';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...authMutations,
    ...jobMutations,

  },
});

export const schema = new GraphQLSchema({ query, mutation });
