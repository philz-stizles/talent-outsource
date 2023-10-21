import { Document, Model, Schema, model } from 'mongoose';

export enum EventLocation {
  Online,
  Onsite,
}

export interface IEvent {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  agenda: { time: string; title: string }[];
  location: String;
  attendees: string[];
  isPublished: boolean;
  date: Date;
  closingAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEventDocument extends IEvent, Document {}

export interface IEventModel extends Model<IEventDocument> {}

const eventSchema = new Schema<IEventDocument, IEventModel>(
  {
    title: { type: String, require: true, trim: true },
    slug: String,
    imageUrl: { type: String, require: true },
    description: { type: String, require: true },
    attendees: [String],
    agenda: [{ time: String, title: String }],
    location: { type: String, enum: EventLocation, default: EventLocation.Online },
    date: { type: Date, require: true },
    isPublished: { type: Boolean, default: false, remove: true },
    closingAt: Date,
  },
  { timestamps: true }
);

const Event = model<IEventDocument, IEventModel>('Event', eventSchema);

export default Event;
