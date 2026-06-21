import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mathematics Courses - Class IX, X, XI, XII, JEE, NDA, CUET',
  description:
    'Comprehensive mathematics coaching programs at Raman Maths Classes. Expert preparation for CBSE boards, JEE Main & Advanced, NDA, and CUET Mathematics.',
};

const courses = [
  {
    id: 'class-9',
    grade: 'Class IX',
    subject: 'CBSE Mathematics',
    tagline: 'Strong Foundation, Bright Future',
    description:
      'Build a rock-solid foundation in mathematics with comprehensive coverage of the Class IX CBSE syllabus. Focus on conceptual understanding that sets the stage for board exam excellence.',
    duration: '10 months (April – January)',
    sessions: '3 sessions/week',
    batchSize: '15-20 students',
    assessments: 'Weekly tests + Monthly exams',
    syllabus: [
      'Number Systems & Real Numbers',
      'Polynomials & Factorization',
      'Coordinate Geometry',
      'Linear Equations in Two Variables',
      'Introduction to Euclid\'s Geometry',
      'Lines and Angles',
      'Triangles & Quadrilaterals',
      'Circles & Constructions',
      'Heron\'s Formula & Surface Areas',
      'Statistics & Probability',
    ],
    outcomes: [
      'Strong conceptual foundation',
      'Exam-ready problem solving',
      'Confidence in competitive tests',
      'Preparation for Class X',
    ],
    badge: 'Foundation',
    badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    color: 'from-green-600 to-emerald-500',
  },
  {
    id: 'class-10',
    grade: 'Class X',
    subject: 'CBSE Mathematics (Standard & Basic)',
    tagline: 'Board Mastery. District Rankings.',
    description:
      'Intensive board exam preparation with a focus on scoring 100/100. Comprehensive coverage of the Class X CBSE Mathematics syllabus with extensive practice and revision sessions.',
    duration: '10 months (April – February)',
    sessions: '4 sessions/week',
    batchSize: '15-20 students',
    assessments: 'Weekly tests + Pre-boards + Mock exams',
    syllabus: [
      'Real Numbers & Euclid\'s Lemma',
      'Polynomials & Zeroes',
      'Pair of Linear Equations',
      'Quadratic Equations',
      'Arithmetic Progressions',
      'Triangles & Similarity',
      'Coordinate Geometry',
      'Trigonometry & Its Applications',
      'Circles & Constructions',
      'Mensuration, Statistics & Probability',
    ],
    outcomes: [
      'Target: 100/100 in board exams',
      'District topper preparation',
      'Competitive exam foundation',
      'Advanced Class XI readiness',
    ],
    badge: 'Board Focus',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    color: 'from-brand-blue to-brand-blue-light',
    featured: true,
  },
  {
    id: 'class-11',
    grade: 'Class XI',
    subject: 'CBSE Mathematics',
    tagline: 'Advanced Concepts. JEE Foundation.',
    description:
      'Rigorous Class XI mathematics preparation that builds the advanced mathematical thinking required for board excellence and JEE qualification. Every concept taught with depth and clarity.',
    duration: '10 months (April – February)',
    sessions: '4 sessions/week',
    batchSize: '12-15 students',
    assessments: 'Weekly tests + Unit tests + Pre-boards',
    syllabus: [
      'Sets, Relations & Functions',
      'Trigonometric Functions',
      'Principle of Mathematical Induction',
      'Complex Numbers & Quadratic Equations',
      'Linear Inequalities',
      'Permutations & Combinations',
      'Binomial Theorem',
      'Sequences & Series',
      'Straight Lines & Conic Sections',
      'Limits, Derivatives & Statistics',
    ],
    outcomes: [
      'Strong JEE foundation',
      'Board exam excellence',
      'Analytical thinking development',
      'Class XII readiness',
    ],
    badge: 'Advanced',
    badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    color: 'from-violet-600 to-purple-500',
  },
  {
    id: 'class-12',
    grade: 'Class XII',
    subject: 'CBSE Mathematics',
    tagline: 'Boards + JEE. Maximum Results.',
    description:
      'Comprehensive Class XII preparation that simultaneously targets board exam excellence and competitive exam success. The most result-oriented program at Raman Maths Classes.',
    duration: '10 months (April – February)',
    sessions: '5 sessions/week',
    batchSize: '12-15 students',
    assessments: 'Weekly tests + Unit tests + Pre-boards + Mock JEE',
    syllabus: [
      'Relations and Functions',
      'Inverse Trigonometric Functions',
      'Matrices & Determinants',
      'Continuity & Differentiability',
      'Applications of Derivatives',
      'Integrals & Applications',
      'Differential Equations',
      'Vector Algebra',
      'Three Dimensional Geometry',
      'Linear Programming & Probability',
    ],
    outcomes: [
      'Target: 100/100 in board exams',
      'JEE Main qualification',
      'NDA/CUET readiness',
      'Engineering entrance foundation',
    ],
    badge: 'Board + JEE',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-brand-gold',
    color: 'from-brand-gold to-amber-400',
    featured: true,
  },
  {
    id: 'jee',
    grade: 'JEE Mathematics',
    subject: 'JEE Main & Advanced',
    tagline: 'From Good to IIT-Ready.',
    description:
      'Specialized JEE Mathematics preparation with focus on problem-solving depth, speed, and accuracy. Covers all JEE patterns with extensive practice on previous year questions.',
    duration: '12 months intensive',
    sessions: '5 sessions/week',
    batchSize: '10-12 students',
    assessments: 'Weekly chapter tests + Full syllabus mock tests',
    syllabus: [
      'Sets, Relations, Functions & Complex Numbers',
      'Quadratic Equations & Sequences',
      'Permutations, Combinations & Binomial',
      'Matrices, Determinants & Vectors',
      'Coordinate Geometry (2D & 3D)',
      'Differential Calculus',
      'Integral Calculus',
      'Differential Equations',
      'Statistics & Probability',
      'Trigonometry & Mathematical Reasoning',
    ],
    outcomes: [
      'JEE Main 99+ percentile target',
      'JEE Advanced preparation',
      'Top engineering college admission',
      'Mathematical problem-solving mastery',
    ],
    badge: 'Competitive',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    color: 'from-red-600 to-rose-500',
  },
  {
    id: 'nda-cuet',
    grade: 'NDA & CUET',
    subject: 'Mathematics',
    tagline: 'Targeted. Effective. Results.',
    description:
      'Focused preparation specifically designed for NDA Paper I Mathematics and CUET Mathematics. Covers the exact syllabus with exam-specific strategies and practice.',
    duration: '6 months intensive',
    sessions: '3 sessions/week',
    batchSize: '10-15 students',
    assessments: 'Weekly practice tests + Mock exams',
    syllabus: [
      'Algebra & Number Theory',
      'Matrices & Determinants',
      'Trigonometry',
      'Analytical Geometry (2D & 3D)',
      'Differential Calculus',
      'Integral Calculus & Differential Equations',
      'Vector Algebra',
      'Statistics & Probability',
      'Numerical Methods',
      'Logical Reasoning & Data Interpretation',
    ],
    outcomes: [
      'NDA written exam qualification',
      'CUET high percentile',
      'Strong foundation for service careers',
      'Exam-specific problem strategies',
    ],
    badge: 'Exam-Specific',
    badgeColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    color: 'from-cyan-600 to-blue-500',
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EBF2FF] dark:from-[#060E1E] dark:to-[#0A1628]">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Our Programs
          </p>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Mathematics Courses
            <br />
            <span className="text-gradient">For Every Goal</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From Class IX foundational learning to competitive JEE preparation — each program
            is designed by Sarvesh Mishra to maximize your mathematical potential.
          </p>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-white dark:bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {courses.map((course, i) => (
            <div
              key={course.id}
              id={course.id}
              className={`relative rounded-3xl border overflow-hidden ${
                course.featured
                  ? 'border-brand-blue/30 dark:border-brand-blue/40 shadow-xl shadow-brand-blue/10'
                  : 'border-border shadow-sm hover:shadow-md'
              } bg-white dark:bg-[#0A1628] transition-shadow duration-300`}
            >
              {/* Featured top bar */}
              {course.featured && (
                <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
              )}

              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Course info */}
                <div className={`lg:col-span-3 p-8 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full ${course.badgeColor}`}
                      >
                        {course.badge}
                      </span>
                      <h2 className="font-montserrat font-extrabold text-2xl text-foreground mt-2">
                        {course.grade}
                      </h2>
                      <p className="text-brand-blue dark:text-brand-gold font-semibold">
                        {course.subject}
                      </p>
                      <p className="text-muted-foreground text-sm italic mt-1">
                        "{course.tagline}"
                      </p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-md`}
                    >
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Meta info */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Clock, label: 'Duration', value: course.duration },
                      { icon: Calendar, label: 'Sessions', value: course.sessions },
                      { icon: Users, label: 'Batch Size', value: course.batchSize },
                      { icon: BarChart3, label: 'Assessments', value: course.assessments },
                    ].map((info) => (
                      <div
                        key={info.label}
                        className="flex items-start gap-2 p-3 rounded-xl bg-muted/50 dark:bg-white/5"
                      >
                        <info.icon className="w-4 h-4 text-brand-blue dark:text-brand-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] text-muted-foreground">{info.label}</p>
                          <p className="text-xs font-semibold text-foreground">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Learning Outcomes
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.outcomes.map((o) => (
                        <div key={o} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact#enroll"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 shadow-md hover:-translate-y-0.5 group"
                    >
                      Enroll in {course.grade}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: Syllabus */}
                <div
                  className={`lg:col-span-2 bg-[#F8FAFC] dark:bg-[#080F1E] p-8 ${
                    i % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-brand-blue dark:text-brand-gold" />
                    Syllabus Coverage
                  </p>
                  <ul className="space-y-2.5">
                    {course.syllabus.map((topic) => (
                      <li key={topic} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.color} flex-shrink-0`} />
                        <span className="text-sm text-foreground/70">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl text-white mb-4">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-white/70 mb-8">
            Contact us for a free counseling session. We'll help you choose the best program
            based on your current level and goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-[#0A1628] font-bold hover:bg-brand-gold-light transition-all hover:-translate-y-0.5 group"
          >
            Get Free Counseling
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
