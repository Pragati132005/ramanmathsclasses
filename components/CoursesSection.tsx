import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';

const courses = [
  {
    grade: 'Class IX',
    subject: 'Mathematics',
    description: 'Building foundational concepts essential for future academic success.',
    highlights: ['Number Systems', 'Algebra & Geometry', 'Statistics & Probability', 'Mensuration'],
    duration: '10 months',
    sessions: '3x/week',
    badge: 'Foundation',
    badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    grade: 'Class X',
    subject: 'Mathematics',
    description: 'Board exam mastery with comprehensive syllabus coverage and practice.',
    highlights: ['Real Numbers', 'Polynomials', 'Trigonometry', 'Coordinate Geometry'],
    duration: '10 months',
    sessions: '4x/week',
    badge: 'Board Focus',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    featured: true,
  },
  {
    grade: 'Class XI',
    subject: 'Mathematics',
    description: 'Advanced concepts with JEE foundation building and strong practice.',
    highlights: ['Sets & Relations', 'Calculus Intro', 'Permutations', 'Statistics'],
    duration: '10 months',
    sessions: '4x/week',
    badge: 'Advanced',
    badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  },
  {
    grade: 'Class XII',
    subject: 'Mathematics',
    description: 'Board + JEE preparation with intensive practice and revision.',
    highlights: ['Integration', 'Matrices & Determinants', 'Vectors', 'Probability'],
    duration: '10 months',
    sessions: '5x/week',
    badge: 'Board + JEE',
    badgeColor: 'bg-brand-gold/20 text-amber-700 dark:bg-brand-gold/10 dark:text-brand-gold',
    featured: true,
  },
  {
    grade: 'JEE',
    subject: 'Mathematics',
    description: 'Comprehensive JEE Main & Advanced preparation with problem-solving focus.',
    highlights: ['Calculus', 'Coordinate Geometry', 'Algebra', 'Probability & Statistics'],
    duration: '12 months',
    sessions: '5x/week',
    badge: 'Competitive',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
  {
    grade: 'NDA & CUET',
    subject: 'Mathematics',
    description: 'Targeted preparation for NDA and CUET mathematics sections.',
    highlights: ['Algebra', 'Trigonometry', 'Statistics', 'Matrices'],
    duration: '6 months',
    sessions: '3x/week',
    badge: 'Exam-Specific',
    badgeColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  },
];

export function CoursesSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#060E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Our Programs
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
            Expert Mathematics Coaching
            <br />
            <span className="text-gradient">For Every Level</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From Class IX to competitive exams, our structured programs ensure every student
            achieves their maximum potential in mathematics.
          </p>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.grade}
              className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                course.featured
                  ? 'border-brand-blue/30 dark:border-brand-blue/40 shadow-xl shadow-brand-blue/10 bg-gradient-to-br from-brand-blue/5 to-white dark:from-brand-blue/10 dark:to-[#0A1628]'
                  : 'border-border bg-white dark:bg-[#0A1628] hover:shadow-lg hover:border-brand-blue/20'
              }`}
            >
              {course.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-gold" />
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                    <h3 className="font-montserrat font-bold text-xl text-foreground mt-2">
                      {course.grade}
                    </h3>
                    <p className="text-brand-blue dark:text-brand-gold text-sm font-semibold">
                      {course.subject}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-brand-blue dark:text-brand-gold" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className="flex items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-blue dark:text-brand-gold" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-brand-blue dark:text-brand-gold" />
                    {course.sessions}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-light transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:-translate-y-0.5 group"
          >
            Explore All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
