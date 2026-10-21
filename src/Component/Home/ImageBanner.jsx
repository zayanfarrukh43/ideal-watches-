import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// web: 3:1, mobile: ~9:16 (Banner 2) and 1:2 (New Banner 1)
import banner1Web from '../../assets/Banner 2 v 2.png';
import banner1Mobile from '../../assets/Banner mobile layout v2.png';
import banner2Web from '../../assets/banner/New Banner 1.png';
import banner2Mobile from '../../assets/banner/m layout.png';

const slides = [
  {
    id: 1,
    web: banner1Web,
    mobile: banner1Mobile,
    alt: 'Ideal Watches - Luxury Watches',
    link: '/collections',
  },
  {
    id: 2,
    web: banner2Web,
    mobile: banner2Mobile,
    // phone art is 1:2 (a bit taller than the 9:16 frame): keep the top text, trim the bottom
    mobilePosition: 'object-top',
    alt: 'Ideal Watches - The Art of Timeless Luxury',
    link: '/collections',
  },
];

export default function ImageBanner() {
  return (
    <section className="w-full bg-[#FCFCFB] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Framed slideshow card. Phones (< 768px) get the tall mobile layouts,
          everything else the wide web layouts. */}
      <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden rounded-2xl bg-black">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={slides.length > 1}
          className="w-full"
          style={{
            '--swiper-pagination-color': '#D4AF37',
            '--swiper-pagination-bullet-inactive-color': '#ffffff',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
            '--swiper-pagination-bottom': '10px',
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link
                to={slide.link}
                className="group relative block w-full aspect-[1080/1919] md:aspect-[3/1] overflow-hidden"
              >
                <picture>
                  <source media="(max-width: 767px)" srcSet={slide.mobile} />
                  <img
                    src={slide.web}
                    alt={slide.alt}
                    loading="lazy"
                    draggable="false"
                    className={`absolute inset-0 w-full h-full object-cover md:object-center select-none group-hover:scale-[1.02] transition-transform duration-1000 ease-out ${slide.mobilePosition || 'object-center'}`}
                  />
                </picture>

                {/* Shop Now - bottom-centre on phones, bottom-right on larger screens
                    (sits above the slide dots, clear of the banner's own text) */}
                <span
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-6 md:right-6 z-10 whitespace-nowrap bg-white text-[#1A1A1A] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase px-7 py-3.5 group-hover:bg-[#D4AF37] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Shop Now
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
