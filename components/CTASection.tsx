import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-[#0F3D91] to-[#0A2D6E]" />
      <div className="absolute inset-0 hero-grid opacity-30" />

      {/* Floating elements */}
      {['∑', 'π', '∫', 'Δ', '∞'].map((sym, i) => (
        <div
          key={i}
          className="absolute text-white/5 font-serif text-5xl select-none pointer-events-none animate-float"
          style={{
            left: `${i * 22 + 5}%`,
            top: `${Math.random() * 60 + 20}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {sym}
        </div>
      ))}

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-xs font-semibold tracking-wide uppercase text-brand-gold">
                Limited Seats Available
              </span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Begin Your Journey to{' '}
              <span className="text-brand-gold">Mathematical Excellence</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Join the institute that has produced hundreds of toppers. Personal attention,
              conceptual teaching, and proven results await you at Raman Maths Classes.
            </p>

            <div className="space-y-3">
              {[
                'Personal attention from Sarvesh Mishra',
                'Proven track record of district toppers',
                'Comprehensive study material & practice tests',
                'Regular parent-teacher communication',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  </div>
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact#enroll"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-[#0A1628] font-bold text-sm hover:bg-brand-gold-light transition-all duration-200 shadow-lg shadow-brand-gold/30 hover:-translate-y-0.5 group"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919058934376"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200 group"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-white font-semibold text-sm hover:bg-[#25D366]/30 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Founder + badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/images/founder/IMG-20230916-WA0042.jpg"
                  alt="Sarvesh Mishra"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">Sarvesh Mishra</p>
                  <p className="text-white/70 text-xs">Founder & Lead Mentor</p>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -right-6 -top-6 bg-white rounded-2xl shadow-2xl p-4 min-w-[140px] border border-gray-100">
                <div className="text-center">
                  <p className="font-montserrat font-extrabold text-3xl text-brand-blue">10+</p>
                  <p className="text-xs text-gray-600 font-medium">Years of Excellence</p>
                </div>
                <div className="mt-2 flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-brand-gold" />
                  ))}
                </div>
              </div>

              {/* Bottom card */}
              <div className="absolute -left-6 -bottom-6 bg-brand-gold rounded-2xl shadow-2xl p-4 min-w-[140px]">
                <p className="font-montserrat font-extrabold text-2xl text-[#0A1628]">100+</p>
                <p className="text-[#0A1628]/70 text-xs font-semibold">District Toppers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
