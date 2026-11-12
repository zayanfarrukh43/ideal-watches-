import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Each slide declares its image shapes (webAspect / mobileAspect) so the frame always
// matches the picture and nothing is cropped. Tailwind needs full class names, so
// they are written out as strings.
import banner1Web from "../../assets/Banner 1 v1.png";
import banner1Mobile from "../../assets/Banner mobile layout v2.jpg.png";
import movadoWeb from '../../assets/banner/Web Banner  (2).jpg.jpeg';
import movadoMobile from '../../assets/banner/Web Banner Mob Layout 3.jpg.jpeg';
// import banner3Mobile from "../../assets/banner/m layout 2.png";
import tissotWeb from "../../assets/banner/Banner 1.jpg.jpeg";
import tissotMobile from "../../assets/banner/Banner 2 mob layout.jpg.jpeg";
import versaceWeb from "../../assets/banner/Banner 2.jpg.jpeg";
import versaceMobile from "../../assets/banner/Banner mob layout.jpg.jpeg";

// `mobile` is optional: slides without a tall mobile layout are shown on
// tablet/desktop only, so a wide banner is never cropped on a phone.
const slides = [
  {
    id: 1,
    web: banner1Web,
    mobile: banner1Mobile,
    webAspect: "md:aspect-[1672/941]", // 16:9
    mobileAspect: "aspect-[1024/1536]", // 2:3
    alt: "Ideal Watches - Luxury Watches",
    link: "/collections",
  },
  {
    id: 2,
    web: movadoWeb,
    mobile: movadoMobile,
    webAspect: 'md:aspect-[1672/941]', // 16:9 - same as slide 1, so the height never jumps
    mobileAspect: 'aspect-[940/1672]', // 9:16
    alt: 'Movado - The Art of Time',
    link: '/brand/movado',
  },
  {
    id: 4,
    web: tissotWeb,
    mobile: tissotMobile,
    webAspect: "md:aspect-[1672/941]", // 16:9
    mobileAspect: "aspect-[1024/1536]", // 2:3
    alt: "Ideal Watches - Tissot, Precision at Every Millisecond",
    link: "/collections",
  },
  {
    id: 5,
    web: versaceWeb,
    mobile: versaceMobile,
    webAspect: "md:aspect-[1672/941]", // 16:9
    mobileAspect: "aspect-[1024/1536]", // 2:3
    alt: "Ideal Watches - Versace",
    link: "/collections",
  },
  // {
  //   id: 3,
  //   web: banner3web,
  //   mobile: banner3Mobile,
  //   webAspect: "md:aspect-[3/1]",
  //   mobileAspect: "aspect-[1/2]",
  //   alt: "Ideal Watches - Time, Redefined",
  //   link: "/collections",
  // },
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
                  className={`block w-full object-cover md:object-center select-none ${slide.mobileAspect || "aspect-[9/16]"} ${slide.webAspect || "md:aspect-[3/1]"} ${slide.mobilePosition || "object-center"}`}
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
