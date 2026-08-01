import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "100% Certified Authentic",
    description: "Every timepiece is thoroughly inspected and verified, backed by official international & local warranties.",
  },
  {
    number: "02",
    title: "Cash On Delivery & Inspection",
    description: "Pay safely at your doorstep anywhere in Pakistan with secure, insured delivery.",
  },
  {
    number: "03",
    title: "VIP Private Concierge",
    description: "Personalized consultation and private home appointments for rare & limited luxury timepieces in major cities.",
  },
  {
    number: "04",
    title: "Nationwide Express Shipping",
    description: "Dispatched with top-tier courier partners ensuring fully insured transit to 100+ cities across Pakistan.",
  },
];

const stats = [
  { label: "Years of Trust", value: "15+" },
  { label: "Pakistani Cities Served", value: "100+" },
  { label: "Satisfied Collectors", value: "12K+" },
  { label: "Authenticity Guarantee", value: "100%" },
];

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-zinc-900 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-24 sm:space-y-32">
        
        {/* SECTION 1: Brand Story Header & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span 
              className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-medium block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Heritage in Pakistan
            </span>
            
            <h2 
              className="text-3xl sm:text-5xl font-extralight tracking-tight uppercase leading-tight text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Pakistan’s Premier <br />
              <span className="italic font-normal text-zinc-400">House of Fine Horology.</span>
            </h2>

            <p 
              className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Founded with a passion for Swiss craftsmanship and timeless elegance, IDEAL Watches stands as Pakistan’s trusted destination for discerning collectors. We bridge world-class horology with seamless local accessibility.
            </p>

            <p 
              className="text-zinc-500 text-xs font-light leading-relaxed max-w-xl hidden sm:block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              From flagship boutiques in Karachi, Lahore, and Islamabad to nationwide express delivery, every watch in our vault is hand-curated to ensure uncompromised authenticity, prestige, and longevity.
            </p>

            {/* Signature Accent */}
            <div className="pt-4 border-t border-zinc-900 flex items-center gap-4">
              <span 
                className="text-lg sm:text-xl font-light italic text-[#D4AF37]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                IDEAL Atelier
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
                — Karachi • Lahore • Islamabad
              </span>
            </div>
          </motion.div>

          {/* Right Editorial Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden border border-zinc-900 bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000" 
                alt="Watchmaker Craftsmanship" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Luxury Tag */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md p-4 sm:p-6 max-w-[240px]">
              <p 
                className="text-[#D4AF37] text-[9px] uppercase tracking-[0.25em] mb-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Local Prestige
              </p>
              <p 
                className="text-xs font-light text-zinc-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "Bringing world-class horology and absolute authenticity to Pakistan."
              </p>
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: Key Pillars */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span 
              className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Why Choose Us
            </span>
            <h3 
              className="text-2xl sm:text-4xl font-light uppercase tracking-wider text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Pillars of IDEAL
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-zinc-950/60 border border-zinc-900 hover:border-zinc-700 p-4 sm:p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span 
                    className="text-xs sm:text-sm font-mono text-[#D4AF37]/80 block mb-3"
                  >
                    {item.number}
                  </span>
                  <h4 
                    className="text-sm sm:text-lg font-light text-zinc-200 group-hover:text-white transition-colors mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-[10px] sm:text-xs text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500 mt-4" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Minimalist Stats Bar */}
        <div className="border-y border-zinc-900 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <h4 
                className="text-2xl sm:text-4xl font-extralight text-white tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {stat.value}
              </h4>
              <p 
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;