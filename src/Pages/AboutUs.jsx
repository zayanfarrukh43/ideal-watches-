import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Swiss Precision",
    description: "Every timepiece is sourced from master watchmakers using centuries-old techniques.",
  },
  {
    number: "02",
    title: "Guaranteed Authenticity",
    description: "Certified genuine timepieces accompanied by full manufacturer warranties.",
  },
  {
    number: "03",
    title: "Bespoke Concierge",
    description: "Personalized consultation to help you source rare and limited luxury editions.",
  },
  {
    number: "04",
    title: "Curated Excellence",
    description: "Strict quality control ensuring only pristine horological art enters our store.",
  },
];

const stats = [
  { label: "Years of Heritage", value: "25+" },
  { label: "Curated Brands", value: "18+" },
  { label: "Collectors Served", value: "10K+" },
  { label: "Swiss Certificates", value: "100%" },
];

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-zinc-900 overflow-hidden">
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
              Our Legacy
            </span>
            
            <h2 
              className="text-3xl sm:text-5xl font-extralight tracking-tight uppercase leading-tight text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Curators of Time, <br />
              <span className="italic font-normal text-zinc-400">Masters of Precision.</span>
            </h2>

            <p 
              className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Founded on the principles of Swiss horological perfection, IDEAL Watches was created for those who see a timepiece not just as an instrument of time, but as an enduring expression of legacy, craftsmanship, and personal art.
            </p>

            <p 
              className="text-zinc-500 text-xs font-light leading-relaxed max-w-xl hidden sm:block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              We hand-select each watch in our catalog, forging direct relationships with legendary heritage manufactures and modern independent watchmakers alike.
            </p>

            {/* Signature Accent */}
            <div className="pt-4 border-t border-zinc-900 flex items-center gap-4">
              <span 
                className="text-lg sm:text-xl font-light italic text-[#D4AF37]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Ideal Atelier
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
                — Geneva & World
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
                Swiss Standard
              </p>
              <p 
                className="text-xs font-light text-zinc-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "Perfection is not an accident—it is a continuous pursuit."
              </p>
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: Key Pillars (2 cols on mobile, 4 cols on desktop) */}
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
              The Pillars of Ideal
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