import Link from 'next/link';
import { Trophy, Medal, Star, Award, ArrowRight } from 'lucide-react';

const toppers = [
  {
    name: 'Yuvraj Singh',
    school: 'SGA',
    class: 'Class XII',
    score: '97.2%',
    achievement: 'District Topper #1(Science)',
    year: '2026',
    color: 'from-brand-blue to-brand-blue-light',
  },
  {
    name: 'Parth Prakash',
    school: 'SMIC',
    class: 'Class XII',
    score: '96%',
    achievement: 'School Topper #1',
    year: '2026',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    name: 'Ruddraksh Agrawal',
    school: 'SMIC',
    class: 'Class XI',
    score: 'Highest Marks in Mathematics',
    achievement: 'School Topper #1',
    year: '2026',
    color: 'from-brand-gold to-amber-400',
  },
  {
    name: 'Vaibhav Prasad',
    school: 'SMIC',
    class: 'Class X',
    score: 'Highest Marks in Mathematics',
    achievement: '99/100',
    year: '2026',
    color: 'from-green-600 to-emerald-500',
  },
  {
    name: 'Saumya Rajput',
    school: 'KV',
    class: 'Class X',
    score: '97%',
    achievement: 'School Topper #1',
    year: '2026',
    color: 'from-rose-600 to-red-500',
  },
  {
    name: 'Shrishti',
    school: 'P.M.S.',
    class: 'Class IX',
    score: '97.2%',
    achievement: 'School Topper #1',
    year: '2026',
    color: 'from-violet-600 to-purple-500',
  },
];

const yearStats = [
  { year: '2026', toppers: 26, Scorers: 12 },
  { year: '2025', toppers: 22, Scorers: 15 },
  { year: '2024', toppers: 20, Scorers: 11 },
  { year: '2023', toppers: 16, Scorers: 9 },
  { year: '2022', toppers: 14, Scorers: 7 },
];

const achievementIcons: Record<string, typeof Trophy> = {
  'District Topper': Trophy,
  'School Topper': Medal,
  'All India Rank': Star,
  'JEE Qualifier': Award,
};

export function ResultsSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-[#080F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Our Achievements
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
            Results That Define
            <br />
            <span className="text-gradient">Our Excellence</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Year after year, Raman Maths Classes produces district toppers, 100/100 scorers,
            and competitive exam achievers.
          </p>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Year-wise stats */}
        <div className="grid grid-cols-5 gap-3 mb-12">
          {yearStats.map((stat, i) => (
            <div
              key={stat.year}
              className="text-center p-4 rounded-2xl bg-white dark:bg-[#0A1628] border border-border hover:border-brand-blue/25 shadow-sm hover:shadow-md transition-all"
            >
              <p className="font-montserrat font-bold text-2xl text-brand-blue dark:text-brand-gold">
                {stat.year}
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-xs font-semibold text-foreground">
                  {stat.toppers} Toppers
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.Scorers} x 90+/100
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toppers showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toppers.map((topper) => {
            const Icon = achievementIcons[topper.achievement] || Trophy;
            return (
              <div
                key={`${topper.name}-${topper.year}`}
                className="group relative bg-white dark:bg-[#0A1628] rounded-2xl border border-border hover:border-brand-blue/25 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${topper.color}`} />

                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topper.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className="text-white font-bold text-xl">
                        {topper.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{topper.name}</h3>
                      <p className="text-xs text-muted-foreground truncate">{topper.school}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-gold">
                          {topper.class}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{topper.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-muted/50 dark:bg-white/5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-brand-gold" />
                      <span className="text-sm font-semibold text-foreground">{topper.achievement}</span>
                    </div>
                    <span className={`font-montserrat font-bold text-lg bg-gradient-to-r ${topper.color} bg-clip-text text-transparent`}>
                      {topper.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-light transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:-translate-y-0.5 group"
          >
            View All Results
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
