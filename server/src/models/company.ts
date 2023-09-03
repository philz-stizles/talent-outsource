import { Schema, model } from 'mongoose';
import Job from './job';

const CompanySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  name: String,
  description: String,
  jobs: [{ type: Schema.Types.ObjectId, ref: Job }],
});

const Company = model('Company', CompanySchema);

export default Company;
