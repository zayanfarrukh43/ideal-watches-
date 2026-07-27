import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

const PromotionalBanner = () => {
  // Dynamic countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-sm border border-zinc-200 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-sm">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[#D4AF37]/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[#D4AF37]/5 rounded-full blur-[50px] sm:blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Gold Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/40 mb-4 sm:mb-6">
                <FaClock className="text-[#D4AF37] text-[10px]" />
                <span
                  className="text-[#D4AF37] text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.3em] font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Exclusive VIP Offer
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl sm:text-4xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.2] lg:leading-[1.15] mb-4 sm:mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                The Private Collector's Edition
              </h2>

              <p
                className="text-zinc-600 text-xs sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Receive a complimentary watch winder and guaranteed 5-year extended warranty on all tourbillon models. Limited to tier-one members.
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center lg:justify-start items-center gap-3 sm:gap-6 mb-8 sm:mb-10">
                <div className="text-center min-w-[50px]">
                  <span
                    className="block text-xl sm:text-3xl font-light text-zinc-900 tracking-widest"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Hours
                  </span>
                </div>
                <span className="text-zinc-300 text-lg sm:text-xl font-light">-</span>
                <div className="text-center min-w-[50px]">
                  <span
                    className="block text-xl sm:text-3xl font-light text-zinc-900 tracking-widest"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Mins
                  </span>
                </div>
                <span className="text-zinc-300 text-lg sm:text-xl font-light">-</span>
                <div className="text-center min-w-[50px]">
                  <span
                    className="block text-xl sm:text-3xl font-light text-[#D4AF37] tracking-widest"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Secs
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg shadow-zinc-950/10 w-full sm:w-auto"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Claim Invitation</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>

            {/* Right Watch Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0"
            >
              {/* Responsive Gold Ring Frame */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-[#D4AF37]/40 flex items-center justify-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm shadow-xl">
                <div className="w-full h-full rounded-full border border-zinc-200 bg-zinc-950 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
                    alt="Luxury Watch Detail"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;