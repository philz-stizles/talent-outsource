import http from 'http';
import app from '@src/app';
import dbConnect from '@src/lib/db';
import { tokenQueue } from '@src/schedulers/token-queue';
import initGraphQLServer from '@src/graphql';
import logger from '@src/config/logger';
import config from '@src/config';

const startUp = async (expressApp: any) => {
  // Connect to database.
  await dbConnect(config.dbUri);

  // initialize http server
  const httpServer = http.createServer(expressApp); // Now we have our own http instance
  // unlike with express where the server was implicitly create for us

  // Initialize GraphQL
  await initGraphQLServer(expressApp, httpServer);

  const PORT = config.port;
  const server = httpServer.listen(PORT, () => {});

  await tokenQueue.add(
    {
      test: 'test',
    },
    // If you do not specify a delay, the job will execute immediately
    {
      repeat: {
        cron: '0 3 * * SAT',
      },
    }
  );

  process.on('unhandledRejection', (err?: Error) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err?.name, err?.message);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED. Shutting down gracefully...');
    server.close(() => {
      console.log('💥 Process terminated!');
    });
  });
};

startUp(app);
