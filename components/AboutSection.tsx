import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BookOpen, GraduationCap, Target, ArrowRight } from 'lucide-react';

const highlights = [
  'Expert in CBSE & Competitive Mathematics',
  'Personalized attention for every student',
  'Proven track record of district toppers',
  'Innovative teaching methodology',
  'Strong conceptual foundation building',
  'Regular assessment & feedback system',
];

const achievements = [
  { icon: GraduationCap, value: '10+', label: 'Years Teaching' },
  { icon: Target, value: '100+', label: 'Toppers Produced' },
  { icon: BookOpen, value: '7', label: 'Courses Offered' },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-[#080F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 rounded-3xl" />

            <div className="relative grid grid-cols-5 gap-4">
              {/* Main image */}
              <div className="col-span-3 relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/20">
                  <Image
                    src="/images/founder/IMG-20231009-WA0003-removebg-preview_(2).png"
                    alt="Sarvesh Mishra - Founder of Raman Maths Classes"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>
                {/* Name card */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0A1628] rounded-xl shadow-xl p-4 border border-brand-blue/10">
                  <p className="font-montserrat font-bold text-brand-blue dark:text-white text-sm">Sarvesh Mishra</p>
                  <p className="text-xs text-muted-foreground">Lead Mathematics Mentor</p>
                </div>
              </div>

              {/* Side content */}
              <div className="col-span-2 flex flex-col gap-4">
                {/* Achievement cards */}
                {achievements.map((a, i) => (
                  <div
                    key={a.label}
                    className="bg-white dark:bg-[#0A1628] rounded-xl p-4 shadow-md border border-border flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-2">
                      <a.icon className="w-5 h-5 text-brand-blue dark:text-brand-gold" />
                    </div>
                    <p className="font-montserrat font-bold text-xl text-brand-blue dark:text-brand-gold">{a.value}</p>
                    <p className="text-[11px] text-muted-foreground font-medium">{a.label}</p>
                  </div>
                ))}

                {/* Classroom image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20230916-WA0042.jpg"
                    alt="Students at Raman Maths Classes"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20" />
                  <p className="absolute bottom-2 left-2 right-2 text-center text-white text-[10px] font-semibold">
                    Classroom Sessions
                  </p>
                </div>
              </div>
            </div>

            {/* Gold accent border */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-brand-gold rounded-tl-2xl" />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-brand-gold rounded-br-2xl" />
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
                About The Founder
              </p>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground leading-tight">
                Meet{' '}
                <span className="text-gradient">Sarvesh Mishra</span>
                <br />
                The Mentor Behind
                <br />
                <span className="text-brand-gold">Hundreds of Toppers</span>
              </h2>
              <div className="mt-4 w-12 h-1 bg-brand-gold rounded-full" />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With over a decade of dedicated teaching experience, Sarvesh Mishra has
              transformed mathematics from a feared subject into a strength for hundreds of
              students. His unique conceptual approach, combined with disciplined practice
              routines, has produced District Toppers, All India Mathematics Toppers, and
              multiple 100/100 scorers.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Raman Maths Classes, every student receives personal attention and a
              customized learning path. Sarvesh Sir's teaching philosophy centers around
              building deep conceptual understanding rather than rote learning — ensuring
              students excel not just in exams, but in competitive assessments like JEE, NDA,
              and CUET.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{h}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:-translate-y-0.5 group"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
