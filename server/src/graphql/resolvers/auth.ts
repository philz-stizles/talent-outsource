import { IUser } from '@src/models/user';
import { authService, tokenService } from '@src/services';
import { ApiResponse } from '@src/utils/api.utils';

const queries = {};

const mutations = {
  async signUp(_parent: any, args: any, context: any): Promise<any> {
    const { email, password } = args;
  },
  async signIn(_parent: any, args: any, context: any): Promise<any> {
    const { email, password } = args;
    const user = await authService.signIn(email, password);

    // Generate user token.
    const tokens = await tokenService.generateAuthTokens(user);

    console.log(tokens)

    return new ApiResponse<{ tokens: any; user: IUser }>('Signin Successful', {
      tokens,
      user,
    });
  },
  async logOut(_parent: any, args: any, context: any): Promise<any> {
    const { token } = args;
    return authService.signOut(token);
  },
};

const subscriptions = {};

export default { queries, mutations, subscriptions };
