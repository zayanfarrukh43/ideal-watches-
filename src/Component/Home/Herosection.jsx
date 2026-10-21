import React, { useEffect, useState } from "react";
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
import banner2Web from "../../assets/banner/New Banner 1.png";
import banner3web from "../../assets/banner/New Banner 2.png";
import banner2Mobile from "../../assets/banner/m layout.png";
import banner3Mobile from "../../assets/banner/m layout 2.png";

// `mobile` is optional: slides without a tall mobile layout are shown on
// tablet/desktop only, so a wide banner is never cropped on a phone.
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
  //   // phone art is 1:2 (a bit taller than the 9:16 frame): keep the top text, trim the bottom
  //   mobilePosition: "object-top",
  //   alt: "Ideal Watches - The Art of Timeless Luxury",
  //   link: "/collections",
  // },
  {
    id: 3,
    web: banner3web,
    mobile: banner3Mobile,
    mobilePosition: "object-top",
    alt: "Ideal Watches - Time, Redefined",
    link: "/collections",
  },
];

// True on phones (< 768px), kept in sync when the window is resized
const useIsPhone = () => {
  const query = "(max-width: 767px)";
  const [isPhone, setIsPhone] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsPhone(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isPhone;
};

const HeroSection = () => {
  const isPhone = useIsPhone();
  const visibleSlides = isPhone ? slides.filter((slide) => slide.mobile) : slides;

  return (
    <section className="relative w-full bg-black overflow-hidden z-10">
      <Swiper
        key={isPhone ? "phone" : "wide"}
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={visibleSlides.length > 1}
        className="w-full"
        style={{
          "--swiper-pagination-color": "#D4AF37",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bottom": "12px",
        }}
      >
        {visibleSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link} className="block w-full">
              {/* Phones (< 768px) get the tall mobile layout, everything else the wide web layout.
                  The frame matches each image's own shape, so nothing is cropped. */}
              <picture>
                {slide.mobile && <source media="(max-width: 767px)" srcSet={slide.mobile} />}
                <img
                  src={slide.web}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable="false"
                  className={`block w-full aspect-[1080/1919] md:aspect-[3/1] md:max-h-[85vh] object-cover md:object-center select-none ${slide.mobilePosition || "object-center"}`}
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
