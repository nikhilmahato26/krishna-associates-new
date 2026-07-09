import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SectionHeader } from '@/components/SectionHeader';
import { fadeUp, viewportOnce } from '@/animations/variants';
import { testimonials } from '@/data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="What Our Valued Clients Say"
          heading="Client Testimonials"
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="h-auto">
                <article className="h-full flex flex-col rounded-2xl bg-white border border-ink-100 p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow">
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-saffron-500"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-ink-700 italic leading-relaxed text-[15px] mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-ink-100/60 pt-4 mt-auto">
                    <h4 className="font-semibold text-ink-900 text-base font-[var(--font-sans)]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-ink-500 font-medium mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet-active {
          background-color: var(--color-brand-600) !important;
        }
      `}</style>
    </section>
  );
};
