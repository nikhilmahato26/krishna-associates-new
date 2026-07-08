import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { aboutPage } from '@/data/about';
import { stats } from '@/data/home';
import { StatBox } from '@/components/StatBox';
import { CtaBannerSection } from '@/sections/CtaBannerSection';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

/**
 * About Us page (Req #6).
 * - "WHO WE ARE / Our Company" replaced with new About Krishna Associates copy
 * - Development/Marketing skill bars removed (leftover agency template)
 * - "Got an Incredible Project" CTA replaced (via CtaBannerSection)
 */
export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Krishna Associates, a client-first tax and financial services firm serving individuals and businesses with GST, Income Tax, Mutual Fund and Insurance solutions."
        path="/about"
      />

      {/* Page hero */}
      <section className="pt-16 md:pt-24 pb-6 bg-cream">
        <div className="container-page">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance"
            >
              {aboutPage.hero.eyebrow}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-medium text-brand-600 mt-3 text-balance"
            >
              {aboutPage.hero.heading}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image + copy */}
      <section className="pt-6 pb-20 md:pb-28 bg-cream">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 aspect-[16/10] rounded-2xl overflow-hidden bg-ink-100 shadow-[var(--shadow-lift)]"
            >
              <img
                src={aboutPage.hero.image}
                alt="Krishna Associates team at work"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 lg:pt-6"
            >
              <p className="text-lg text-ink-700 leading-relaxed">
                {aboutPage.hero.body}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values — replaces the Dev/Marketing skill bars that don't belong on a tax firm site */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-2xl mb-12"
          >
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl leading-[1.1] text-balance">
              Four things we refuse to compromise on.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {aboutPage.values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="relative p-6 rounded-2xl bg-ink-50 border border-ink-100"
              >
                <span className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink-900 font-[var(--font-display)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <StatBox key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Replaces "Got an Incredible Project" agency-template CTA */}
      <CtaBannerSection
        heading={aboutPage.cta.heading}
        body={aboutPage.cta.body}
        buttonLabel={aboutPage.cta.buttonLabel}
      />
    </>
  );
};
