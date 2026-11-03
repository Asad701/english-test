'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Sparkles, 
  FileText, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  Flag, 
  Download, 
  RefreshCw,
  Home,
  Check,
  HelpCircle,
  BarChart3
} from 'lucide-react';

export default function EnglishQuizApp() {
  // Navigation views: 'welcome' | 'quiz' | 'results' | 'records'
  const [view, setView] = useState('welcome');

  // Candidate setup
  const [candidateName, setCandidateName] = useState('Student');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [availableChapters, setAvailableChapters] = useState([]);

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qId]: 'A'|'B'|'C'|'D' }
  const [flagged, setFlagged] = useState({}); // { [qId]: boolean }
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds (30 * 60 = 1800)
  const [timeSpent, setTimeSpent] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Result state
  const [resultData, setResultData] = useState(null);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'incorrect' | 'correct'

  // Records state
  const [recordsList, setRecordsList] = useState([]);
  const [rawTxtContent, setRawTxtContent] = useState('');
  const [recordsLoading, setRecordsLoading] = useState(false);

  const timerRef = useRef(null);

  // Load available chapters list once
  useEffect(() => {
    fetch('/api/quiz?count=350')
      .then(res => res.json())
      .then(data => {
        if (data.questions) {
          const chaps = [...new Set(data.questions.map(q => q.chapter))];
          setAvailableChapters(chaps);
        }
      })
      .catch(err => console.error('Error prefetching chapters:', err));
  }, []);

  // Timer Countdown Effect
  useEffect(() => {
    if (view === 'quiz') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpent(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [view]);

  // Start new Quiz on demand
  const startQuiz = async (chapterFilter = selectedChapter) => {
    setLoading(true);
    try {
      const url = `/api/quiz?count=20${chapterFilter && chapterFilter !== 'all' ? `&chapter=${encodeURIComponent(chapterFilter)}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.success && data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setCurrentIndex(0);
        setAnswers({});
        setFlagged({});
        setTimeLeft(1800); // 30 minutes
        setTimeSpent(0);
        setView('quiz');
      } else {
        alert('Could not fetch questions. Please try again.');
      }
    } catch (err) {
      console.error('Quiz loading failed:', err);
      alert('Network error while loading questions.');
    } finally {
      setLoading(false);
    }
  };

  // Retake exact same quiz questions
  const retakeSameQuiz = () => {
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setTimeLeft(1800);
    setTimeSpent(0);
    setView('quiz');
  };

  // Auto-submit when 30 mins are up
  const handleAutoSubmit = () => {
    alert('Time has expired! Submitting your answers automatically.');
    submitQuiz();
  };

  // Submit Quiz Calculation and Save to TXT file
  const submitQuiz = async () => {
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    let score = 0;
    const detailed = questions.map(q => {
      const userChoice = answers[q.id] || null;
      const isCorrect = userChoice === q.answer;
      if (isCorrect) score += 1;

      return {
        id: q.id,
        chapter: q.chapter,
        question: q.question,
        underlinedWord: q.underlinedWord,
        options: q.options,
        selectedAnswer: userChoice,
        selectedText: userChoice ? q.options[userChoice] : null,
        correctAnswer: q.answer,
        correctText: q.options[q.answer],
        isCorrect
      };
    });

    const payload = {
      candidateName: candidateName.trim() || 'Student',
      score,
      totalQuestions: questions.length,
      timeSpentSeconds: timeSpent,
      detailedBreakdown: detailed
    };

    // Save record to server TXT file
    try {
      const res = await fetch('/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const saveRes = await res.json();
      console.log('Record saved to txt:', saveRes);
    } catch (e) {
      console.error('Failed to save to txt:', e);
    }

    setResultData({
      score,
      total: questions.length,
      percentage: ((score / questions.length) * 100).toFixed(1),
      timeSpent,
      breakdown: detailed
    });

    setIsSubmitting(false);
    setShowSubmitModal(false);
    setView('results');
  };

  // Load records
  const loadRecords = async () => {
    setRecordsLoading(true);
    try {
      const res = await fetch('/api/records');
      const data = await res.json();
      if (data.success) {
        setRecordsList(data.records || []);
        setRawTxtContent(data.rawText || '');
      }
    } catch (e) {
      console.error('Failed to load records:', e);
    } finally {
      setRecordsLoading(false);
    }
  };

  const openRecordsView = () => {
    loadRecords();
    setView('records');
  };

  // Formatter for MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Count answered
  const answeredCount = Object.keys(answers).filter(k => answers[k]).length;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div 
            onClick={() => { if (view !== 'quiz' || confirm('Exit current quiz? Your progress will be lost.')) setView('welcome'); }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-emerald-600 group-hover:bg-emerald-700 text-white p-2 rounded-xl shadow-md transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-800 leading-tight">English XII Quiz Master</h1>
              <p className="text-xs text-slate-500 font-medium">Solved Board Exam MCQs (Part 1, 2 & Chips)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {view === 'quiz' && (
              <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm ${
                timeLeft < 180 
                  ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' 
                  : timeLeft < 300 
                    ? 'bg-amber-50 text-amber-700 border-amber-300' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            <button
              onClick={openRecordsView}
              className="flex items-center space-x-1.5 text-xs md:text-sm font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg transition-colors border border-emerald-300"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>MongoDB Records</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-4 py-6 flex-1">
        {/* ========================================================================= */}
        {/* VIEW 1: WELCOME & CONFIGURATION */}
        {/* ========================================================================= */}
        {view === 'welcome' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" /> Authentic Solved Papers
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  English Class 12 Board Exam Quiz
                </h2>
                <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-xl">
                  Test your mastery with genuine examination MCQs from <i>Scholar EZ Exam Solved Papers</i>. 
                  Every quiz generates <b>20 on-demand MCQs</b> with a strict <b>30-minute timer</b>, instant answer review, and automatic cloud recording directly to <b>MongoDB Atlas</b>.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
                    <p className="text-2xl font-black">20</p>
                    <p className="text-xs text-emerald-200">MCQs per Quiz</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
                    <p className="text-2xl font-black">30:00</p>
                    <p className="text-xs text-emerald-200">Minutes Time</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
                    <p className="text-2xl font-black">312+</p>
                    <p className="text-xs text-emerald-200">Question Bank</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
                    <p className="text-2xl font-black">MongoDB</p>
                    <p className="text-xs text-emerald-200">Cloud Saved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Setup Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" /> Candidate & Quiz Settings
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Candidate / Student Name
                  </label>
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Your name will be stored with your score in the MongoDB database.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Select Syllabus / Chapter Scope
                  </label>
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800 bg-white"
                  >
                    <option value="all">Full Comprehensive Exam (All 16 Chapters - Recommended)</option>
                    {availableChapters.map((ch, idx) => (
                      <option key={idx} value={ch}>{ch}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rules Alert */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1.5">
                <p className="font-semibold text-slate-700">Important Instructions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Each quiz randomly picks <b>20 MCQs</b> from the solved exam paper pictures.</li>
                  <li>You have exactly <b>30 minutes</b> to complete and submit.</li>
                  <li>Each correct answer awards <b>1 mark</b> (Total: 20 marks). Minimum 50% (10 marks) to pass.</li>
                  <li>Once submitted, your right and wrong answers will be shown instantly.</li>
                  <li>Every single test result is permanently saved to <b>MongoDB Atlas</b> (cloud database).</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => startQuiz(selectedChapter)}
                  disabled={loading}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 text-base"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Generating 20 Questions...</span>
                    </>
                  ) : (
                    <>
                      <span>Start 20-MCQ Quiz Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  onClick={openRecordsView}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl border border-slate-300 transition-colors flex items-center justify-center space-x-2"
                >
                  <FileText className="w-5 h-5 text-slate-500" />
                  <span>View MongoDB Records</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ACTIVE QUIZ */}
        {/* ========================================================================= */}
        {view === 'quiz' && questions.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left/Sidebar: Question Palette & Overview */}
            <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm">Question Palette</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    {answeredCount} / {questions.length} Done
                  </span>
                </div>

                {/* 20 Questions Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const isAnswered = !!answers[q.id];
                    const isFlagged = !!flagged[q.id];
                    const isCurrent = idx === currentIndex;

                    let btnClass = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';
                    if (isAnswered) btnClass = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                    if (isFlagged) btnClass = 'bg-amber-400 text-amber-950 border-amber-500 font-bold';
                    if (isCurrent) btnClass += ' ring-2 ring-emerald-600 ring-offset-2';

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-10 rounded-xl text-xs font-medium border flex items-center justify-center relative transition-all ${btnClass}`}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="text-[11px] text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
                    <span>Answered ({answeredCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-amber-400 inline-block"></span>
                    <span>Marked for Review ({Object.values(flagged).filter(Boolean).length})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-slate-100 border inline-block"></span>
                    <span>Unanswered ({questions.length - answeredCount})</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded-xl shadow-md transition-colors text-sm"
                >
                  Finish & Submit Quiz
                </button>
              </div>
            </div>

            {/* Right/Center: Active Question Card */}
            <div className="lg:col-span-3 space-y-4 order-1 lg:order-2">
              {/* Progress and Timer Banner */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase text-emerald-600 tracking-wider">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <div className="w-48 bg-slate-100 h-2 rounded-full overflow-hidden mt-1.5">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">Time Remaining:</span>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border font-mono font-bold text-sm ${
                    timeLeft < 300 ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' : 'bg-slate-100 text-slate-800 border-slate-300'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>

              {/* Main Question Box */}
              {(() => {
                const currentQ = questions[currentIndex];
                const selectedOpt = answers[currentQ.id];
                const isFlagged = !!flagged[currentQ.id];

                // Split question on underlined word to visually highlight it
                const parts = currentQ.underlinedWord 
                  ? currentQ.question.split(new RegExp(`(${currentQ.underlinedWord})`, 'gi'))
                  : [currentQ.question];

                return (
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                    {/* Chapter & Author Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                        {currentQ.chapter}
                        {currentQ.author && <span className="text-slate-400">({currentQ.author})</span>}
                      </span>

                      <button
                        onClick={() => {
                          setFlagged(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
                        }}
                        className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                          isFlagged 
                            ? 'bg-amber-100 text-amber-800 border-amber-300' 
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Flag className="w-3.5 h-3.5" />
                        <span>{isFlagged ? 'Flagged for Review' : 'Mark for Review'}</span>
                      </button>
                    </div>

                    {/* Question Text */}
                    <div className="space-y-2">
                      <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Choose the right option of the underlined word:
                      </p>
                      <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed">
                        {parts.map((part, i) => {
                          const isMatch = currentQ.underlinedWord && part.toLowerCase() === currentQ.underlinedWord.toLowerCase();
                          return isMatch ? (
                            <span 
                              key={i} 
                              className="underline decoration-emerald-500 decoration-4 underline-offset-4 bg-emerald-50 text-emerald-950 font-extrabold px-1 rounded"
                            >
                              {part}
                            </span>
                          ) : (
                            <span key={i}>{part}</span>
                          );
                        })}
                      </h2>
                    </div>

                    {/* 4 Options Grid */}
                    <div className="space-y-3 pt-2">
                      {['A', 'B', 'C', 'D'].map((letter) => {
                        const optText = currentQ.options[letter];
                        if (!optText) return null;
                        const isSelected = selectedOpt === letter;

                        return (
                          <div
                            key={letter}
                            onClick={() => {
                              setAnswers(prev => ({ ...prev, [currentQ.id]: letter }));
                            }}
                            className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50/70 shadow-sm'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                                isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {letter}
                              </span>
                              <span className={`text-base font-medium ${isSelected ? 'text-emerald-950 font-bold' : 'text-slate-800'}`}>
                                {optText}
                              </span>
                            </div>

                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Navigation Toolbar */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                          disabled={currentIndex === 0}
                          className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs md:text-sm font-semibold text-slate-700 flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </button>

                        {selectedOpt && (
                          <button
                            onClick={() => {
                              setAnswers(prev => {
                                const next = { ...prev };
                                delete next[currentQ.id];
                                return next;
                              });
                            }}
                            className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          >
                            Clear Answer
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {currentIndex < questions.length - 1 ? (
                          <button
                            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs md:text-sm font-semibold flex items-center gap-1 shadow-sm"
                          >
                            Next <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setShowSubmitModal(true)}
                            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-bold flex items-center gap-1 shadow-md"
                          >
                            Review & Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBMIT CONFIRMATION MODAL */}
        {/* ========================================================================= */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in duration-150">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-emerald-600" /> Confirm Submission
              </h3>

              <p className="text-sm text-slate-600">
                Are you ready to submit your quiz? You will immediately see your score, correct answers, and results will be saved to MongoDB Atlas cloud database.
              </p>

              <div className="bg-slate-50 rounded-xl p-3 grid grid-cols-3 text-center border border-slate-100 text-xs">
                <div>
                  <p className="font-bold text-slate-800 text-base">{questions.length}</p>
                  <p className="text-slate-500">Total</p>
                </div>
                <div>
                  <p className="font-bold text-emerald-600 text-base">{answeredCount}</p>
                  <p className="text-slate-500">Answered</p>
                </div>
                <div>
                  <p className="font-bold text-rose-600 text-base">{questions.length - answeredCount}</p>
                  <p className="text-slate-500">Unanswered</p>
                </div>
              </div>

              {questions.length - answeredCount > 0 && (
                <p className="text-xs text-amber-600 font-medium">
                  Note: You have {questions.length - answeredCount} unanswered questions remaining.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 text-sm"
                >
                  Keep Solving
                </button>
                <button
                  onClick={submitQuiz}
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                >
                  {isSubmitting ? 'Saving...' : 'Yes, Submit Now'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: RESULTS & FULL ANSWER REVIEW */}
        {/* ========================================================================= */}
        {view === 'results' && resultData && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Scorecard Hero Banner */}
            <div className={`rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden ${
              resultData.score >= 10 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700' 
                : 'bg-gradient-to-r from-slate-700 to-slate-900'
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider">
                    Official Exam Evaluation
                  </span>
                  <h2 className="text-3xl font-black">
                    {resultData.score >= 10 ? '🎉 Excellent Job!' : '📚 Keep Practicing!'}
                  </h2>
                  <p className="text-sm text-white/90">
                    Candidate: <b>{candidateName}</b> &bull; Time Taken: <b>{Math.floor(resultData.timeSpent / 60)}m {resultData.timeSpent % 60}s</b> (Limit: 30m)
                  </p>
                  <p className="text-xs text-emerald-100 flex items-center justify-center md:justify-start gap-1 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    Record permanently saved in MongoDB Atlas database
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center min-w-[200px]">
                  <p className="text-xs uppercase font-bold tracking-wider text-white/80">Marks Obtained</p>
                  <p className="text-5xl font-black my-1">
                    {resultData.score} <span className="text-2xl font-light text-white/70">/ {resultData.total}</span>
                  </p>
                  <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${
                    resultData.score >= 10 ? 'bg-emerald-300 text-emerald-950' : 'bg-rose-300 text-rose-950'
                  }`}>
                    {resultData.percentage}% &bull; {resultData.score >= 10 ? 'PASSED' : 'NEEDS PRACTICE'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => startQuiz(selectedChapter)}
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Make New Quiz (20 Fresh MCQs)</span>
              </button>

              <button
                onClick={retakeSameQuiz}
                className="py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <RotateCcw className="w-4 h-4 text-slate-600" />
                <span>Retake Same 20 Questions</span>
              </button>

              <button
                onClick={openRecordsView}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl border border-slate-300 transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>View MongoDB Records</span>
              </button>
            </div>

            {/* Detailed Question Review Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between pb-3 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Detailed Question-by-Question Review</h3>
                  <p className="text-xs text-slate-500">Compare your answers with verified board solutions</p>
                </div>

                {/* Review Filters */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1 rounded-lg transition-colors ${reviewFilter === 'all' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600'}`}
                  >
                    All ({resultData.breakdown.length})
                  </button>
                  <button
                    onClick={() => setReviewFilter('incorrect')}
                    className={`px-3 py-1 rounded-lg transition-colors ${reviewFilter === 'incorrect' ? 'bg-white shadow-sm text-rose-700 font-bold' : 'text-slate-600'}`}
                  >
                    Incorrect ({resultData.breakdown.filter(i => !i.isCorrect).length})
                  </button>
                  <button
                    onClick={() => setReviewFilter('correct')}
                    className={`px-3 py-1 rounded-lg transition-colors ${reviewFilter === 'correct' ? 'bg-white shadow-sm text-emerald-700 font-bold' : 'text-slate-600'}`}
                  >
                    Correct ({resultData.breakdown.filter(i => i.isCorrect).length})
                  </button>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-4 pt-2">
                {resultData.breakdown
                  .filter(item => {
                    if (reviewFilter === 'incorrect') return !item.isCorrect;
                    if (reviewFilter === 'correct') return item.isCorrect;
                    return true;
                  })
                  .map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`p-4 md:p-5 rounded-2xl border-2 space-y-3 ${
                          item.isCorrect
                            ? 'border-emerald-200 bg-emerald-50/30'
                            : !item.selectedAnswer
                              ? 'border-amber-200 bg-amber-50/30'
                              : 'border-rose-200 bg-rose-50/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                              Q{item.id}
                            </span>
                            <span className="text-xs font-semibold text-slate-500">
                              {item.chapter}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold">
                            {item.isCorrect ? (
                              <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                                <CheckCircle className="w-3.5 h-3.5" /> Correct (+1)
                              </span>
                            ) : !item.selectedAnswer ? (
                              <span className="flex items-center gap-1 text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                                <AlertCircle className="w-3.5 h-3.5" /> Skipped (0)
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                                <XCircle className="w-3.5 h-3.5" /> Incorrect (0)
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="font-semibold text-slate-800 text-sm md:text-base">
                          {item.question}
                        </p>

                        {/* Options summary */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          {['A', 'B', 'C', 'D'].map((lettr) => {
                            const optText = item.options[lettr];
                            if (!optText) return null;
                            const isCorrectOpt = item.correctAnswer === lettr;
                            const isSelectedOpt = item.selectedAnswer === lettr;

                            let optClass = 'bg-white border-slate-200 text-slate-700';
                            if (isCorrectOpt) {
                              optClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                            } else if (isSelectedOpt && !isCorrectOpt) {
                              optClass = 'bg-rose-100 border-rose-400 text-rose-950 font-semibold line-through';
                            }

                            return (
                              <div
                                key={lettr}
                                className={`p-2.5 rounded-xl border flex items-center justify-between ${optClass}`}
                              >
                                <span>
                                  <b>({lettr})</b> {optText}
                                </span>
                                {isCorrectOpt && (
                                  <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold ml-2">
                                    RIGHT ANSWER
                                  </span>
                                )}
                                {isSelectedOpt && !isCorrectOpt && (
                                  <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold ml-2">
                                    YOUR CHOICE
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: TXT RECORDS ARCHIVE */}
        {/* ========================================================================= */}
        {view === 'records' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" /> Saved Result Records (MongoDB Atlas)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Records are stored in MongoDB Atlas cloud database. Fully production ready for Vercel.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/api/records?download=raw"
                    download="all_quiz_records.txt"
                    className="flex items-center space-x-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download TXT Report</span>
                  </a>

                  <button
                    onClick={loadRecords}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl border transition-colors"
                    title="Refresh records"
                  >
                    <RefreshCw className={`w-4 h-4 ${recordsLoading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {recordsLoading ? (
                <div className="py-12 text-center text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                  <p className="text-xs font-semibold">Loading records from disk...</p>
                </div>
              ) : recordsList.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-3">
                  <FileText className="w-12 h-12 stroke-[1.2] mx-auto text-slate-300" />
                  <p className="text-sm font-semibold text-slate-600">No records saved yet!</p>
                  <p className="text-xs text-slate-400">
                    Take your first 20-MCQ quiz to generate and save record files.
                  </p>
                  <button
                    onClick={() => startQuiz('all')}
                    className="mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md"
                  >
                    Start a Quiz Now
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
                          <th className="py-2.5 px-3">Attempt ID</th>
                          <th className="py-2.5 px-3">Date & Time</th>
                          <th className="py-2.5 px-3">Candidate</th>
                          <th className="py-2.5 px-3">Score</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3">Time Taken</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                        {recordsList.map((rec, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-slate-800">
                              {rec.attemptId}
                            </td>
                            <td className="py-3 px-3 text-slate-500">{rec.dateStr}</td>
                            <td className="py-3 px-3 font-semibold text-slate-900">{rec.candidateName}</td>
                            <td className="py-3 px-3 font-bold">
                              {rec.score} / {rec.totalQuestions} ({rec.percentage}%)
                            </td>
                            <td className="py-3 px-3">
                              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                                rec.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                                {rec.passed ? 'PASSED' : 'FAILED'}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-slate-500">{rec.timeFormatted}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Raw TXT Preview Toggle */}
                  <div className="pt-4 border-t border-slate-200">
                    <details className="group">
                      <summary className="cursor-pointer text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center justify-between py-1">
                        <span>View Formatted Text Report Preview (Generated from Cloud Database)</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <pre className="mt-2 p-4 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl overflow-x-auto max-h-80 whitespace-pre">
                        {rawTxtContent || 'No records logged in file yet.'}
                      </pre>
                    </details>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setView('welcome')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5"
                >
                  <Home className="w-4 h-4" /> Return to Home
                </button>

                <button
                  onClick={() => startQuiz('all')}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" /> Start New 20-MCQ Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        <p>English XII Solved Papers Quiz Application &bull; 20 MCQs &bull; 30 Minutes &bull; Backed by MongoDB Atlas &bull; Vercel Ready</p>
      </footer>
    </div>
  );
}
