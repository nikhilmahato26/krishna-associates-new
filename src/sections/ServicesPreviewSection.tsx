import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/Button';
import { staggerContainer, viewportOnce } from '@/animations/variants';
import { ArrowRight } from 'lucide-react';

export const ServicesPreviewSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Services"
            heading="Everything you need — from GST to Insurance."
            subtitle="Six focused services, delivered by people who actually file returns every day. Pick what you need."
          />
          <Button to="/services" variant="outline">
            View All Services
            <ArrowRight size={16} />
          </Button>
        </div>

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
  );
};
