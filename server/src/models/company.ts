import { Model, Schema, model, Types, Document } from 'mongoose';
import Job from './job';

export interface ICompany {
  user: Types.ObjectId;
  name: string;
  bio: string;
  employeeRange: string;
  jobs: any[];
  createdAt: string;
  updatedAt: string;
}

export interface CompanyDocument extends ICompany, Document {}

interface CompanyModel extends Model<CompanyDocument> {}

const CompanySchema = new Schema<CompanyDocument, CompanyModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    name: String,
    bio: String,
    jobs: [{ type: Schema.Types.ObjectId, ref: Job.name }],
  },
  { timestamps: true }
);

const Company = model<CompanyDocument, CompanyModel>('Company', CompanySchema);

export default Company;
