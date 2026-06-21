'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  BookOpen,
} from 'lucide-react';

const courses = [
  'Class IX Mathematics',
  'Class X Mathematics',
  'Class XI Mathematics',
  'Class XII Mathematics',
  'JEE Mathematics',
  'NDA Mathematics',
  'CUET Mathematics',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EBF2FF] dark:from-[#060E1E] dark:to-[#0A1628]">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Contact{' '}
            <span className="text-gradient">Raman Maths Classes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions about admission, courses, or fees? We'd love to hear from you.
            Reach out through any channel below.
          </p>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white dark:bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Founder card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-light p-6 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30 flex-shrink-0">
                    <Image
                      src="/images/founder/IMG-20230916-WA0042.jpg"
                      alt="Sarvesh Mishra"
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">Sarvesh Mishra</p>
                    <p className="text-white/70 text-sm">Founder & Lead Mentor</p>
                    <p className="text-brand-gold text-xs font-semibold mt-0.5">
                      Available for consultations
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm italic">
                  "Feel free to call or message me directly. I personally guide every
                  student's admission process."
                </p>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-border p-6 space-y-5">
                <h3 className="font-semibold text-foreground text-lg">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-blue dark:text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Raman Maths Classes<br />
                        Nearby Devkinandan Park Chaugurji<br />
                        Etawah, Uttar Pradesh - 206001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-blue dark:text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone / WhatsApp</p>
                      <a
                        href="tel:+919058934376"
                        className="text-sm text-brand-blue dark:text-brand-gold hover:underline"
                      >
                        +91 9058934376, +91 9997160852
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-blue dark:text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:info@ramanmathsclasses.com"
                        className="text-sm text-brand-blue dark:text-brand-gold hover:underline"
                      >
                        raman.maths.classes.@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-brand-blue dark:text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Sat: 8:00 AM – 8:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: 9:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hello%20Sarvesh%20Sir%2C%20I%20want%20to%20inquire%20about%20admission%20at%20Raman%20Maths%20Classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919058934376"
                  className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://www.instagram.com/raman_maths_classes?igsh=Y2oxcDV4cmI3NWxr"
                  className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl border-2 border-brand-blue/20 text-brand-blue dark:text-white dark:border-white/20 font-semibold text-sm hover:bg-brand-blue/5 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* Right: Enrollment Form */}
            <div className="lg:col-span-3" id="enroll">
              <div className="rounded-2xl border border-border bg-[#F8FAFC] dark:bg-[#0A1628] p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. Sarvesh Sir will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', phone: '', email: '', course: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-brand-blue dark:text-brand-gold" />
                      </div>
                      <div>
                        <h2 className="font-montserrat font-bold text-xl text-foreground">
                          Admission Inquiry
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Fill out the form and we'll get back to you shortly
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            Student Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter student's full name"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-[#060E1E] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXXXXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-[#060E1E] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-[#060E1E] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Course Interested In <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="course"
                          required
                          value={form.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-[#060E1E] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        >
                          <option value="">Select a course</option>
                          {courses.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Any specific questions, current class, school name, or other details..."
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-[#060E1E] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-light transition-colors shadow-lg shadow-brand-blue/25 group"
                      >
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </button>

                      <p className="text-[12px] text-muted-foreground text-center">
                        By submitting, you agree to be contacted by Raman Maths Classes regarding
                        your inquiry. We respect your privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-10 bg-[#F8FAFC] dark:bg-[#080F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border shadow-md h-72 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-brand-blue dark:text-brand-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground">Find Us on Google Maps</p>
              <p className="text-sm text-muted-foreground mt-1">
                Raman Maths Classes, Nearby Devkinandan Park Chaugurji, Etawah
              </p>
              <a
                href="https://maps.app.goo.gl/dN5AqZu84mVs7e9a9?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-brand-blue text-white font-medium text-sm hover:bg-brand-blue-light transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
