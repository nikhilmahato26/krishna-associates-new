import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricing';
import { PricingCard } from '@/components/PricingCard';
import { SectionHeader } from '@/components/SectionHeader';
import { staggerContainer, viewportOnce } from '@/animations/variants';

/**
 * Pricing section (Req #1).
 * Four cards — GST Registration, GST Return, ITR, Salary ITR-1.
 * The "Most Popular" flag lives here on the ITR card — easy to change.
 */
export const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pricing"
          heading="Transparent pricing. No hidden fees."
          subtitle="Straightforward starting prices for our most-requested services. Talk to us for anything custom — we quote upfront."
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.slug}
              plan={plan}
              highlighted={plan.slug === 'income-tax-return'}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
