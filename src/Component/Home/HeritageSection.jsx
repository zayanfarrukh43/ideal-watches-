import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCompass, FaGem, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: FaAward,
    title: "Master Craftsmanship",
    description: "Every movement is hand-assembled by Swiss master watchmakers with decades of precision experience.",
  },
  {
    icon: FaGem,
    title: "Rare Materials",
    description: "Constructed from 316L stainless steel, 18k solid gold, sapphire crystal, and genuine alligator leather.",
  },
  {
    icon: FaShieldAlt,
    title: "5-Year Guarantee",
    description: "Comprehensive worldwide warranty covering mechanical precision and structural integrity.",
  },
  {
    icon: FaCompass,
    title: "Insured Shipping",
    description: "Complimentary global delivery with full door-to-door insurance and private signature verification.",
  },
];

const HeritageSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-24 border-b border-zinc-200 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ========================= */}
        {/* Main Heritage Grid */}
        {/* ========================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Container */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative rounded-sm overflow-hidden border border-zinc-200 group shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80"
                  alt="Watchmaker Craftsmanship"
                  className="w-full h-[480px] sm:h-[560px] object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                
                {/* Image Overlay Caption */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p 
                    className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Geneva Workshop
                  </p>
                  <p 
                    className="text-white text-xl font-light mt-1"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Precision engineering since 1988
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Accent Floating Border Box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span
                className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Art of Time
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl font-light tracking-tight text-zinc-900 leading-[1.2] mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Crafting Legacy Beyond Generations
            </h2>

            <p
              className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              At IDEAL Watches, luxury is not merely worn—it is inherited. Every timepiece in our curation represents hundreds of hours of mechanical refinement, combining centuries-old Swiss traditions with contemporary design aesthetics.
            </p>

            <blockquote
              className="border-l-2 border-[#D4AF37] pl-6 py-2 my-8 text-zinc-700 italic text-lg font-light"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "True luxury lies in details unseen by the world, yet felt in every tick of the escapement wheel."
            </blockquote>

            {/* Signature Block */}
            <div className="flex items-center gap-6 pt-4 border-t border-zinc-200">
              <div>
                <p
                  className="text-zinc-900 text-lg tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Alexander Vance
                </p>
                <p
                  className="text-zinc-500 text-[10px] uppercase tracking-[0.25em] mt-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Head Horologist & Curator
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ========================= */}
        {/* Horizontal Pillars Grid */}
        {/* ========================= */}
        <div className="mt-24 pt-16 border-t border-zinc-200 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-sm bg-zinc-50/70 border border-zinc-200 hover:border-[#D4AF37]/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-[#D4AF37] transition-colors duration-300 shadow-sm">
                  <Icon className="text-[#D4AF37] text-sm" />
                </div>

                <h3
                  className="text-zinc-900 text-lg font-normal mb-2 tracking-wide"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-zinc-600 text-xs font-light leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeritageSection;