'use client';

import { Trophy, Star, TrendingUp, Users, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: '100+',
    label: 'District Toppers',
    sub: 'Across all years',
    color: 'from-brand-blue to-brand-blue-light',
    iconBg: 'bg-brand-blue/10 dark:bg-brand-blue/20',
    iconColor: 'text-brand-blue dark:text-brand-gold',
  },
  {
    icon: Star,
    value: '200+',
    label: 'School Toppers',
    sub: 'Multiple schools',
    color: 'from-brand-gold to-amber-400',
    iconBg: 'bg-brand-gold/10 dark:bg-brand-gold/10',
    iconColor: 'text-brand-gold',
  },
  {
    icon: Award,
    value: '50+',
    label: '100/100 Scorers',
    sub: 'In Mathematics',
    color: 'from-green-600 to-emerald-500',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Target,
    value: '30+',
    label: 'JEE Achievers',
    sub: 'JEE Main & Advanced',
    color: 'from-rose-600 to-red-500',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    icon: TrendingUp,
    value: '10+',
    label: 'Years of Trust',
    sub: 'Consistent results',
    color: 'from-violet-600 to-purple-500',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Students Mentored',
    sub: 'And counting',
    color: 'from-cyan-600 to-blue-500',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
];

export function TrustBar() {
  return (
    <section className="py-16 bg-white dark:bg-[#060E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Our Achievements
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
            Numbers That Speak For Themselves
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-[#0A1628] border border-border hover:border-brand-blue/30 dark:hover:border-brand-gold/30 shadow-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.08}s`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              {/* Value */}
              <p className="font-montserrat font-extrabold text-2xl sm:text-3xl text-foreground">
                {stat.value}
              </p>
              {/* Label */}
              <p className="font-semibold text-sm text-foreground mt-1">{stat.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</p>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Motto */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/15 dark:border-brand-blue/25">
            <div className="w-px h-8 bg-brand-gold/40" />
            <p className="font-medium text-brand-blue dark:text-brand-gold text-sm sm:text-base italic">
              "AN INSTITUTE OF TOPPER'S TRUST"
            </p>
            <div className="w-px h-8 bg-brand-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
