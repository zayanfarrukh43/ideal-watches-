import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    subtitle: "Luxury Swiss Collection",
    title: "TIME\nREDEFINED",
    description:
      "Discover handcrafted luxury watches designed for those who appreciate timeless elegance and precision engineering.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&auto=format&fit=crop&q=80",
    background:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1920&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    subtitle: "New Arrival",
    title: "BEYOND\nPERFECTION",
    description: "Experience uncompromising luxury with every second.",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=900&auto=format&fit=crop&q=80",
    background:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&auto=format&fit=crop&q=80",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-black overflow-hidden z-10">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full min-h-[calc(100vh-80px)] bg-cover bg-center py-12 lg:py-0 flex items-center"
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

              <div className="relative z-20 max-w-[1500px] mx-auto px-6 lg:px-10 w-full py-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* LEFT CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center lg:text-left"
                  >
                    <span
                      className="uppercase tracking-[7px] text-[#D4AF37] text-sm"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {slide.subtitle}
                    </span>

                    <h1
                      className="mt-5 text-white text-5xl md:text-7xl xl:text-8xl leading-none whitespace-pre-line"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                      }}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="mt-8 text-zinc-300 leading-8 max-w-xl mx-auto lg:mx-0 text-sm md:text-base"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                      <button className="h-14 px-8 rounded-full cursor-pointer bg-[#D4AF37] text-black font-semibold flex items-center gap-3 hover:bg-white duration-300">
                        Explore Collection
                        <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>

                  {/* RIGHT IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center items-center"
                  >
                    {/* Gold Glow */}
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>

                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                      }}
                      className="relative z-20 w-[80%] max-w-[550px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.8)]"
                    />

                    {/* Floating Card */}
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                      className="hidden lg:block absolute left-0 bottom-10 z-30"
                    >
                      <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl px-6 py-5 shadow-2xl">
                        <p className="text-[#D4AF37] text-xs uppercase tracking-[3px] font-semibold">
                          Swiss Made
                        </p>
                        <h3
                          className="text-white text-xl mt-1"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                          }}
                        >
                          Premium Craftsmanship
                        </h3>
                        <p className="text-zinc-400 mt-1 text-xs">
                          Precision engineered luxury watches.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom Statistics */}
                <div className="mt-16 pt-8 border-t border-zinc-800/80">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        10K+
                      </h2>
                      <p className="text-zinc-400 text-xs md:text-sm mt-1">
                        Happy Clients
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        250+
                      </h2>
                      <p className="text-zinc-400 text-xs md:text-sm mt-1">
                        Luxury Models
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        50+
                      </h2>
                      <p className="text-zinc-400 text-xs md:text-sm mt-1">
                        Premium Brands
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        24/7
                      </h2>
                      <p className="text-zinc-400 text-xs md:text-sm mt-1">
                        Concierge Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;