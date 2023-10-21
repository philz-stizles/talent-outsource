import { Document, Model, Schema, model } from 'mongoose';

export enum RoleType {
    ADMIN = 'admin',
    TALENT = 'talent',
    COMPANY = 'company'
}

export interface IRole {
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IRoleDocument extends IRole, Document {}

export interface IRoleModel extends Model<IRoleDocument> {}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const RoleSchema = new Schema<IRoleDocument, IRoleModel>(
  {
    name: {
      type: String,
      required: [true, 'A Role must have an name'],
      unique: true,
      index: true,
      trim: true,
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

const Role = model<IRoleDocument, IRoleModel>('Role', RoleSchema);

export default Role;
