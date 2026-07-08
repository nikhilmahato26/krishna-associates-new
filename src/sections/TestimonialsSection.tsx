import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajeshbhai Patel',
    role: 'Business Owner, Ahmedabad',
    quote: 'Krishna Associates made our GST registration and return filings completely hassle-free. Their response time on WhatsApp is incredibly fast, and their guidance is always clear and honest.',
    rating: 5,
  },
  {
    name: 'Mansi Shah',
    role: 'Salaried Professional, Junagadh',
    quote: 'I have been filing my Income Tax Returns through Krishna Associates for the last 3 years. They help me claim all eligible deductions under Section 80C and process my tax refunds quickly.',
    rating: 5,
  },
  {
    name: 'Hiteshbhai Mehta',
    role: 'Retail Trader, Rajkot',
    quote: 'Excellent service for business tax compliance and ITR filing. They explain complex tax rules in simple language and provide transparent pricing without any hidden charges.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="What our clients in Gujarat say"
          heading="Client Testimonials"
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col rounded-2xl bg-white border border-ink-100 p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-saffron-500"
                  />
                ))}
              </div>
              <p className="flex-1 text-ink-700 italic leading-relaxed text-[15px] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-ink-100/60 pt-4 mt-auto">
                <h4 className="font-semibold text-ink-900 text-base font-[var(--font-sans)]">
                  {t.name}
                </h4>
                <p className="text-xs text-ink-500 font-medium mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
