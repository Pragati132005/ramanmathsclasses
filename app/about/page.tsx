import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  BookOpen,
  Users,
  Trophy,
  Target,
  Heart,
  Lightbulb,
  Award,
  ArrowRight,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Sarvesh Mishra - Founder & Lead Mathematics Mentor',
  description:
    'Learn about Sarvesh Mishra, the founder of Raman Maths Classes. With 10+ years of teaching experience, he has produced hundreds of district toppers, 100/100 scorers, and JEE achievers.',
};

const philosophy = [
  {
    icon: Lightbulb,
    title: 'Concept-First Approach',
    description:
      'Every topic is taught from its conceptual foundation, ensuring students understand the "why" behind every formula and theorem.',
  },
  {
    icon: Users,
    title: 'Personal Attention',
    description:
      'Small batch sizes ensure each student receives individual guidance, feedback, and customized learning strategies.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented Learning',
    description:
      'Teaching is aligned with each student\'s specific goals — boards, JEE, NDA, or CUET — with tailored preparation strategies.',
  },
  {
    icon: Heart,
    title: 'Student-Centric Care',
    description:
      'Beyond academics, we nurture confidence, discipline, and a genuine love for mathematics in every student.',
  },
];

const milestones = [
  { year: '.', event: 'Founded Raman Maths Classes'},
  { year: '2013', event: 'Topper from the institute' },
  { year: '2015', event: 'Many Toppers from the institute' },
  { year: '2017', event: '20+ students scored 90+ in board exams' },
  { year: '2019', event: 'District Topper and All India Topper from the institute' },
  { year: '2020', event: 'All India Topper & District Merit Holder' },
  { year: '2021', event: 'Many Highest Mathematics Scorer' },
  { year: '2022', event: '20+ toppers milestone crossed' },
  { year: '2023', event: '50+ students scoring 90+ in boards' },
  { year: '2024', event: 'Multiple Toppers from the batch' },
  { year: '2025', event: 'Continuing the legacy of excellence of District Toppers' },
  { year: '2026', event: 'Vision to Reality — Continuing the Legacy of Toppers' },
];

const stats = [
  { value: '10+', label: 'Years of Teaching', icon: BookOpen },
  { value: '100+', label: 'District Toppers', icon: Trophy },
  { value: '50+', label: '100/100 Scorers', icon: Star },
  { value: '30+', label: 'JEE Achievers', icon: Award },
  { value: '500+', label: 'Students Mentored', icon: Users },
  { value: '7', label: 'Courses Offered', icon: Target },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EBF2FF] dark:from-[#060E1E] dark:to-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
              About the Founder
            </p>
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-foreground">
              Sarvesh Mishra
            </h1>
            <p className="mt-3 text-brand-blue dark:text-brand-gold font-semibold text-lg">
              Founder & Lead Mathematics Mentor
            </p>
            <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-3xl -rotate-3" />
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-[#0A1628] shadow-2xl">
                  <Image
                    src="/images/founder/IMG-20230916-WA0042.jpg"
                    alt="Sarvesh Mishra - Founder of Raman Maths Classes"
                    fill
                    className="object-cover object-top"
                    sizes="256px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-blue rounded-xl shadow-xl px-5 py-3 text-center min-w-[200px]">
                  <p className="text-white font-bold text-sm">Raman Maths Classes</p>
                  <p className="text-white/70 text-xs">Vision To Reality !</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-5">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed text-base">
                  Sarvesh Mishra is the founder and lead educator of Raman Maths Classes,
                  an institution that has earned the trust of hundreds of students and parents
                  over the past decade. With a deep passion for mathematics and an unwavering
                  commitment to student success, he has built an institute that consistently
                  produces district toppers, school toppers, and competitive exam achievers.
                </p>
                <p className="text-foreground/80 leading-relaxed text-base">
                  His teaching philosophy is rooted in conceptual clarity — he believes that
                  when students truly understand mathematics, it becomes their strongest
                  subject rather than their weakest. This approach has led to remarkable
                  results: multiple 100/100 scorers in board examinations, students qualifying
                  JEE, NDA, and CUET, and consistent top ranks across schools and districts.
                </p>
                <p className="text-foreground/80 leading-relaxed text-base">
                  Beyond academics, Sarvesh Mishra invests in each student's confidence and
                  character. He firmly believes that a great mathematics teacher shapes not
                  just exam scores but the student's entire analytical thinking capability —
                  a skill that serves them throughout life.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-6 p-5 rounded-2xl bg-brand-blue/5 dark:bg-brand-blue/10 border-l-4 border-brand-blue">
                <p className="italic text-foreground/80 text-base">
                  "Thanks to all my students, their supportive parents & well wishers for having a trust on me. Without you, it can't be achieved"
                </p>
                <p className="mt-2 font-semibold text-brand-blue dark:text-brand-gold text-sm">
                  — Sarvesh Mishra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-border hover:border-brand-blue/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-brand-blue dark:text-brand-gold" />
                </div>
                <p className="font-montserrat font-extrabold text-2xl text-brand-blue dark:text-brand-gold">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#080F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
              Teaching Approach
            </p>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
              The Philosophy Behind
              <br />
              <span className="text-gradient">Every Topper</span>
            </h2>
            <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="group p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-border hover:border-brand-blue/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6 text-brand-blue dark:text-brand-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-[#060E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
              A Decade of{' '}
              <span className="text-gradient">Academic Excellence</span>
            </h2>
            <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-brand-blue/20 dark:bg-brand-blue/30 sm:-translate-x-px" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-brand-blue border-2 border-white dark:border-[#060E1E] -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="font-montserrat font-bold text-brand-blue dark:text-brand-gold text-sm">
                        {m.year}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Join the hundreds of students whose academic lives were transformed under
            Sarvesh Mishra's guidance.
          </p>
          <Link
            href="/contact#enroll"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-[#0A1628] font-bold hover:bg-brand-gold-light transition-all duration-200 shadow-xl hover:-translate-y-0.5 group"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
