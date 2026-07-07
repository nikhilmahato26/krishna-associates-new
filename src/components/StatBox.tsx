import { motion } from 'framer-motion';
import { scaleIn } from '@/animations/variants';
import type { Stat } from '@/types';

interface StatBoxProps {
  stat: Stat;
}

/**
 * Stat display block — Req #4.
 * Four of these show in a grid: 5+ Years / 1200+ ITR / 200+ GST / 500+ Clients.
 */
export const StatBox = ({ stat }: StatBoxProps) => {
  return (
    <motion.div
      variants={scaleIn}
      className="relative rounded-2xl bg-white border border-ink-100 p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow"
    >
      <p className="text-4xl md:text-5xl font-semibold text-brand-700 font-[var(--font-display)] leading-none">
        {stat.value}
      </p>
      <p className="mt-3 text-sm font-medium text-ink-600 uppercase tracking-wider">
        {stat.label}
      </p>
    </motion.div>
  );
};
