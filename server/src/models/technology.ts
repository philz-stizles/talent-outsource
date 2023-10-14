import { Schema, model } from 'mongoose';
import Quiz from './quiz';

const TechnologySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  name: String,
  description: String,
  quizzes: [{ type: Schema.Types.ObjectId, ref: Quiz }],
});

const Technology = model('Technology', TechnologySchema);

export default Technology;
