import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';

const courses = [
  { label: 'Class IX Mathematics', href: '/courses' },
  { label: 'Class X Mathematics', href: '/courses' },
  { label: 'Class XI Mathematics', href: '/courses' },
  { label: 'Class XII Mathematics', href: '/courses' },
  { label: 'JEE Mathematics', href: '/courses' },
  { label: 'NDA Mathematics', href: '/courses' },
  { label: 'CUET Mathematics', href: '/courses' },
];

const quickLinks = [
  { label: 'About Sarvesh Mishra', href: '/about' },
  { label: 'Results & Achievements', href: '/results' },
  { label: 'Student Gallery', href: '/gallery' },
  { label: 'Success Stories', href: '/results#testimonials' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Enroll Now', href: '/contact#enroll' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 flex-shrink-0">
                <Image
                  src="/images/logo/IMG-20231009-WA0003-removebg-preview_(2).png"
                  alt="Raman Maths Classes"
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-montserrat font-bold text-sm leading-tight text-white">
                  RAMAN MATHS CLASSES
                </p>
                <p className="text-[10px] text-brand-gold font-medium tracking-wider mt-0.5">
                  An Institute of Topper's Trust
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Transforming mathematics education, one topper at a time. Under the expert
              guidance of Sarvesh Mishra.
            </p>
            <div className="italic text-brand-gold/80 text-xs leading-relaxed border-l-2 border-brand-gold/30 pl-3">
              विगत वर्षों की परम्परा में हमारा संकल्प, सर्वश्रेष्ठ परिणाम।
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/raman_maths_classes?igsh=Y2oxcDV4cmI3NWxr"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-brand-gold text-sm uppercase tracking-wider mb-5">
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-white/60 hover:text-brand-gold text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-gold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-brand-gold text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-gold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Raman Maths Classes,<br />
                  Nearby Devkinandan Park Chaugurji,<br />
                  Etawah, Uttar Pradesh - 206001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919058934376"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  +91 9058934376, +91 9997160852
                </a>
              </li>
              <li>
                <a
                  href="mailto:raman.maths.classes.@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  raman.maths.classes.@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-white/5 rounded-xl p-4">
              <p className="text-white/70 text-xs font-medium mb-1">Business Hours</p>
              <p className="text-white/50 text-xs">Mon–Sat: 3:00 PM – 7:00 PM</p>
              <p className="text-white/50 text-xs">Sun: Off</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Raman Maths Classes. All rights reserved. |{' '}
            <span className="text-brand-gold/60">An Institute of Topper's Trust</span>
          </p>
          <p className="text-white/30 text-xs">
            Designed with excellence for academic success
          </p>
        </div>
      </div>
    </footer>
  );
}
