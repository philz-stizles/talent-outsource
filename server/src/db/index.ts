import logger from '@src/config/logger';
import mongoose from 'mongoose';

const mongooseConnect = async (dbUri: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    mongoose.connect(dbUri);
    mongoose.connection.once('open', () => {
      logger.info('Connected to database.');
      resolve();
    });
    mongoose.connection.on('error', e => {
      logger.error('Error connecting to database.');
      reject();
    });
    mongoose.connection.on('disconnected', () => {
      logger.info('Disconnected from database.');
    });
  });
};

export default mongooseConnect;
