import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQAccordionItem } from '@/components/FAQAccordionItem';
import { services } from '@/data/services';
import { staggerContainer, viewportOnce } from '@/animations/variants';

export const FaqSection = () => {
  const faqs = services.find((s) => s.slug === 'income-tax-return')?.faqs || [];

  if (faqs.length === 0) return null;

  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="py-20 md:py-28 bg-white border-t border-ink-100">
      <div className="container-page max-w-6xl">
        <SectionHeader
          eyebrow="Clear answers to your tax queries"
          heading="Frequently Asked Questions"
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 items-start"
        >
          <div className="space-y-4">
            {leftColumn.map((faq, i) => (
              <FAQAccordionItem
                key={`left-${i}`}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((faq, i) => (
              <FAQAccordionItem
                key={`right-${i}`}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
