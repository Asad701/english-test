import './globals.css';

export const metadata = {
  title: 'English XII Board Exam Quiz | 20 MCQs - 30 Mins',
  description: 'Online English MCQs Quiz App extracted from official Solved Board Papers. 20 MCQs per quiz, 30 minutes countdown, instant grading, and automatic TXT file record saving.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-slate-50 min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}
