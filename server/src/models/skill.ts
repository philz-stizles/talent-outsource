import { Document, Model, Schema, model } from 'mongoose';

export interface ISkill {
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ISkillDocument extends ISkill, Document {}

export interface ISkillModel extends Model<ISkillDocument> {}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const SkillSchema = new Schema<ISkillDocument, ISkillModel>(
  {
    name: {
      type: String,
      required: [true, 'A Skill must have an name'],
      unique: true,
      index: true,
      trim: true,
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

const Skill = model<ISkillDocument, ISkillModel>('Skill', SkillSchema);

export default Skill;
