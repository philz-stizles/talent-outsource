import { NextFunction, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import config from '@src/config';

const graphQLServer = async (app: any) => {
  const loggingMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log('ip:', req.ip);
    next();
  };

  app.use(loggingMiddleware);
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  if(config.env !== 'production') {
    console.log(
    `GraphQL running @ http://localhost:${config.port}/graphql`
  );
  }
};

export default graphQLServer;
