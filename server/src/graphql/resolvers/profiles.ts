const queries = {
  async profile(_parent: any, args: any, context: any): Promise<any[]> {
    return args.id;
  },
};

const mutations = {};

const subscriptions = {};

export default { mutations, queries, subscriptions };
