import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, Medal, Star, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Results & Achievements - District Toppers, 100/100 Scorers',
  description:
    'Explore the remarkable results achieved by students of Raman Maths Classes. District toppers, school toppers, 100/100 scorers in Mathematics, and JEE achievers every year.',
};

const featuredAchievements = [
  {
    title: 'District Toppers',
    count: '100+',
    description: 'Students who ranked #1 in their district in Mathematics',
    color: 'from-brand-blue to-brand-blue-light',
    icon: Trophy,
  },
  {
    title: 'School Toppers',
    count: '200+',
    description: 'Top scorers across multiple schools in the region',
    color: 'from-brand-gold to-amber-400',
    icon: Medal,
  },
  {
    title: '100/100 Scorers',
    count: '50+',
    description: 'Students who achieved perfect marks in board Mathematics',
    color: 'from-green-600 to-emerald-500',
    icon: Star,
  },
  {
    title: 'JEE Achievers',
    count: '30+',
    description: 'Students who qualified JEE Main and Advanced',
    color: 'from-rose-600 to-red-500',
    icon: Award,
  },
];

const yearWiseResults: Record<string, Array<{
  name: string;
  school: string;
  class: string;
  score: string;
  achievement: string;
  rank?: string;
}>> = {
  '2026': [
    { name: 'Yuvraj Singh', school: 'Suditi Global Academy', class: 'XII', score: '97/100', achievement: 'District Topper #1(Science)', rank: '97.2%' },
    { name: 'Parth Prakash', school: "SMIC", class: 'XII', score: '96%', achievement: 'School Topper #1' },
    { name: 'Vaibhav Prasad', school: "SMIC", class: 'X', score: '', achievement: '99/100', rank:'Highest Marks in Mathematics' },
    { name: 'Saumya Rajput', school: 'KV Etawah', class: 'X', score: '97%', achievement: 'School Topper #1' },
    { name: 'Aryav Gupta', school: 'DPS', class: 'X', score: '96/100', achievement: '95.8%' },
    { name: 'Ruddraksh Agrawal', school: "SMIC", class: 'XI', score: '95/100', achievement: 'School Topper #1' },
    { name: 'Shrishti', school: 'P. M. S.', class: 'IX', score: '95/100', achievement: '97.2%', rank: 'School Rank #1' },
    { name: 'Rudra Verma', school: 'SMIC', class: 'IX', score: '99/100', achievement: '' },
    { name: 'Kartik Bansal', school: 'SMIC', class: 'IX', score: '98/100', achievement: '' },
    { name: 'Navya Pandey', school: 'GSA', class: 'IX', score: '97/100', achievement: 'Highest Maths Scorer' },
    { name: 'Apoorv Soni', school: 'SMIC', class: 'IX', score: '96/100', achievement: '' },
    { name: 'Shrishti Singh', school: 'PMS', class: 'IX', score: '95/100', achievement: 'School Topper #1| 97.2% Overall | Highest Maths Scorer' },
    { name: 'Abhay Pratap', school: 'NCSA', class: 'IX', score: '95/100', achievement: 'Highest Maths Scorer' },
    { name: 'Astha Badhauriya', school: 'DPS', class: 'IX', score: '94/100', achievement: '' },
    { name: 'Vanshika', school: 'Royal Oxford School', class: 'IX', score: '93.7%', achievement: 'School Topper #1' },
    { name: 'Avantika', school: 'SVPS', class: 'IX', score: '93.4%', achievement: '' },
    { name: 'Navika Pathak', school: 'SMIC', class: 'IX', score: '92/100', achievement: '' },
    { name: 'Runjan', school: 'KV', class: 'IX', score: '90/100', achievement: '91.24% Overall' },
    { name: 'Ayushi Tiwari', school: 'TIC', class: 'IX', score: '90/100', achievement: '' },
  ],
  
  '2025': [
    { name: 'Prateek Rao', school: 'KV Etawah', class: 'XII', score: '97.4%', achievement: 'District Rank #1', rank: 'No.1 in Agra region among all KVs| JEE Main 96.23%ile' },
    
    { name: 'Kartikey Chaudhary', school: '', class: '', score: '', achievement: 'IIT BHU', rank: '99.72%ile JEE MAINS' },
    { name: 'Sanskriti Tiwari', school: 'SVPS', class: 'XII', score: '98/100', achievement: 'District Rank #2(Maths)', rank: '98.87%ile JEE MAINS' },
    { name: 'Srizan Kesharwani', school: 'SMIC', class: 'XII', score: '98/100', achievement: 'District Rank #2(Maths)' },
    { name: 'Yuvraj Singh', school: 'Suditi Global Academy', class: 'XI', score: '', achievement: 'School Topper #1' },
    { name: 'Mahima Katiyar', school: 'TIC', class: 'XI', score: '', achievement: 'School Topper #1' },
    { name: 'Harshit', school: 'GSA', class: 'XI', score: '', achievement: 'School Topper #1' },
    { name: 'Anshika Saxena', school: 'SVPS', class: 'XI', score: '', achievement: 'School Topper #2' },
    { name: 'Divyanshi Yadav', school: 'SGA', class: 'XI', score: '', achievement: 'School Topper #2' },
    { name: 'Arunabhya Kumar', school: 'SMIC', class: 'XI', score: '', achievement: 'School Topper #3' },
    { name: 'Vaibhav Prasad', school: 'SMIC', class: 'IX', score: '99/100', achievement: 'Topper' },
    
    
  ],
  '2024': [
    
    { name: 'Jigyashu Awasthi', school: '', class: '', score: '98.21%ile JEE MAINS', achievement: 'AIR 4725 JEE ADVANCED', rank: 'IIT MADRAS' },
    { name: 'Krishna Chaudhary', school: '', class: '', score: '', achievement: '99.25%ile', rank: 'NIT Allahabad' },
    { name: 'Nandini Agarwal', school: 'DPS', class: 'XII', score: '97/100', achievement: '98.75%ile JEE MAINS' },
    { name: 'Srizan Kesharwani', school: 'SMIC', class: 'XI', score: '98/100', achievement: 'Topper' },
    { name: 'Mayank Dubey', school: 'GSA', class: 'XI', score: '', achievement: 'School Topper #2' },
    
    { name: 'Mahima Katiyar', school: 'Theosophical Inter College', class: 'X', score: '99/100', achievement: '96.6%', rank: 'District Rank #1(Maths)' },
    { name: 'Yuvraj Singh', school: 'SGA', class: 'X', score: '97/100', achievement: '96.8%', rank:'District Merit Holder' },
    { name: 'Dhairya Porwal', school: 'SMIC', class: 'X', score: '98/100', achievement: '' },
    { name: 'Shrishti Yadav', school: '', class: 'X', score: '', achievement: '95%' },
    { name: 'Dev Sharma', school: 'St. Peters Se. Sec. School', class: 'X', score: '98/100', achievement: 'Disrtict Merit Holder' },
    { name: 'Sparsh Chaudhary', school: 'SGA', class: 'IX', score: '', achievement: '100/100', rank:'Topper'},
    { name: 'Somil Mishra', school: 'KV', class: 'IX', score: '98/100', achievement: 'Highest Maths Marks' },
    { name: 'Vansh Shrivastav', school: 'SVPS', class: 'IX', score: '92/100', achievement: 'School Topper #1' },
    { name: 'Anant Pandey', school: 'SMIC', class: 'IX', score: '95/100', achievement: 'Topper', rank: '96.8%' },
    { name: 'Khushi Bhadauria', school: 'MLZS', class: 'IX', score: '', achievement: 'School Topper #1' },
  ],
  '2023': [
    { name: 'Dev Sharma', school: 'St. Peter\'s', class: 'IX', score: '100/100', achievement: 'School Topper #1' },
    { name: 'Namrata Singh', school: '', class: '', score: '', achievement: 'IIT PATNA' },
    { name: 'Pragati Rajput', school: 'KV', class: 'XII', score: '', achievement: '100/100 | School Topper #1', rank: '98.99%ile JEE MAINS' },
    { name: 'Sankalp Agnihotri', school: 'The Millenium School Lucknow', class: 'XII', score: '95/100', achievement: 'School Topper #1', rank: '96.5%' },
    { name: 'Sushant Yadav', school: 'DPS', class: 'XII', score: '94/100', achievement: 'School Topper #2' },
    { name: 'Akash Singh', school: 'SMIC', class: 'X', score: '95/100', achievement: 'School Topper #2', rank:'95.8%'},
    { name: 'Kartikey Chaudhary', school: 'SMIC', class: 'X', score: '98/100', achievement: 'School Topper #3', rank:'95.6%' },
    { name: 'Sidhharth Singh', school: 'KV', class: 'X', score: '95/100', achievement: 'School Topper #2', rank: '92.8%'},
    { name: 'Agrim Raj', school: 'SMIC', class: 'X', score: '97/100', achievement: 'Maths' },
    { name: 'Rupali Singh', school: 'SVPS', class: 'X', score: '95/100', achievement: '92.6% | Topper' },
    { name: 'Avantika Chaudhary', school: 'SMIC', class: 'X', score: '95/100', achievement: '93.4% | Topper' },
    { name: 'Nayan Rajput', school: 'SVPS', class: 'X', score: '95/100', achievement: '92.6% | Topper' },
  ],
  'Many more results': [
    { name: 'Utkarsh Yadav', school: 'SMIC', class: 'XII', score: '2019', achievement: 'District Topper #1', rank:'97.4%' },
    { name: 'Jatin Dulhani', school: 'DPS', class: 'X', score: '2019', achievement: '100/100', rank:'All India Topper(Maths)' },
    { name: 'Yashashvi Singh', school: 'KV', class: 'X', score: '2020', achievement: '100/100', rank:'All India Topper(Maths)' },
    { name: 'Sania Asad', school: 'SMIC', class: 'XII', score: '2022', achievement: '99/100' },
    { name: 'Riya Singh', school: 'GSA', class: 'XII', score: '95/100', achievement: 'School Topper #1(Maths)' },
    { name: 'Tejashi Thakur', school: 'DPS', class: 'XII', score: '94.2%', achievement: 'Topper' },
    
  ],
};

