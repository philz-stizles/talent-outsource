import { Document, Model, Schema, model } from 'mongoose';

export interface IJob {
  title: string;
  slug: string;
  description: string;
  isPublished: boolean;
  closingAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface IJobDocument extends IJob, Document {}

export interface IJobModel extends Model<IJobDocument> {}

const jobSchema = new Schema<IJobDocument, IJobModel>(
  {
    title: { type: String, require: true, trim: true },
    slug: String,
    description: { type: String, require: true },
    isPublished: Boolean,
    closingAt: Date,
  },
  { timestamps: true }
);

const Job = model<IJobDocument, IJobModel>('Job', jobSchema);

export default Job;
