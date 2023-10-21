import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.test.local') });

declare global {
  var signin: () => string[];
}

jest.mock('../services/email');

let mongo: any;

beforeAll(async () => {
  // process.env.JWT_KEY = 'nh7dd4456vhbgkjvdDWQZXMKOY6FDEAmkbZMOPI';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = () => {
  // Generate user id
  const id = new mongoose.Types.ObjectId().toHexString();

  // Build a JWT payload. { id, email }
  const payload = {
    id,
    email: 'test@test.com',
  };

  // Create the JWT.
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session Object.
  const session = { jwt: token };

  // Turn the session into JSON.
  const sessionJSON = JSON.stringify(session);

  // Encode JSON in base64.
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // return a string that is the cookie with the encoded data.
  return [`session=${base64}`];
};
