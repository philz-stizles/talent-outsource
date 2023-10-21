import { Request } from 'express';
import jwt from 'jsonwebtoken';
import config from '@src/config';
import { userService } from '@src/services';
import { IJWTokenPayload } from '@src/services/token';

const context = async ({ req }: { req: Request }) => {
  try {
    const authHeader = req.headers.authorization || '';
    if (!authHeader) {
      throw new Error('you must be logged in');
    }

    // get the user token from the headers
    const token = authHeader.split(' ')[1];

    console.log(token);

    // Verify token
    const decodedToken: IJWTokenPayload | undefined = jwt.verify(
      token,
      config.jwt.secret
    ) as IJWTokenPayload | undefined;
    if (!decodedToken) {
      throw new Error('you must be logged in');
    }

    const user = await userService.getById(decodedToken.sub);
    if (!user) {
      throw new Error('you must be logged in');
    }

    return { isAuthenticated: !!user, user };
  } catch (error: any) {
    console.log('isAuthenticated', false, error.message);
    return { isAuthenticated: false, user: null };
  }
};

export default context;
