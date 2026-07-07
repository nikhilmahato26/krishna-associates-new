import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { PricingPlan } from '@/types';
import { Button } from '@/components/Button';
import { buildWhatsAppUrl } from '@/constants/site';
import { getServiceBySlug } from '@/data/services';
import { scaleIn } from '@/animations/variants';

interface PricingCardProps {
  plan: PricingPlan;
  highlighted?: boolean;
}

/**
 * Pricing plan card — per client spec (Req #1):
 * - Title
 * - "Starting From ₹X" label
 * - Feature checklist (✓)
 * - [Contact Us] CTA that fires a WhatsApp intent with the correct prefilled message
 */
export const PricingCard = ({ plan, highlighted }: PricingCardProps) => {
  const service = getServiceBySlug(plan.slug);
  const waMessage = service?.whatsappMessage ??
    `Hello Krishna Associates, I need ${plan.title} service.`;

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={
        highlighted
          ? 'relative flex flex-col rounded-2xl bg-brand-700 text-white p-8 shadow-[var(--shadow-lift)]'
          : 'relative flex flex-col rounded-2xl bg-white border border-ink-100 p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow'
      }
    >
      {highlighted && (
        <span className="absolute -top-3 left-8 rounded-full bg-saffron-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-900">
          Most Popular
        </span>
      )}

      <h3
        className={
          highlighted
            ? 'text-xl font-semibold text-white font-[var(--font-display)]'
            : 'text-xl font-semibold text-ink-900 font-[var(--font-display)]'
        }
      >
        {plan.title}
      </h3>

      <p
        className={
          highlighted
            ? 'mt-3 text-sm text-white/80 uppercase tracking-wide font-medium'
            : 'mt-3 text-sm text-ink-500 uppercase tracking-wide font-medium'
        }
      >
        {plan.priceLabel.replace(/^Starting From\s*/i, 'Starting From ')}
      </p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={
                highlighted
                  ? 'mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white'
                  : 'mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600'
              }
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span
              className={
                highlighted
                  ? 'text-[15px] text-white/95 leading-relaxed'
                  : 'text-[15px] text-ink-700 leading-relaxed'
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href={buildWhatsAppUrl(waMessage)}
          external
          variant={highlighted ? 'secondary' : 'primary'}
          fullWidth
        >
          Contact Us
        </Button>
      </div>
    </motion.article>
  );
};
