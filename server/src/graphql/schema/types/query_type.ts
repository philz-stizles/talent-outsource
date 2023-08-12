import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import UserType from './user_type';
import JobType from './job_type';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return args.id;
      },
    },
    job: {
      type: JobType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return args.id;
      },
    },
  },
});

export default RootQuery;
