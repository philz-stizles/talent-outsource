import Company from '@src/models/company';

const queries = {
  companies: async (_parent: any, _args: any, context: any): Promise<any[]> => {
    console.log(context);
    return [];
  },
  company: async (_parent: any, args: any, context: any): Promise<any> => {
    return args.id;
  },
};

const mutations = {
  createCompany: async (
    _parent: any,
    args: any,
    context: any
  ): Promise<any> => {
    const { isAuthenticated } = context;
    if (!isAuthenticated) {
      // throw new AuthenticationError('Please register to complete this process');
    }
    // const { title, description } = args;
    // return await Company.create({ title, description });
  },
};

const subscriptions = {};

export default { queries, mutations, subscriptions };
