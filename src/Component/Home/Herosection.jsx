import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Web-optimised copies of the originals in src/assets/banner
// (web: 2400x800 = 3:1, mobile: 1080x1919 = 9:16)
import banner1Web from "../../assets/Banner 1 v1.png";
import banner1Mobile from "../../assets/Banner mobile layout v2.jpg.png";
import banner2Web from "../../assets/banner/banner2-web.jpg";
import banner2Mobile from "../../assets/banner/banner2-mobile.jpg";

const slides = [
  {
    id: 1,
    web: banner1Web,
    mobile: banner1Mobile,
    alt: "Ideal Watches - Luxury Watches",
    link: "/collections",
  },
  // {
  //   id: 2,
  //   web: banner2Web,
  //   mobile: banner2Mobile,
  //   alt: "Ideal Watches - Timeless Elegance",
  //   link: "/collections",
  // },
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
              {/* Phones (< 768px) get the tall mobile layout, everything else the wide web layout.
                  The frame matches each image's own shape, so nothing is cropped. */}
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.web}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable="false"
                  className="block w-full aspect-[1080/1919] md:aspect-[3/1] md:max-h-[85vh] object-cover select-none"
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
