import TechStack, { ITechStack } from '@src/models/tech-stack';
import { ApiResponse } from '@src/utils/api.utils';
import { AuthenticationError } from 'apollo-server-express';

const queries = {
  techStacks: async (
    _parent: any,
    _args: any,
    context: any
  ): Promise<ITechStack[]> => {
    const techStacks = await TechStack.find({});
    return techStacks;
  },
  techStack: async (_parent: any, args: any, context: any): Promise<any> => {
    return args.id;
  }
};

const mutations = {
  createTechStack: async (
    _parent: any,
    args: any,
    context: any
  ): Promise<any> => {
    const { isAuthenticated, user } = context;
    if (!isAuthenticated) {
      throw new AuthenticationError('Please register to complete this process');
    }
    const { name, description } = args.data;
    const techStack = await TechStack.create({ user, name, description });
    return new ApiResponse<ITechStack>('Created Successful', techStack);
  },
  // updateTechStack: async (_parent: any, args: any, context: any): Promise<any> => {
  //   const { isAuthenticated } = context;
  //   if (!isAuthenticated) {
  //     // throw new AuthenticationError('Please register to complete this process');
  //   }
  //   // const { id, title, description } = args;
  //   // return await TechStack.updateOne({ id, description });
  // },
  // deleteTechStack: async (_parent: any, args: any, context: any): Promise<any> => {
  //   const { isAuthenticated } = context;
  //   if (!isAuthenticated) {
  //     // throw new AuthenticationError('Please register to complete this process');
  //   }

  //   // return await TechStack.deleteOne({ id: args.id });
  // },
};

const subscriptions = {};

export default { queries, mutations, subscriptions };
