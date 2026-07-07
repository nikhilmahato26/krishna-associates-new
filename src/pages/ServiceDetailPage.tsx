import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { getServiceBySlug, services } from '@/data/services';
import { pricingPlans } from '@/data/pricing';
import { Button } from '@/components/Button';
import { Icon } from '@/utils/icons';
import { buildWhatsAppUrl } from '@/constants/site';
import { CtaBannerSection } from '@/sections/CtaBannerSection';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

/**
 * SERVICE DETAIL PAGE
 * Per Req #10:
 * - "Need Help" section with phone paragraph is REMOVED
 * - Cleaner, better-composed page with dedicated hero image, feature list, pricing block,
 *   and a "Related Services" strip
 */
export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const pricing = pricingPlans.find((p) => p.slug === service.slug);
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const waUrl = buildWhatsAppUrl(service.whatsappMessage);

  return (
    <>
      <SEO
        title={service.title}
        description={service.short}
        path={`/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative pt-14 md:pt-20 pb-16 md:pb-24 bg-gradient-to-b from-cream to-white overflow-hidden">
        <div className="container-page">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-ink-600 hover:text-brand-700 mb-8"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-3 py-1.5 mb-5"
              >
                <Icon name={service.icon} size={16} className="text-brand-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {service.title}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] text-balance"
              >
                {service.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg text-ink-600 leading-relaxed text-balance"
              >
                {service.long}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Button href={waUrl} external size="lg">
                  <MessageCircle size={18} />
                  Enquire on WhatsApp
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink-100 shadow-[var(--shadow-lift)]"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature checklist + pricing card side-by-side */}
      {pricing && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                className="lg:col-span-3"
              >
                <p className="eyebrow mb-3">What&rsquo;s Included</p>
                <h2 className="text-3xl md:text-4xl leading-[1.1] text-balance">
                  Everything you get when you choose this service.
                </h2>
                <ul className="mt-8 space-y-4">
                  {pricing.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-600 shrink-0">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink-800 text-[17px] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 rounded-2xl bg-brand-700 text-white p-8 shadow-[var(--shadow-lift)]"
              >
                <p className="text-sm uppercase tracking-wider text-white/70 font-medium">
                  Pricing
                </p>
                <p className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                  {pricing.priceLabel.replace(/^Starting From\s*/i, '')}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Starting price — transparent, no hidden fees
                </p>

                <div className="mt-8 space-y-3">
                  <Button
                    href={waUrl}
                    external
                    fullWidth
                    className="bg-white text-brand-800 hover:bg-brand-50"
                  >
                    <MessageCircle size={16} />
                    Contact Us
                  </Button>
                  <p className="text-xs text-white/60 text-center">
                    Response in under 2 hours during business hours
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Related Services</p>
              <h2 className="text-2xl md:text-3xl leading-tight">
                Explore what else we handle
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {relatedServices.map((s) => (
              <motion.article
                key={s.slug}
                variants={fadeUp}
                className="group rounded-2xl bg-white border border-ink-100 p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={s.icon} size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-semibold text-ink-900 font-[var(--font-display)]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">{s.short}</p>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBannerSection />
    </>
  );
};
