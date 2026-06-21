'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, Star, TrendingUp, Users } from 'lucide-react';

const badges = [
  { icon: Award, label: 'District Toppers', color: 'bg-brand-gold text-[#0A1628]' },
  { icon: Star, label: '100/100 Scorers', color: 'bg-green-500 text-white' },
  { icon: TrendingUp, label: 'JEE Achievers', color: 'bg-blue-500 text-white' },
  { icon: Users, label: '500+ Students', color: 'bg-rose-500 text-white' },
];

const mathSymbols = ['∑', 'π', '√', '∫', 'Δ', 'θ', '∞', 'α', 'β', 'λ'];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#EBF2FF] dark:from-[#060E1E] dark:via-[#0A1628] dark:to-[#0D1F3A]">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Floating math symbols */}
      {mathSymbols.map((sym, i) => (
        <div
          key={i}
          className="absolute text-brand-blue/5 dark:text-white/5 font-serif select-none pointer-events-none animate-float"
          style={{
            fontSize: `${Math.random() * 40 + 20}px`,
            left: `${(i * 9.5) + Math.random() * 8}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          {sym}
        </div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/8 dark:bg-brand-blue/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/8 dark:bg-brand-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            {/* Badge */}
            <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 border border-brand-blue/20 dark:border-brand-blue/30">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-blue dark:text-brand-gold text-xs font-semibold tracking-wide uppercase">
                An Institute of Topper's Trust
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight text-foreground">
                Building{' '}
                <span className="text-gradient">Toppers</span>
                <br />
                Through{' '}
                <span className="relative">
                  <span className="text-gradient">Conceptual</span>
                </span>
                <br />
                <span className="text-brand-gold">Excellence</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground font-medium tracking-wide">
                VISION TO REALITY !
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Expert mathematics coaching for Class IX–XII, JEE, NDA & CUET under the
              personal guidance of{' '}
              <span className="font-semibold text-brand-blue dark:text-brand-gold">
                Sarvesh Mishra
              </span>
              , fondly known by students as the{' '}
              <span className="font-semibold text-brand-blue dark:text-brand-gold">
                "Architect of Toppers"
              </span>
              . Empowering students through conceptual clarity, dedicated mentorship, and a legacy of outstanding results.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact#enroll"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5"
              >
                Enroll Now
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brand-blue text-brand-blue dark:text-white dark:border-white/20 font-semibold text-sm hover:bg-brand-blue/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                View Results
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-[#0A1628] font-semibold text-sm hover:bg-brand-gold-light transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { value: '10+', label: 'Years of Trust' },
                { value: '100+', label: 'Dist. Toppers' },
                { value: '50+', label: '100/100 Scores' },
                { value: '500+', label: 'Students Guided' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-brand-blue/10 dark:border-white/10 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <p className="font-montserrat font-bold text-2xl text-brand-blue dark:text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder Image */}
          <div
            className="relative flex justify-center lg:justify-end opacity-0 animate-slide-in-right delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 animate-pulse-glow" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] rounded-full border border-brand-blue/10 dark:border-brand-blue/20 animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full border border-brand-gold/10 dark:border-brand-gold/15"
                style={{ animation: 'spin-slow 35s linear infinite reverse' }}
              />
            </div>

            {/* Image container */}
            <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
              {/* Frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-gold p-0.5 shadow-2xl shadow-brand-blue/40">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#E8F0FC] to-[#C5D8F8] dark:from-[#0D1F3A] dark:to-[#0A1628]">
                  <Image
                    src="/images/founder/IMG-20231009-WA0003-removebg-preview_(2).png"
                    alt="Sarvesh Mishra - Founder, Raman Maths Classes"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    priority
                  />
                </div>
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass bg-white/90 dark:bg-[#0A1628]/90 rounded-xl px-5 py-3 shadow-xl border border-brand-blue/20 text-center min-w-[200px]">
                <p className="font-montserrat font-bold text-brand-blue dark:text-white text-sm">
                  Sarvesh Mishra
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Founder & Lead Mathematics Mentor
                </p>
              </div>
            </div>

            {/* Floating achievement badges */}
            {badges.map((badge, i) => {
              const positions = [
                '-left-4 top-1/4',
                '-right-4 top-1/3',
                '-left-2 bottom-1/4',
                '-right-2 bottom-1/3',
              ];
              return (
                <div
                  key={badge.label}
                  className={`absolute ${positions[i]} z-20 flex items-center gap-2 px-3 py-2 rounded-full ${badge.color} shadow-lg text-xs font-semibold opacity-0 animate-fade-in-up`}
                  style={{
                    animationDelay: `${0.5 + i * 0.15}s`,
                    animationFillMode: 'forwards',
                    animation: `fade-in-up 0.6s ease-out ${0.5 + i * 0.15}s forwards, float ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                  }}
                >
                  <badge.icon className="w-3 h-3 flex-shrink-0" />
                  <span className="whitespace-nowrap">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-white dark:fill-[#060E1E]">
          <path d="M0,60 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