const achievementColorMap: Record<string, string> = {
  'District Rank #1': 'from-brand-gold to-amber-400',
  'District Rank #2': 'from-gray-400 to-gray-500',
  'District Rank #3': 'from-amber-600 to-amber-700',
  'School Topper': 'from-brand-blue to-brand-blue-light',
  'School Rank #2': 'from-violet-500 to-purple-500',
  'School Rank #3': 'from-cyan-500 to-blue-400',
  'School Rank #4': 'from-green-500 to-emerald-500',
};

export default function ResultsPage() {
  const years = Object.keys(yearWiseResults).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EBF2FF] dark:from-[#060E1E] dark:to-[#0A1628]">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Our Track Record
          </p>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Results &{' '}
            <span className="text-gradient">Achievements</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A testament to the teaching excellence at Raman Maths Classes — year after year,
            our students achieve the highest ranks in board examinations and competitive tests.
          </p>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Achievement highlights */}
      <section className="py-16 bg-white dark:bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAchievements.map((a) => (
              <div
                key={a.title}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-border hover:border-brand-blue/25 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.color}`} />
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <a.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-montserrat font-extrabold text-3xl text-foreground">{a.count}</p>
                <p className="font-semibold text-foreground mt-1">{a.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise results */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#080F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl text-foreground">
              Year-Wise{' '}
              <span className="text-gradient">Topper Archive</span>
            </h2>
            <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {years.map((year) => (
              <div key={year}>
                {/* Year header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-5 py-2 rounded-xl bg-brand-blue text-white font-montserrat font-bold text-lg shadow-md">
                    {year}
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {yearWiseResults[year].length} Featured Achievers
                  </span>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {yearWiseResults[year].map((student, i) => {
                    const gradColor = achievementColorMap[student.achievement] || 'from-brand-blue to-brand-blue-light';
                    return (
                      <div
                        key={`${student.name}-${year}`}
                        className="group bg-white dark:bg-[#0A1628] rounded-2xl border border-border hover:border-brand-blue/25 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                      >
                        <div className={`h-1 bg-gradient-to-r ${gradColor}`} />
                        <div className="p-5 flex items-center gap-4">
                          {/* Avatar */}
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradColor} flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-md`}
                          >
                            {student.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground truncate">{student.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{student.school}</p>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-gold font-medium">
                                Class {student.class}
                              </span>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                                {student.score}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 pb-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                              <span className="text-sm font-semibold text-foreground">{student.achievement}</span>
                            </div>
                            {student.rank && (
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium">
                                {student.rank}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl text-white mb-4">
            Be the Next Name on This List
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Join Raman Maths Classes and let Sarvesh Mishra guide you to your best result.
          </p>
          <Link
            href="/contact#enroll"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-[#0A1628] font-bold hover:bg-brand-gold-light transition-all hover:-translate-y-0.5 group"
          >
            Enroll Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
