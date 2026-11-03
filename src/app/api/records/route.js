import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import QuizRecord from '@/models/QuizRecord';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();

    const {
      candidateName = 'Student',
      score = 0,
      totalQuestions = 20,
      timeSpentSeconds = 0,
      detailedBreakdown = []
    } = data;

    const percentage = Number(((score / totalQuestions) * 100).toFixed(1));
    const passed = (score / totalQuestions) >= 0.5;
    const attemptId = 'ATT-' + Date.now().toString().slice(-6);

    const minutesTaken = Math.floor(timeSpentSeconds / 60);
    const secondsTaken = timeSpentSeconds % 60;
    const timeFormatted = `${minutesTaken}m ${secondsTaken}s (out of 30m 00s)`;

    // Save directly to MongoDB Atlas
    const newRecord = await QuizRecord.create({
      attemptId,
      candidateName: candidateName.trim() || 'Student',
      score,
      totalQuestions,
      percentage,
      passed,
      timeSpentSeconds,
      timeFormatted,
      detailedBreakdown,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: 'Record successfully saved to MongoDB Atlas!',
      record: {
        attemptId: newRecord.attemptId,
        candidateName: newRecord.candidateName,
        score: newRecord.score,
        totalQuestions: newRecord.totalQuestions,
        percentage: newRecord.percentage,
        passed: newRecord.passed,
        timeSpentSeconds: newRecord.timeSpentSeconds,
        timeFormatted: newRecord.timeFormatted,
        dateStr: newRecord.createdAt.toLocaleString(),
        isoDate: newRecord.createdAt.toISOString(),
      }
    });
  } catch (error) {
    console.error('Error saving record to MongoDB:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save record to MongoDB' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const download = searchParams.get('download');

    // Fetch records from MongoDB sorted by newest first
    const records = await QuizRecord.find({}).sort({ createdAt: -1 }).lean();

    // Map records for client display
    const formattedRecords = records.map(r => ({
      attemptId: r.attemptId,
      candidateName: r.candidateName,
      score: r.score,
      totalQuestions: r.totalQuestions,
      percentage: r.percentage,
      passed: r.passed,
      timeSpentSeconds: r.timeSpentSeconds,
      timeFormatted: r.timeFormatted,
      dateStr: new Date(r.createdAt).toLocaleString(),
      isoDate: new Date(r.createdAt).toISOString(),
      detailedBreakdown: r.detailedBreakdown,
    }));

    // If download or raw preview is requested, generate text report directly from MongoDB
    if (download === 'raw') {
      let rawText = '';
      const separator = "=".repeat(80);
      const subSep = "-".repeat(80);

      formattedRecords.forEach(rec => {
        rawText += `\n${separator}\n`;
        rawText += `QUIZ ATTEMPT REPORT: ${rec.attemptId}\n`;
        rawText += `${separator}\n`;
        rawText += `Date & Time    : ${rec.dateStr}\n`;
        rawText += `Candidate Name : ${rec.candidateName}\n`;
        rawText += `Total Score    : ${rec.score} / ${rec.totalQuestions} (${rec.percentage}%)\n`;
        rawText += `Status         : ${rec.passed ? 'PASSED (PASS MARK >= 50%)' : 'FAILED (BELOW 50%)'}\n`;
        rawText += `Time Taken     : ${rec.timeFormatted}\n`;
        if (rec.detailedBreakdown && rec.detailedBreakdown.length > 0) {
          rawText += `${subSep}\nQUESTION BREAKDOWN:\n${subSep}\n`;
          rec.detailedBreakdown.forEach((item, idx) => {
            const qNum = (idx + 1).toString().padStart(2, '0');
            const isCorrect = item.selectedAnswer === item.correctAnswer;
            const status = !item.selectedAnswer ? '[SKIPPED]' : (isCorrect ? '[CORRECT]' : '[WRONG]');
            rawText += `${qNum}. [${item.chapter}] ${item.question}\n`;
            rawText += `    Selected: (${item.selectedAnswer || 'None'}) ${item.selectedText || ''}\n`;
            rawText += `    Correct : (${item.correctAnswer}) ${item.correctText || ''}\n`;
            rawText += `    Result  : ${status}\n\n`;
          });
        }
        rawText += `${separator}\n`;
      });

      return new Response(rawText, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Disposition': 'attachment; filename="all_quiz_records_mongodb.txt"'
        }
      });
    }

    // Generate preview text for in-app toggle
    let rawPreview = '';
    if (formattedRecords.length > 0) {
      const topRec = formattedRecords[0];
      const separator = "=".repeat(80);
      rawPreview = `${separator}\nLATEST ATTEMPT FROM MONGODB (${topRec.attemptId})\n${separator}\n` +
        `Candidate : ${topRec.candidateName}\n` +
        `Date      : ${topRec.dateStr}\n` +
        `Score     : ${topRec.score} / ${topRec.totalQuestions} (${topRec.percentage}%)\n` +
        `Status    : ${topRec.passed ? 'PASSED' : 'FAILED'}\n` +
        `Time      : ${topRec.timeFormatted}\n` +
        `Total Attempts in Cloud Database: ${formattedRecords.length}\n${separator}`;
    }

    return NextResponse.json({
      success: true,
      records: formattedRecords,
      hasRecords: formattedRecords.length > 0,
      rawText: rawPreview,
      source: 'MongoDB Atlas'
    });
  } catch (error) {
    console.error('Error fetching records from MongoDB:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch records from MongoDB' },
      { status: 500 }
    );
  }
}
