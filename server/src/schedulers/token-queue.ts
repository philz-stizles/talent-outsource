import config from '@src/config';
import Token from '@src/models/token';
import TokenArchive from '@src/models/token-archive';
import Queue from 'bull';

const tokenQueue = new Queue('token:archive', {
  redis: { host: config.redisHost },
});
// This will execute immediately if a delay not specify to any job added to this queue.
tokenQueue.process(async (job) => {
  try {
    console.log('token:archive', job.data);
    const inActiveTokens = await Token.find({ isActive: false }).exec();

    await TokenArchive.insertMany(inActiveTokens);

    await Token.deleteMany({ isActive: false });

    console.log('Token archive executed successfully');
  } catch (error: any) {
    console.log('Token archive failed', error.message);
  }
});

export { tokenQueue };
