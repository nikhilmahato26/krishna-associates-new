import { motion } from 'framer-motion';
import { trustBadges } from '@/data/home';
import { TrustBadgeCard } from '@/components/TrustBadgeCard';
import { staggerContainer, viewportOnce } from '@/animations/variants';

export const TrustBadgesSection = () => {
  return (
    <section className="relative -mt-8 md:-mt-12 z-10 container-page">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 rounded-2xl bg-white shadow-[var(--shadow-lift)] border border-ink-100 divide-y md:divide-y-0 md:divide-x divide-ink-100"
      >
        {trustBadges.map((badge) => (
          <TrustBadgeCard key={badge.title} badge={badge} />
        ))}
      </motion.div>
    </section>
  );
};
