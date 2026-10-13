import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner1 from "../../assets/Ideal Watches Web Banner.png";
import banner2 from "../../assets/Ideal Watches Web Banner 2.png";

// Banners are 3:1. On smaller screens a taller frame is used and the image is
// cropped from the sides; `position` keeps the logo text + watch in view.
const slides = [
  {
    id: 1,
    image: banner1,
    alt: "Ideal Watches - Timeless Style for Modern Men",
    link: "/collections",
    position: "object-[0%_50%] sm:object-[10%_50%] lg:object-center",
  },
  {
    id: 2,
    image: banner2,
    alt: "Ideal Watches - Timeless Elegance",
    link: "/collections",
    position: "object-[27%_50%] sm:object-[20%_50%] lg:object-center",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden z-10">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
        style={{
          "--swiper-pagination-color": "#D4AF37",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bottom": "12px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link} className="block w-full">
              {/* Phone 2:1 → tablet 5:2 → desktop full 3:1 (capped at 85% of screen height) */}
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                draggable="false"
                className={`w-full aspect-[2/1] sm:aspect-[5/2] lg:aspect-[3/1] max-h-[85vh] object-cover select-none ${slide.position}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
