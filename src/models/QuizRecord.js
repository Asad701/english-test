import mongoose from 'mongoose';

const DetailedItemSchema = new mongoose.Schema({
  id: Number,
  chapter: String,
  question: String,
  underlinedWord: String,
  selectedAnswer: String,
  selectedText: String,
  correctAnswer: String,
  correctText: String,
  isCorrect: Boolean,
}, { _id: false });

const QuizRecordSchema = new mongoose.Schema({
  attemptId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  candidateName: {
    type: String,
    required: true,
    default: 'Student',
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
    default: 20,
  },
  percentage: {
    type: Number,
    required: true,
  },
  passed: {
    type: Boolean,
    required: true,
  },
  timeSpentSeconds: {
    type: Number,
    required: true,
    default: 0,
  },
  timeFormatted: {
    type: String,
    required: true,
  },
  detailedBreakdown: [DetailedItemSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

export default mongoose.models.QuizRecord || mongoose.model('QuizRecord', QuizRecordSchema);
