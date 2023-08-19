import http from 'http';
import app from '@src/app';
import dbConnect from '@src/lib/db';
import { dbURI } from '@src/utils/constants';
import { tokenQueue } from '@src/schedulers/token-queue';
import initGraphQLServer from '@src/graphql';

const startUp = async (expressApp: any) => {
  if (!process.env.SESSION_SECRET) {
    throw new Error('SESSION_SECRET must be defined');
  }

  if (!dbURI) {
    throw new Error('DATABASE_URI must be defined');
  }

  if (!process.env.PORT) {
    throw new Error('PORT must be defined');
  }

  // Connect to database.
  await dbConnect(dbURI);

  // initialize http server
  const httpServer = http.createServer(expressApp); // Now we have our own http instance
  // unlike with express where the server was implicitly create for us

  const PORT: number = parseInt(process.env.PORT as string, 10);
  const server = httpServer.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT} ${process.env.NODE_ENV}`);
  });

  // Initialize GraphQL
  await initGraphQLServer(expressApp);

  // await tokenQueue.add(
  //   {},
  //   // If you do not specify a delay, the job will execute immediately
  //   {
  //     repeat: {
  //       cron: '0 3 * * SAT',
  //     },
  //   }
  // );

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
