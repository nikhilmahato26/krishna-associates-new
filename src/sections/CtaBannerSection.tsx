import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { buildWhatsAppUrl, WA_DEFAULT_MESSAGE } from '@/constants/site';
import { fadeUp, viewportOnce } from '@/animations/variants';

interface CtaBannerProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
}

/**
 * Reusable bottom-of-page CTA.
 * Also replaces the "Got an Incredible Project Right Now?" agency-template block
 * that was on the About page.
 */
export const CtaBannerSection = ({
  heading = 'Have a tax or financial question?',
  body = 'Book a free consultation and get honest, personalized guidance from someone who has actually filed thousands of returns.',
  buttonLabel = 'Get Free Consultation',
}: CtaBannerProps) => {
  return (
    <section className="py-20 md:py-24 bg-brand-800 relative overflow-hidden">
      {/* subtle decorative element */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.3) 0%, transparent 40%)',
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="container-page relative text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-white text-balance max-w-3xl mx-auto">
          {heading}
        </h2>
        <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed text-balance">
          {body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button
            to="/contact"
            size="lg"
            className="bg-white text-brand-800 hover:bg-brand-50 hover:text-brand-900"
          >
            {buttonLabel}
            <ArrowRight size={18} />
          </Button>
          <Button
            href={buildWhatsAppUrl(WA_DEFAULT_MESSAGE)}
            external
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
