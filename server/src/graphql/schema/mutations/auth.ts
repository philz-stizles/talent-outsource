import { GraphQLNonNull, GraphQLString } from 'graphql';
import UserType from '../types/user_type';
import { authService } from '@src/services';

const authMutations = {
  signUp: {
    type: UserType,
    args: {
      firstname: { type: new GraphQLNonNull(GraphQLString) },
      lastname: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parentValue: any, args: any, context: any) => {
      // return authService.signUp(args, context);
    },
  },
  signIn: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parentValue: any, args: any, context: any) => {
      return authService.signIn(args, context);
    },
  },
  logOut: {
    type: UserType,
    resolve: async (parentValue: any, args: any, context: any) => {
      console.log('args: ', args);
      console.log('context: ', context);
      return authService.signOut(context);
    },
  },
};

export default authMutations;
