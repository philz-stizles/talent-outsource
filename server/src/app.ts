import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import {
  notFoundHandler,
  globalErrorHandler,
  xss,
} from '@src/middlewares';
import routes from './routes';
import config from './config';

const app = express();

app.set('trust proxy', 1);

// set security HTTP headers
app.use(helmet({ contentSecurityPolicy: false }));

// parse json request body
app.use(express.json({ limit: '10kb' }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET as string,
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl: dbURI }),
//     cookie: { secure: process.env.NODE_ENV === 'production' },
//   })
// );

// api routes
app.use(config.api.baseEndpoint, routes);

// Handle unhandled routes - routes that are not graphql and are not caught by any routers.
app.all('/^(?!graphql$)/', notFoundHandler);

// Global error handling.
app.use(globalErrorHandler);

export default app;
