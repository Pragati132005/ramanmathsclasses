import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery - Classroom & Events at Raman Maths Classes',
  description:
    'Explore the gallery of Raman Maths Classes — classroom sessions, workshops, topper celebrations, seminars, and the vibrant learning environment created by Sarvesh Mishra.',
};

const galleryImages = [
  {
    src: '/images/gallery/IMG-20230916-WA0042.jpg',
    alt: 'Students deeply focused during a mathematics session',
    caption: 'Mathematics Session in Progress',
    category: 'Classroom',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/gallery/IMG-20230916-WA0007.jpg',
    alt: 'Classroom teaching session',
    caption: 'Interactive Classroom Learning',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20230801-WA0001.jpg',
    alt: 'Students working together',
    caption: 'Collaborative Problem Solving',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20230806-WA0002.jpg',
    alt: 'Mathematics workshop',
    caption: 'Mathematics Workshop',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20230916-WA0018.jpg',
    alt: 'Students celebrating achievements',
    caption: 'Achievement Celebration',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20240316-WA0004.jpg',
    alt: 'Annual day celebration',
    caption: 'Annual Day Celebration',
    category: 'Events',
    span: 'md:col-span-2',
  },
  {
    src: '/images/gallery/IMG-20250301-WA0010.jpg',
    alt: 'Students receiving awards',
    caption: 'Award Ceremony',
    category: 'Awards',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250312-WA0006.jpg',
    alt: 'Topper felicitation',
    caption: 'Topper Felicitation',
    category: 'Awards',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250513-WA0061.jpg',
    alt: 'Interactive session',
    caption: 'Interactive Learning Session',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250519-WA0029.jpg',
    alt: 'Students in group discussion',
    caption: 'Group Discussion',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250521-WA0016.jpg',
    alt: 'Mathematics seminar',
    caption: 'Mathematics Seminar',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0020.jpg',
    alt: 'Classroom session',
    caption: 'Focused Learning',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0024.jpg',
    alt: 'Students practicing problems',
    caption: 'Practice Session',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0030.jpg',
    alt: 'Mentoring session',
    caption: 'Personal Guidance',
    category: 'Mentoring',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0040.jpg',
    alt: 'Batch photo',
    caption: 'Batch Photo',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0050.jpg',
    alt: 'Students celebration',
    caption: 'Success Celebration',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0063.jpg',
    alt: 'Group activity',
    caption: 'Group Activity Session',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/IMG-20250611-WA0008.jpg',
    alt: 'Recent classroom session',
    caption: 'Recent Session',
    category: 'Classroom',
    span: 'md:col-span-1',
  },
  {
    src: '/images/gallery/WhatsApp_Image_2026-04-18_at_10.09.14_AM_(2).jpg',
    alt: 'Special event',
    caption: 'Special Event',
    category: 'Events',
    span: 'md:col-span-2',
  },
  {
    src: '/images/gallery/1684742640027 copy.jpg',
    alt: 'Workshop session',
    caption: 'Special Workshop',
    category: 'Events',
    span: 'md:col-span-1',
  },
  {
    src: '/images/founder/IMG-20231009-WA0003-removebg-preview_(2).png',
    alt: 'Sarvesh Mishra - Founder of Raman Maths Classes',
    caption: 'Sarvesh Mishra Sir - Founder',
    category: 'Founder',
    span: 'md:col-span-1',
  },
];

const categories = ['All', 'Classroom', 'Events', 'Awards', 'Founder', 'Mentoring'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EBF2FF] dark:from-[#060E1E] dark:to-[#0A1628]">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
            Photo Gallery
          </p>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Life Inside{' '}
            <span className="text-gradient">Raman Maths Classes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual journey through our classrooms, events, award ceremonies, and the
            inspiring moments that define our institution.
          </p>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white dark:bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters (visual only) */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-brand-blue/10 hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 dark:bg-[#0A1628]/90 text-[11px] font-semibold text-brand-blue dark:text-brand-gold">
                    <Camera className="w-3 h-3" />
                    {img.category}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#080F1E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue-light text-white">
            <h2 className="font-montserrat font-extrabold text-3xl mb-4">
              Join Our Community
            </h2>
            <p className="text-white/70 mb-6">
              Be part of the Raman Maths Classes family. Follow us on Instagram to stay
              updated with our latest events, achievements, and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/raman_maths_classes?igsh=Y2oxcDV4cmI3NWxr"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-blue font-semibold text-sm hover:bg-brand-gold hover:text-[#0A1628] transition-all"
              >
                Follow on Instagram
              </a>
              <Link
                href="/contact#enroll"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-[#0A1628] font-semibold text-sm hover:bg-brand-gold-light transition-all group"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
