import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTruck, FaGem, FaShieldAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    id: "certified",
    icon: FaAward,
    title: "100% Certified Originals",
    shortDesc: "Authenticated timepieces with official documentation.",
    fullDesc: "Every timepiece undergoes rigorous multi-point verification by master watchmakers and is supplied with complete manufacturer documentation, original box, and valid warranty cards.",
    highlights: ["Multi-Point Inspection", "Original Box & Papers", "Verified Provenance"]
  },
  {
    id: "crafts",
    icon: FaGem,
    title: "Master Crafts & Materials",
    shortDesc: "High-grade sapphire crystal & 316L surgical steel.",
    fullDesc: "Engineered with anti-reflective sapphire crystals, solid gold accents, high-grade 316L stainless steel, and hand-stitched genuine leather or solid link bracelets.",
    highlights: ["Scratch-Resistant Sapphire", "316L Surgical Steel", "Precision Movements"]
  },
  {
    id: "warranty",
    icon: FaShieldAlt,
    title: "Official 2-Year Local Warranty",
    shortDesc: "Comprehensive 2-year localized coverage.",
    fullDesc: "Enjoy total confidence with full 2-year official local warranty coverage, backed by our dedicated horology service hubs and master watchmakers in Karachi, Lahore, and Islamabad.",
    highlights: ["2-Year Official Coverage", "Dedicated Service Hubs", "Certified Technicians"]
  },
  {
    id: "delivery",
    icon: FaTruck,
    title: "Nationwide Delivery & Flexible COD",
    shortDesc: "COD in Karachi; 70% advance & 30% on delivery for other cities.",
    fullDesc: "Express delivery across Pakistan. We offer full Cash on Delivery within Karachi. For orders outside Karachi, a 70% advance payment is required upon order confirmation, with the remaining 30% collected on delivery.",
    highlights: ["Karachi COD Available", "70% Advance / 30% COD Outstations", "Express Delivery"]
  },
];

const HeritageSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-black text-white py-16 sm:py-28 border-b border-zinc-900 relative overflow-hidden font-sans">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              The Art of Timekeeping
            </span>
            <span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Crafting Legacy for Pakistani Collectors
          </h2>

          <p
            className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            At IDEAL Watches, luxury is not merely worn—it is inherited. Designed for Pakistan's most discerning horology enthusiasts with mechanical precision and verified authenticity.
          </p>
        </div>

        {/* Main Section Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80"
                alt="Watchmaker Craftsmanship"
                className="w-full h-[380px] sm:h-[500px] object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Floating Stat Badge */}
              <div className="absolute top-6 left-6 border border-zinc-800/80 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg">
                <span 
                  className="text-[#D4AF37] text-[9px] uppercase tracking-[0.25em] block font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Est. 2010
                </span>
                <span 
                  className="text-white text-xs font-light tracking-wide block"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Karachi • Pakistan
                </span>
              </div>

              {/* Image Footer Caption */}
              <div className="absolute bottom-6 left-6 right-6 border border-zinc-800/80 bg-black/85 backdrop-blur-md p-5 rounded-xl">
                <p 
                  className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Atelier Pakistan
                </p>
                <p 
                  className="text-white text-lg sm:text-xl font-light mt-0.5"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  "Bringing certified world-class timepieces directly to Pakistani collectors."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Feature Tabs */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
                    isActive
                      ? "bg-zinc-950 border-[#D4AF37]/60 shadow-lg shadow-[#D4AF37]/5"
                      : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950/80"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive 
                        ? "bg-gradient-to-br from-[#D4AF37] to-[#B38F2A] text-black" 
                        : "bg-zinc-900 border border-zinc-800 text-[#D4AF37]"
                    }`}>
                      <Icon className="text-base" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg sm:text-xl font-light tracking-wide transition-colors ${
                            isActive ? "text-white" : "text-zinc-300"
                          }`}
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {item.title}
                        </h3>
                        <FaArrowRight className={`text-xs transition-transform duration-300 ${
                          isActive ? "text-[#D4AF37] rotate-90" : "text-zinc-600 opacity-0 group-hover:opacity-100"
                        }`} />
                      </div>

                      <p
                        className="text-zinc-400 text-xs font-light leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.shortDesc}
                      </p>

                      {/* Expandable Active Details */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-3 space-y-3 overflow-hidden"
                          >
                            <p 
                              className="text-zinc-300 text-xs font-light leading-relaxed border-t border-zinc-800/80 pt-3"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              {item.fullDesc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.highlights.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-[#D4AF37] font-medium"
                                  style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                  <FaCheckCircle className="text-[9px]" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-zinc-900">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-zinc-950/60 border border-zinc-900/80 hover:border-[#D4AF37]/30 transition-all duration-300 text-center space-y-2 group"
              >
                <Icon className="text-[#D4AF37] text-lg mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h4
                  className="text-zinc-200 text-sm sm:text-base font-light uppercase tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-zinc-500 text-[10px] sm:text-xs font-light line-clamp-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeritageSection;