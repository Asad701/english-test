const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGO_URI = "mongodb://ADMIN:asad123ASAD@ac-gkdi2ze-shard-00-00.6malrfw.mongodb.net:27017,ac-gkdi2ze-shard-00-01.6malrfw.mongodb.net:27017,ac-gkdi2ze-shard-00-02.6malrfw.mongodb.net:27017/test?ssl=true&authSource=admin&retryWrites=true&w=majority";

const recordsJsonPath = path.join(__dirname, '..', 'records', 'quiz_records.json');

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
  attemptId: { type: String, required: true, unique: true },
  candidateName: { type: String, required: true, default: 'Student' },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true, default: 20 },
  percentage: { type: Number, required: true },
  passed: { type: Boolean, required: true },
  timeSpentSeconds: { type: Number, required: true, default: 0 },
  timeFormatted: { type: String, required: true },
  detailedBreakdown: [DetailedItemSchema],
  createdAt: { type: Date, default: Date.now },
});

const QuizRecord = mongoose.models.QuizRecord || mongoose.model('QuizRecord', QuizRecordSchema);

async function migrate() {
  console.log('Connecting to MongoDB Atlas...');
  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 15000,
  });
  console.log('Connected to MongoDB Atlas successfully!');

  let records = [];
  if (fs.existsSync(recordsJsonPath)) {
    try {
      records = JSON.parse(fs.readFileSync(recordsJsonPath, 'utf-8'));
    } catch (e) {
      console.error('Error parsing records JSON:', e);
    }
  }

  if (records.length === 0) {
    console.log('No local JSON records found to migrate. Creating sample record...');
    records = [{
      attemptId: 'ATT-INITIAL',
      candidateName: 'Initial Candidate',
      score: 18,
      totalQuestions: 20,
      percentage: 90,
      passed: true,
      timeSpentSeconds: 645,
      timeFormatted: '10m 45s (out of 30m 00s)',
      createdAt: new Date(),
      detailedBreakdown: []
    }];
  }

  let migratedCount = 0;
  for (const rec of records) {
    const existing = await QuizRecord.findOne({ attemptId: rec.attemptId });
    if (!existing) {
      await QuizRecord.create({
        attemptId: rec.attemptId,
        candidateName: rec.candidateName,
        score: rec.score,
        totalQuestions: rec.totalQuestions || 20,
        percentage: rec.percentage,
        passed: rec.passed !== undefined ? rec.passed : (rec.score / (rec.totalQuestions || 20) >= 0.5),
        timeSpentSeconds: rec.timeSpentSeconds || 0,
        timeFormatted: rec.timeFormatted || 'N/A',
        detailedBreakdown: rec.detailedBreakdown || [],
        createdAt: rec.isoDate ? new Date(rec.isoDate) : new Date(),
      });
      console.log(`Migrated attempt: ${rec.attemptId} (${rec.candidateName})`);
      migratedCount++;
    } else {
      console.log(`Attempt ${rec.attemptId} already exists in MongoDB.`);
    }
  }

  console.log(`Migration complete! Successfully migrated ${migratedCount} record(s) to MongoDB.`);
  await mongoose.disconnect();
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
