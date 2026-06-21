import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Class X Topper, 2024',
    school: 'ABC Public School',
    content:
      'Sarvesh Sir\'s teaching transformed my understanding of mathematics completely. From struggling with algebra to scoring 100/100 in boards — the journey was incredible. His method of concept-first teaching is unmatched.',
    rating: 5,
    achievement: '100/100 in Boards',
  },
  {
    name: 'Rajesh Kumar (Parent)',
    role: 'Parent of Class XII Student',
    school: '',
    content:
      'We enrolled our son after he was struggling with calculus. Within 3 months, not only did his scores improve dramatically but he developed a genuine love for mathematics. Sarvesh Sir gives personal attention to every student.',
    rating: 5,
    achievement: 'Child cleared JEE',
  },
  {
    name: 'Anita Gupta',
    role: 'JEE Qualifier, 2023',
    school: 'XYZ Senior Secondary',
    content:
      'The structured approach at Raman Maths Classes for JEE preparation is exceptional. Every concept is taught from the fundamentals, and the problem-solving strategies Sarvesh Sir teaches are exactly what JEE demands.',
    rating: 5,
    achievement: 'JEE Main Qualified',
  },
  {
    name: 'Kavita Singh',
    role: 'CUET Aspirant, 2024',
    school: 'DEF College',
    content:
      'Joined for CUET preparation and the results speak for themselves. The intensive practice sessions and personalized feedback helped me achieve a score I never thought possible. Highly recommended!',
    rating: 5,
    achievement: '98 Percentile in CUET',
  },
  {
    name: 'Vikas Sharma',
    role: 'Class XII Student',
    school: 'GHI Academy',
    content:
      'The way Sarvesh Sir explains complex topics like integration and vectors makes them seem so simple. His dedication to each student\'s success is what sets Raman Maths Classes apart from all others.',
    rating: 5,
    achievement: 'School Topper 2024',
  },
  {
    name: 'Meera Patel (Parent)',
    role: 'Parent of Class X Student',
    school: '',
    content:
      'My daughter used to dread mathematics. After joining Raman Maths Classes, she not only started enjoying it but became the district topper. Sarvesh Sir\'s patience and clarity of teaching is truly remarkable.',
    rating: 5,
    achievement: 'District Rank #1',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#060E1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Success Stories
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
            What Our Students
            <br />
            <span className="text-gradient">& Parents Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real stories from real students and parents who trusted Raman Maths Classes
            with their academic journey.
          </p>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                i === 1 || i === 4
                  ? 'bg-gradient-to-br from-brand-blue to-brand-blue-light text-white border-brand-blue shadow-xl shadow-brand-blue/20'
                  : 'bg-white dark:bg-[#0A1628] border-border hover:border-brand-blue/25 hover:shadow-lg'
              }`}
            >
              {/* Quote icon */}
              <Quote
                className={`w-8 h-8 mb-4 ${
                  i === 1 || i === 4 ? 'text-white/30' : 'text-brand-blue/20 dark:text-brand-gold/20'
                }`}
              />

              {/* Content */}
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  i === 1 || i === 4 ? 'text-white/90' : 'text-muted-foreground'
                }`}
              >
                "{t.content}"
              </p>

              {/* Achievement badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold mb-4 ${
                  i === 1 || i === 4
                    ? 'bg-white/15 text-white'
                    : 'bg-brand-gold/10 text-amber-700 dark:text-brand-gold'
                }`}
              >
                <Star className="w-3 h-3 fill-current" />
                {t.achievement}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      i === 1 || i === 4
                        ? 'bg-white/20 text-white'
                        : 'bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-gold'
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        i === 1 || i === 4 ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-[11px] ${
                        i === 1 || i === 4 ? 'text-white/60' : 'text-muted-foreground'
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 dark:bg-white/5 border border-border">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9/5</span>
            <span className="text-sm text-muted-foreground">on Google Reviews</span>
            <span className="text-xs bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-gold px-2 py-0.5 rounded-full font-medium">
              100+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
