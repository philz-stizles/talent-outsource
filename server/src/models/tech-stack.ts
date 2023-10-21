import { Model, ObjectId, Schema, model } from 'mongoose';
import Technology from './technology';
import { IUser } from '@src/models/user';

export interface ITechStack {
  user: IUser;
  name: string;
  description?: string;
  technologies: [];
  isPublished: boolean;
}

export interface TechStackDocument extends ITechStack, Document {}

export interface TechStackModel extends Model<TechStackDocument> {}

const TechStackSchema = new Schema<TechStackDocument, TechStackModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    name: String,
    description: String,
    technologies: [{ type: Schema.Types.ObjectId, ref: Technology }],
    isPublished: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const TechStack = model<TechStackDocument, TechStackModel>(
  'TechStack',
  TechStackSchema
);

export default TechStack;
