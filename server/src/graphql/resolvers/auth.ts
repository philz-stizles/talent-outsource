import { authService } from '@src/services';

const queries = {};

const mutations = {
  async signUp(_parent: any, args: any, context: any): Promise<any> {
    const { email, password } = args;
  },
  async signIn(_parent: any, args: any, context: any): Promise<any> {
    const { email, password } = args;
    return authService.signIn(email, password);
  },
  async logOut(_parent: any, args: any, context: any): Promise<any> {
    const { token } = args;
    return authService.signOut(token);
  },
};

const subscriptions = {};

export default { queries, mutations, subscriptions };
