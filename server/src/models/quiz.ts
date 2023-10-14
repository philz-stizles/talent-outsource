import { Schema, model } from 'mongoose';

const QuizSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  technology: {
    type: Schema.Types.ObjectId,
    ref: 'technology',
    required: true,
  },
  name: String,
  description: String,
});

const Quiz = model('Quiz', QuizSchema);

export default Quiz;
