const queries = {
  async user(_parent: any, args: any, context: any): Promise<any[]> {
    return args.id;
  },
};

const mutations = {};

const subscriptions = {};

export default { mutations, queries, subscriptions };
