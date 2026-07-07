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
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-600 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
