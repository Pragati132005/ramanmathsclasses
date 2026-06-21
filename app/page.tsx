import { HeroSection } from '@/components/HeroSection';
import { TrustBar } from '@/components/TrustBar';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { ResultsSection } from '@/components/ResultsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GallerySection } from '@/components/GallerySection';
import { CTASection } from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CoursesSection />
      <ResultsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
