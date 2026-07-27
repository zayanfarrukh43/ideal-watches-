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
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-zinc-950 overflow-hidden z-10">
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
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/75"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>

              <div className="relative z-20 max-w-[1500px] mx-auto px-6 lg:px-12 w-full py-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* LEFT CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-center lg:text-left"
                  >
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                      <span
                        className="uppercase tracking-[0.35em] text-[#D4AF37] text-xs font-semibold"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>

                    <h1
                      className="text-white text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight whitespace-pre-line font-light"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                      }}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="mt-6 text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm md:text-base font-light tracking-wide"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                      <button 
                        className="h-14 px-9 rounded-full cursor-pointer bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#D4AF37]/10"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Explore Collection
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>

                  {/* RIGHT IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative flex justify-center items-center"
                  >
                    {/* Radial Ambient Glow */}
                    <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full bg-[#D4AF37]/15 blur-[100px] pointer-events-none"></div>

                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      animate={{
                        y: [0, -16, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                      }}
                      className="relative z-20 w-[80%] max-w-[520px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.85)]"
                    />

                    {/* Glass Floating Feature Card */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                      className="hidden lg:block absolute left-2 bottom-8 z-30"
                    >
                      <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-6 py-5 shadow-2xl hover:border-[#D4AF37]/50 transition-colors duration-300">
                        <p 
                          className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          Swiss Made
                        </p>
                        <h3
                          className="text-white text-xl mt-1 font-normal tracking-wide"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                          }}
                        >
                          Premium Craftsmanship
                        </h3>
                        <p 
                          className="text-zinc-400 mt-1 text-xs font-light"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          Precision engineered luxury watches.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                </div>

                {/* Bottom Statistics */}
                <div className="mt-16 pt-8 border-t border-zinc-800/60">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    
                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl font-light"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        10K+
                      </h2>
                      <p 
                        className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-1"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Happy Clients
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl font-light"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        250+
                      </h2>
                      <p 
                        className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-1"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Luxury Models
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl font-light"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        50+
                      </h2>
                      <p 
                        className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-1"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Premium Brands
                      </p>
                    </div>

                    <div>
                      <h2
                        className="text-[#D4AF37] text-3xl md:text-4xl font-light"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        24/7
                      </h2>
                      <p 
                        className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-1"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
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