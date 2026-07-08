import { SEO } from '@/components/SEO';
import { HeroSection } from '@/sections/HeroSection';
import { TrustBadgesSection } from '@/sections/TrustBadgesSection';
import { AboutHomeSection } from '@/sections/AboutHomeSection';
import { ServicesPreviewSection } from '@/sections/ServicesPreviewSection';
import { PricingSection } from '@/sections/PricingSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FaqSection } from '@/sections/FaqSection';
import { CtaBannerSection } from '@/sections/CtaBannerSection';

export const HomePage = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <TrustBadgesSection />
      <AboutHomeSection />
      <ServicesPreviewSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBannerSection />
    </>
  );
};
