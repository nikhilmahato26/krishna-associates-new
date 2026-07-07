import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '@/data/home';
import { Button } from '@/components/Button';
import { buildWhatsAppUrl, WA_DEFAULT_MESSAGE } from '@/constants/site';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

/**
 * Hero carousel — replaces the 8-slide generic carousel with 3 focused slides.
 * Uses fade transition for a calmer, more trustworthy tax-firm feel.
 */
export const HeroSection = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true, dynamicBullets: false }}
        className="hero-swiper"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[70vh] min-h-[520px] max-h-[760px] overflow-hidden bg-ink-900">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-45"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/55 to-ink-900/20" />

              <div className="relative h-full container-page flex flex-col justify-center">
                <motion.div
                  key={`content-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl"
                >
                  <p className="eyebrow text-brand-300 mb-4">{slide.eyebrow}</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white text-balance">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl text-balance">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button to="/contact" size="lg">
                      Get Free Consultation
                      <ArrowRight size={18} />
                    </Button>
                    <Button
                      href={buildWhatsAppUrl(WA_DEFAULT_MESSAGE)}
                      external
                      variant="outline-white"
                      size="lg"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 24px !important;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 28px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};
