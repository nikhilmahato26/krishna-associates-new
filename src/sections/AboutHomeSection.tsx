import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { aboutHome, stats } from '@/data/home';
import { Button } from '@/components/Button';
import { StatBox } from '@/components/StatBox';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

/**
 * About section on the home page (Req #4).
 * Two-column layout on desktop: copy left, image right.
 * Stat boxes below in a 4-column grid.
 */
export const AboutHomeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-balance text-ink-900"
            >
              {aboutHome.eyebrow}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-medium text-brand-600 mt-2">
              {aboutHome.heading}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-ink-600 leading-relaxed text-balance"
            >
              {aboutHome.body}
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-7 space-y-3">
              {aboutHome.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-brand-600 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-ink-800 font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8">
              <Button to="/contact" size="lg">
                {aboutHome.ctaLabel}
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual — image + floating accent card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-ink-100 shadow-[var(--shadow-lift)]">
              <img
                src="/images/about/about-home.png"
                alt="Krishna Associates team advising a client"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Accent card — echoes the "5+ Years" ribbon from the current site */}
            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-brand-700 text-white p-6 shadow-[var(--shadow-lift)] max-w-[220px]">
              <p className="text-3xl font-semibold font-[var(--font-display)] leading-none">
                5+ Years
              </p>
              <p className="mt-1.5 text-sm text-white/80">
                Serving individuals & businesses across India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stat boxes (Req #4) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <StatBox key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
