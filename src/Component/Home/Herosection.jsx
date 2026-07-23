import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";


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

//   {
//     id: 2,
//     subtitle: "Premium Collection",
//     title: "CRAFTED\nFOR LEGENDS",
//     description:
//       "Exclusive watches inspired by iconic craftsmanship and modern sophistication.",

//     image:
//       "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&auto=format&fit=crop&q=80",

//     background:
//       "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?w=1920&auto=format&fit=crop&q=80",
//   },

  {
    id: 3,
    subtitle: "New Arrival",
    title: "BEYOND\nPERFECTION",
    description:
      "Experience uncompromising luxury with every second.",

    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=900&auto=format&fit=crop&q=80",

    background:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&auto=format&fit=crop&q=80",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[92vh] lg:h-screen bg-black overflow-hidden">

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
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            >
              {/* Overlay */}

              <div className="absolute inset-0 bg-black/70"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

              <div className="relative z-20 max-w-[1500px] mx-auto px-6 lg:px-10 h-full">

                <div className="grid lg:grid-cols-2 gap-16 items-center h-full">

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
                      className="mt-8 text-zinc-300 leading-8 max-w-xl"
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

                      {/* <button className="h-14 px-8 rounded-full border border-white/30 text-white flex items-center gap-3 hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300">

                        <FaPlay />

                        Watch Story

                      </button> */}

                    </div>

                  </motion.div>

                  {/* RIGHT IMAGE */}

                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                    }}
                    className="relative flex justify-center items-center"
                  >

                    {/* Gold Glow */}

                    <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>

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
                      className="relative z-20 w-[85%] max-w-[650px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.8)]"
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
                      className="hidden lg:block absolute left-0 bottom-20 z-30"
                    >

                      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5">

                        <p className="text-[#D4AF37] text-sm uppercase tracking-[3px]">
                          Swiss Made
                        </p>

                        <h3
                          className="text-white text-2xl mt-2"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                          }}
                        >
                          Premium Craftsmanship
                        </h3>

                        <p className="text-zinc-400 mt-2 text-sm">
                          Precision engineered luxury watches.
                        </p>

                      </div>

                    </motion.div>

                  </motion.div>

                </div>

                {/* Bottom Statistics */}

                <div className="absolute bottom-12 left-0 w-full px-6 lg:px-10">

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>

                      <h2
                        className="text-[#D4AF37] text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        10K+
                      </h2>

                      <p className="text-zinc-400 mt-2">
                        Happy Clients
                      </p>

                    </div>

                    <div>

                      <h2
                        className="text-[#D4AF37] text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        250+
                      </h2>

                      <p className="text-zinc-400 mt-2">
                        Luxury Models
                      </p>

                    </div>

                    <div>

                      <h2
                        className="text-[#D4AF37] text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        50+
                      </h2>

                      <p className="text-zinc-400 mt-2">
                        Premium Brands
                      </p>

                    </div>

                    <div>

                      <h2
                        className="text-[#D4AF37] text-4xl"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                        }}
                      >
                        24/7
                      </h2>

                      <p className="text-zinc-400 mt-2">
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

      {/* Scroll Indicator */}

      <div className="hidden lg:flex absolute bottom-8 right-10 z-30 flex-col items-center">

        <span className="text-white text-xs uppercase tracking-[4px] rotate-90 mb-8">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-[2px] h-16 bg-[#D4AF37]"
        />

      </div>

    </section>
  );
};

export default HeroSection;