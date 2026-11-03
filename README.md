# English XII Board Exam Quiz Application

A Next.js application built for Class 12 (Intermediate) English board examination preparation, featuring 312+ authentic MCQs extracted from solved board papers (Modern Prose, Heroes, and Good-bye, Mr. Chips).

## Features
- **20 Questions per Quiz:** Randomly selected from a pool of 312 authentic board exam MCQs.
- **30-Minute Countdown Timer:** Live countdown with automatic submission when time runs out.
- **Question Palette (1–20):** Jump to any question, mark questions for review, and clear selections.
- **Instant Result Evaluation:** Score calculation, percentage, and side-by-side correct vs. candidate answer review.
- **Retake & On-Demand Quizzes:** Retake the same quiz or generate a completely fresh set of 20 questions.
- **MongoDB Atlas Cloud Database:** All quiz results are saved to MongoDB Atlas (fully serverless-ready for Vercel).
- **Downloadable Reports:** Export or download formatted text reports of past quiz attempts.

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env.local`:
   ```env
   MONGO_URI="your-mongodb-connection-string"
   ```

3. Build and run:
   ```bash
   npm run build
   npm run start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying on Vercel

1. Import this repository into Vercel.
2. Under **Environment Variables**, add:
   - Key: `MONGO_URI`
   - Value: `your-mongodb-connection-string`
3. Click **Deploy**.
