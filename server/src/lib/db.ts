import mongoose from 'mongoose';

const mongooseConnect = async (dbUri: string): Promise<void> => {
  mongoose.connect(dbUri);
  mongoose.connection.once('open', () => {
    console.log('Connected to database.');
  });
  mongoose.connection.on('error', (e) => {
    console.log('Error connecting to database.');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from database.');
  });
};

export default mongooseConnect;