import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CONTACT } from '@/constants/site';
import { fadeUp, viewportOnce } from '@/animations/variants';

/**
 * Google Map embed (Req #9).
 * Placed below the contact form on the Contact page.
 * The mapEmbedUrl in constants/site.ts is a placeholder — update it once
 * the client provides the actual business address.
 */
export const MapSection = () => {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-lift)] border border-ink-100 bg-white"
        >
          <div className="flex items-center gap-3 px-6 py-4 border-b border-ink-100 bg-ink-50">
            <MapPin size={18} className="text-brand-600" />
            <div>
              <p className="text-sm font-semibold text-ink-900">Visit us</p>
              <p className="text-xs text-ink-600">{CONTACT.address}</p>
            </div>
          </div>
          <div className="aspect-[16/9] w-full bg-ink-100">
            <iframe
              src={CONTACT.mapEmbedUrl}
              title="Krishna Associates location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
