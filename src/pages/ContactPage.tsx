import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { CONTACT, HOURS } from '@/constants/site';
import { ContactFormSection } from '@/sections/ContactFormSection';
import { MapSection } from '@/sections/MapSection';
import { fadeUp, staggerContainer } from '@/animations/variants';

export const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Krishna Associates for GST, Income Tax, Mutual Fund and Insurance services. Call, WhatsApp or send us an enquiry."
        path="/contact"
      />

      {/* Page hero + quick contact tiles */}
      <section className="pt-16 md:pt-24 pb-12 bg-cream">
        <div className="container-page">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mb-12"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Contact Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance"
            >
              Let&rsquo;s talk about what you need.
            </motion.h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <QuickTile
              icon={<Phone size={20} />}
              label="Call us"
              value={CONTACT.phoneDisplay}
              href={`tel:${CONTACT.phoneRaw}`}
            />
            <QuickTile
              icon={<Mail size={20} />}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
              wrap
            />
            <QuickTile
              icon={<MapPin size={20} />}
              label="Address"
              value={CONTACT.address}
              wrap
            />
            <QuickTile
              icon={<Clock size={20} />}
              label="Business Hours"
              value={`${HOURS.weekdays.label} · ${HOURS.weekdays.time}`}
              wrap
            />
          </motion.div>
        </div>
      </section>

      <ContactFormSection />
      <MapSection />
    </>
  );
};

interface QuickTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  wrap?: boolean;
}

const QuickTile = ({ icon, label, value, href, wrap }: QuickTileProps) => {
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
          {label}
        </p>
        <p
          className={`mt-1 text-[15px] font-medium text-ink-900 ${
            wrap ? 'break-words' : 'truncate'
          }`}
        >
          {value}
        </p>
      </div>
    </>
  );

  const className =
    'flex items-start gap-4 p-5 rounded-2xl bg-white border border-ink-100 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow';

  return (
    <motion.div variants={fadeUp}>
      {href ? (
        <a href={href} className={className}>
          {inner}
        </a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  );
};
