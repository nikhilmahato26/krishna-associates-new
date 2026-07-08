import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  heading,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn('max-w-3xl', alignment, className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-balance text-ink-900">
        {heading}
      </h2>
      {eyebrow && (
        <p className="text-lg md:text-xl font-medium text-brand-600 mt-2 text-balance">
          {eyebrow}
        </p>
      )}
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-ink-600 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
