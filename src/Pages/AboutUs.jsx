import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaTruck, FaUserCheck, FaClock } from "react-icons/fa";

const manifestoPillars = [
  {
    id: "01",
    icon: FaShieldAlt,
    title: "100% Certified Provenance",
    subtitle: "AUTHENTICITY GUARANTEED",
    description: "Every timepiece passing through our vault undergoes rigorous multi-point inspection by certified master horologists. Supported by official manufacturer warranties.",
    accent: "Verified Vault Security"
  },
  {
    id: "02",
    icon: FaUserCheck,
    title: "VIP Private Atelier Access",
    subtitle: "CONCIERGE EXPERIENCE",
    description: "Private consultations in Karachi, Lahore, and Islamabad. Experience bespoke appointments and private viewings for rare and limited-edition luxury references.",
    accent: "White-Glove Service"
  },
  {
    id: "03",
    icon: FaTruck,
    title: "Insured Express Delivery",
    subtitle: "NATIONWIDE LOGISTICS",
    description: "Doorstep delivery with full transit insurance across 100+ cities in Pakistan. Inspect your timepiece in person before making final payment.",
    accent: "Cash On Delivery Available"
  },
  {
    id: "04",
    icon: FaClock,
    title: "Enduring Horological Trust",
    subtitle: "15+ YEARS OF HERITAGE",
    description: "Over a decade spent cultivating relationships with global horological houses to curate Pakistan's finest collection of Swiss and luxury timepieces.",
    accent: "12,000+ Collectors Served"
  }
];

const AboutUs = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="bg-black text-white py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-t border-zinc-900 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-28 sm:space-y-40">
        
        {/* HERO MANIFESTO */}
        <div className="relative border-b border-zinc-900 pb-16 sm:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span 
                className="text-[#D4AF37] uppercase tracking-[0.45em] text-[9px] font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Atelier & Heritage
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide uppercase leading-[1.15] text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Crafting Legacy. <br />
              <span className="italic font-normal text-zinc-400">Redefining Horology in Pakistan.</span>
            </h1>

            <p 
              className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl pt-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              IDEAL Watches was founded on a singular conviction: to grant discerning collectors in Pakistan seamless access to authentic global horological masterpieces with uncompromised integrity.
            </p>
          </motion.div>

          {/* Background Ambient Text */}
          <div 
            className="absolute -right-10 top-0 text-[120px] sm:text-[220px] font-bold text-zinc-900/20 select-none pointer-events-none hidden lg:block tracking-tighter"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            IDEAL
          </div>
        </div>

        {/* EDITORIAL SPLIT: ASYMMETRIC STORY & ARTWORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Feature Image with Interactive Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-zinc-900 bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000" 
                alt="Luxury Watch Movement" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Corner Signature Emblem */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md space-y-2">
              <div 
                className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Karachi • Lahore • Islamabad
              </div>
              <p 
                className="text-lg font-light text-zinc-200 italic"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "Precision is not merely measured in seconds, but in generations."
              </p>
            </div>
          </motion.div>

          {/* Right Content: Narrative & Key Stat Counters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <span 
                className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-medium block"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our Philosophy
              </span>
              <h2 
                className="text-3xl sm:text-4xl font-light tracking-wide text-white uppercase"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Bridging Haute Horlogerie <br /> With Local Distinction
              </h2>
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
            </div>

            <div 
              className="space-y-6 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <p>
                From classic dress references to modern sport chronographs, our collection represents the pinnacle of watchmaking history. We curate directly through verified global channels to eliminate counterfeit risks.
              </p>
              <p>
                With tailored private concierge services and express doorstep inspection across 100+ cities in Pakistan, we make acquiring luxury timepieces effortless, secure, and personal.
              </p>
            </div>

            {/* Minimal Stat Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-zinc-900">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "100%", label: "Authentic Vault" },
                { val: "100+", label: "Cities Covered" },
                { val: "12K+", label: "VIP Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div 
                    className="text-2xl sm:text-3xl font-light text-[#D4AF37]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {stat.val}
                  </div>
                  <div 
                    className="text-[8px] uppercase tracking-[0.2em] text-zinc-500"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* INTERACTIVE PILLARS / ACCORDION EXPERIENCE */}
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span 
              className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] font-medium block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              The Standard of Excellence
            </span>
            <h2 
              className="text-3xl sm:text-5xl font-light uppercase tracking-wider text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Four Guarantees of IDEAL
            </h2>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Pillar Selector List */}
            <div className="lg:col-span-6 space-y-3">
              {manifestoPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === index;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(index)}
                    className={`p-6 border transition-all duration-500 cursor-pointer flex items-center justify-between ${
                      isSelected 
                        ? "bg-zinc-950 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/5" 
                        : "bg-zinc-950/30 border-zinc-900 hover:border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-mono text-[#D4AF37]">
                        {pillar.id}
                      </span>
                      <div>
                        <h3 
                          className="text-base sm:text-lg font-light text-white tracking-wide"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {pillar.title}
                        </h3>
                        <p 
                          className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mt-0.5"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <Icon className={`text-base transition-colors ${isSelected ? "text-[#D4AF37]" : "text-zinc-600"}`} />
                  </div>
                );
              })}
            </div>

            {/* Active Pillar Details Card */}
            <div className="lg:col-span-6 min-h-[320px] bg-zinc-950 border border-zinc-900 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <span 
                    className="inline-block text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 border border-[#D4AF37]/20"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {manifestoPillars[activePillar].accent}
                  </span>

                  <h3 
                    className="text-2xl sm:text-4xl font-light text-white uppercase tracking-wide"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {manifestoPillars[activePillar].title}
                  </h3>

                  <p 
                    className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {manifestoPillars[activePillar].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-8 mt-8 border-t border-zinc-900 flex justify-between items-center text-[9px] uppercase tracking-[0.25em] text-zinc-600 font-mono">
                <span>IDEAL Horology Vault</span>
                <span>Ref. 00{activePillar + 1}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;