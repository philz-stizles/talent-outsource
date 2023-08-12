import dotenv from 'dotenv';

dotenv.config();

export const dbURI = process.env.DATABASE_URI as string;
