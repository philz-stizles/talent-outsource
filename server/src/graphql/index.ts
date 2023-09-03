import { NextFunction, Request, Response } from 'express';
import { createHandler } from 'graphql-http';
import { schema } from './schema';
import config from '@src/config';
import logger from '@src/config/logger';

const initGraphQLServer = async (app: any) => {
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
    createHandler({
      schema: schema,
    })
  );

  if (config.env !== 'production') {
    logger.info(`GraphQL running @ http://localhost:${config.port}/graphql`);
  }
};

export default initGraphQLServer;
