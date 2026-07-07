import { motion } from 'framer-motion';
import type { TrustBadge } from '@/types';
import { Icon } from '@/utils/icons';
import { fadeUp } from '@/animations/variants';

interface TrustBadgeCardProps {
  badge: TrustBadge;
}

/**
 * Trust badge — Req #3.
 * Icons via Lucide (chosen over emoji for visual consistency; client used emoji in
 * the requirement message but the site's existing badges are icon-based).
 */
export const TrustBadgeCard = ({ badge }: TrustBadgeCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center text-center p-6 md:p-8"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 mb-4">
        <Icon name={badge.icon} size={26} strokeWidth={1.6} />
      </span>
      <h3 className="text-lg font-semibold text-ink-900 font-[var(--font-display)] mb-1.5">
        {badge.title}
      </h3>
      <p className="text-sm text-ink-600 leading-relaxed max-w-[240px]">
        {badge.description}
      </p>
    </motion.div>
  );
};
