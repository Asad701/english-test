import { NextResponse } from 'next/server';
import questionsData from '../../../data/questions.json';

export const dynamic = 'force-dynamic';

// Helper to shuffle array (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get('count') || '20', 10);
    const chapter = searchParams.get('chapter');

    let pool = questionsData;
    if (chapter && chapter !== 'all') {
      pool = questionsData.filter(q => q.chapter.toLowerCase() === chapter.toLowerCase());
    }

    if (pool.length === 0) {
      pool = questionsData;
    }

    // Shuffle pool and select 'count' items (default 20)
    const shuffled = shuffleArray(pool);
    const selected = shuffled.slice(0, Math.min(count, pool.length));

    return NextResponse.json({
      success: true,
      totalAvailable: pool.length,
      count: selected.length,
      questions: selected
    });
  } catch (error) {
    console.error('Quiz generation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}
