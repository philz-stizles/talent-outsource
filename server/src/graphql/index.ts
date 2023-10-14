import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
// import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs"
import cors from 'cors';
import pkg from 'body-parser';
import config from '@src/config';
import logger from '@src/config/logger';
import { Server } from 'http';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import context from './context';
import User, { IUser } from '@src/models/user';

const { json } = pkg;

const initGraphQLServer = async (app: any, httpServer: Server) => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const plugins = [
    ApolloServerPluginDrainHttpServer({ httpServer }), // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ];
  if (config.env === 'production') {
    plugins.push(ApolloServerPluginLandingPageDisabled());
  }

  interface AppContext {
    isAuthenticated: boolean;
    user: IUser | null;
  }

  const server = new ApolloServer<AppContext>({
    schema,
    plugins,
    // Using graphql-upload without CSRF prevention is very insecure.
    csrfPrevention: true,
    cache: 'bounded',
  });

  // Creating the WebSocket server
  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.
    server: httpServer,
    // Pass a different path here if app.use
    // serves expressMiddleware at a different path
    path: '/subscriptions',
  });

  // Hand in the schema we just created and have the
  // WebSocketServer start listening.
  const serverCleanup = useServer({ schema }, wsServer);

  await server.start();
  if (config.env !== 'production') {
    logger.info(`GraphQL running @ http://localhost:${config.port}/graphql`);
  }

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    // graphqlUploadExpress({
    //   // This middleware should be added before calling `expressMiddleware()`.
    //   maxFieldSize: 1000000, // Maximum allowed non-file multipart form field size in bytes; enough for your queries.
    //   maxFileSize: 10000, // Maximum allowed file size in bytes.
    //   maxFiles: 5, // Maximum allowed number of files.
    // }),
    expressMiddleware(server, {
      context,
    })
  );

  // return () => {
  //   if (config.env !== 'production') {
  //     logger.info(
  //       `GraphQL running @ http://localhost:${config.port}/graphql`
  //     );
  //   }
  // };
};

export default initGraphQLServer;
