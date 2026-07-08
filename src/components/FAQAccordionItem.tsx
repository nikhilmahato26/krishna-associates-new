import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionItemProps {
  question: string;
  answer: string;
}

export const FAQAccordionItem = ({ question, answer }: FAQAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-ink-100 rounded-xl overflow-hidden bg-ink-50 transition-colors duration-200">
      <button
        type="button"
        className="w-full flex items-center justify-between py-3.5 px-5 text-left font-medium text-ink-900 hover:text-brand-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[15px] md:text-[16px] font-semibold pr-4 text-ink-900">{question}</span>
        <span className={`transform transition-transform duration-200 shrink-0 text-ink-500 ${isOpen ? 'rotate-180 text-brand-600' : ''}`}>
          <ChevronDown size={16} />
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-[14px] md:text-[15px] text-ink-600 leading-relaxed border-t border-ink-100/50 pt-2.5 bg-white">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
