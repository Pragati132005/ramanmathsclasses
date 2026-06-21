'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/results' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-brand-blue/5'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="bg-brand-blue dark:bg-brand-blue-dark text-white text-xs py-1.5 px-4 hidden md:flex items-center justify-between">
          <span className="font-medium tracking-wide">
            विगत वर्षों की परम्परा में हमारा संकल्प, सर्वश्रेष्ठ परिणाम।
          </span>
          <a href="tel:+919058934376" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Phone className="w-3 h-3" />
            Call Now: +91 9058934376
          </a>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/images/logo/1000047065_021d5b59f2bf5860ab3b1609d06e72b6-2_12_2024,_12_47_30_am.jpg"
                  alt="Raman Maths Classes Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-montserrat font-800 text-sm leading-tight text-brand-blue dark:text-white">
                  RAMAN MATHS CLASSES
                </p>
                <p className="text-[10px] text-muted-foreground font-medium tracking-wider">
                  By Sarvesh Mishra
                </p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-gold hover:bg-brand-blue/5 dark:hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-foreground/70 hover:text-brand-blue dark:hover:text-brand-gold hover:bg-brand-blue/5 dark:hover:bg-white/5 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Enroll Now
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-background border-b border-border shadow-2xl pt-20 pb-6 px-4 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-light transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16 md:h-[68px]" />
    </>
  );
}
