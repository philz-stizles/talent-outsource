import Job from '@src/models/job';

const queries = {
  async jobs(_parent: any, _args: any, context: any): Promise<any[]> {
    return [];
  },
  async job(_parent: any, args: any, context: any): Promise<any> {
    return args.id;
  },
};

const mutations = {
  createJob: async (_parent: any, args: any, context: any): Promise<any> => {
    const { isAuthenticated } = context;
    if (!isAuthenticated) {
      // throw new AuthenticationError('Please register to complete this process');
    }
    // const { title, description } = args;
    // return await Job.create({ title, description });
  },
  updateJob: async (_parent: any, args: any, context: any): Promise<any> => {
    const { isAuthenticated } = context;
    if (!isAuthenticated) {
      // throw new AuthenticationError('Please register to complete this process');
    }
    // const { id, title, description } = args;
    // return await Job.updateOne({ id, description });
  },
  deleteJob: async (_parent: any, args: any, context: any): Promise<any> => {
    const { isAuthenticated } = context;
    if (!isAuthenticated) {
      // throw new AuthenticationError('Please register to complete this process');
    }

    // return await Job.deleteOne({ id: args.id });
  },
};

const subscriptions = {};

export default { queries, mutations, subscriptions };
