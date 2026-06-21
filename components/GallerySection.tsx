import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Camera } from 'lucide-react';

const galleryItems = [
  {
    src: '/images/gallery/IMG-20230916-WA0042.jpg',
    alt: 'Students studying at Raman Maths Classes',
    caption: 'Focused Learning Environment',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/gallery/1684742640027.jpg',
    alt: 'Classroom session',
    caption: 'Interactive Classroom',
    span: 'lg:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/images/gallery/IMG-20230801-WA0001.jpg',
    alt: 'Students working together',
    caption: 'Collaborative Learning',
    span: 'lg:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0050.jpg',
    alt: 'Achievement celebration',
    caption: 'Success Celebration',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/gallery/IMG-20250611-WA0008.jpg',
    alt: 'Recent classroom session',
    caption: 'Recent Sessions',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/gallery/IMG-20250524-WA0030.jpg',
    alt: 'Personal mentoring',
    caption: 'Personal Mentoring',
    span: 'lg:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/images/gallery/IMG-20250301-WA0010.jpg',
    alt: 'Award ceremony',
    caption: 'Award Ceremony',
    span: 'lg:col-span-1',
    aspect: 'aspect-square',
  },
];

export function GallerySection() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-[#080F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-brand-blue dark:text-brand-gold uppercase mb-3">
              Photo Gallery
            </p>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-foreground">
              Inside{' '}
              <span className="text-gradient">Raman Maths Classes</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              A glimpse into our dynamic classroom environment, workshops, events, and the
              achievements we celebrate together.
            </p>
          </div>
          <div className="w-16 h-1 bg-brand-gold rounded-full sm:hidden" />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative ${item.span} ${item.aspect} rounded-2xl overflow-hidden cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-brand-gold" />
                  <p className="text-white text-sm font-semibold">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-brand-blue text-brand-blue dark:text-white dark:border-white/25 font-semibold hover:bg-brand-blue hover:text-white transition-all duration-200 group"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
