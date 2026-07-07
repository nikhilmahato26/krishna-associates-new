import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '@/types';
import { Icon } from '@/utils/icons';
import { fadeUp } from '@/animations/variants';

interface ServiceCardProps {
  service: Service;
}

/**
 * Home page service card.
 * CTA is "View Details" (Req #5) — replaces "Read More".
 * Description stays short (Req #5) — long copy lives on the detail page.
 */
export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-ink-100 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-ink-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Icon name={service.icon} size={20} strokeWidth={1.8} />
          </span>
          <h3 className="text-lg font-semibold text-ink-900 font-[var(--font-display)]">
            {service.title}
          </h3>
        </div>

        <p className="text-[15px] text-ink-600 leading-relaxed flex-1">
          {service.short}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800 group/link"
        >
          View Details
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
};
