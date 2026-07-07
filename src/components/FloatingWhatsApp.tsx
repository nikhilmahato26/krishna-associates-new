import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, WA_DEFAULT_MESSAGE } from '@/constants/site';

/**
 * Floating WhatsApp CTA — bottom right, sticky.
 * Shows a "Contact us" bubble after a brief delay on first paint.
 */
export const FloatingWhatsApp = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2">
      <AnimatePresence>
        {showBubble && (
          <motion.a
            href={buildWhatsAppUrl(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-ink-200 text-sm font-medium text-ink-800 shadow-[var(--shadow-lift)] hover:border-brand-500 hover:text-brand-700 transition-colors"
          >
            Contact us
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="ml-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full text-ink-400 hover:text-ink-700"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={buildWhatsAppUrl(WA_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] hover:bg-[#20BA5C] transition-colors"
      >
        <MessageCircle size={26} strokeWidth={1.75} fill="currentColor" fillOpacity={0.1} />
      </motion.a>
    </div>
  );
};
