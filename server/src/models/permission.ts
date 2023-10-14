import { Document, Model, Schema, model } from 'mongoose';

export enum PermissionType {
    ADMIN = 'admin',
    TALENT = 'talent',
    COMPANY = 'company'
}

export interface IPermission {
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IPermissionDocument extends IPermission, Document {}

export interface IPermissionModel extends Model<IPermissionDocument> {}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const PermissionSchema = new Schema<IPermissionDocument, IPermissionModel>(
  {
    name: {
      type: String,
      required: [true, 'A Permission must have an name'],
      unique: true,
      index: true,
      trim: true,
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

const Permission = model<IPermissionDocument, IPermissionModel>('Permission', PermissionSchema);

export default Permission;
