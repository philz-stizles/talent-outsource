import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  name: String,
  description: String,
});

const Job = model('Job', jobSchema);

export default Job;
