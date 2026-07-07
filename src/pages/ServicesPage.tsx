import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { PricingSection } from '@/sections/PricingSection';
import { CtaBannerSection } from '@/sections/CtaBannerSection';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Krishna Associates' full range of services — GST Registration, GST Return Filing, Income Tax Return, Salary ITR-1, Mutual Fund and Insurance solutions."
        path="/services"
      />

      {/* Page hero */}
      <section className="pt-16 md:pt-24 pb-16 bg-cream">
        <div className="container-page">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Our Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance"
            >
              Six services. One dependable partner.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-ink-600 leading-relaxed max-w-2xl"
            >
              From GST paperwork to long-term investment planning — pick the service
              you need, and we&rsquo;ll handle the rest end-to-end.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 md:pb-28 bg-cream">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <PricingSection />
      <CtaBannerSection />
    </>
  );
};
