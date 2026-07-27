import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaEnvelope } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-b border-zinc-200 relative overflow-hidden">
      {/* Background Radial Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D4AF37]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto rounded-sm border border-zinc-200 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/80 p-8 sm:p-12 lg:p-16 text-center shadow-sm">
          
          {/* Top Badge Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mx-auto mb-6 shadow-sm"
          >
            <FaEnvelope className="text-[#D4AF37] text-sm" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Join The Private Gazette
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Subscribe to receive private invitations to limited production drops, horological insights, and exclusive private client privileges.
          </motion.p>

          {/* Subscription Form / Success State */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            {subscribed ? (
              <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-zinc-900 text-white border border-[#D4AF37]/50">
                <FaCheckCircle className="text-[#D4AF37] text-sm shrink-0" />
                <span
                  className="text-xs font-light uppercase tracking-[0.2em]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Welcome to the Private Circle
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 text-xs font-light px-5 py-4 rounded-full sm:rounded-l-full sm:rounded-r-none border border-zinc-300 focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 bg-zinc-950 text-white px-8 py-4 rounded-full sm:rounded-r-full sm:rounded-l-none text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-md shadow-zinc-950/5 shrink-0"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Subscribe</span>
                  <FaPaperPlane className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Footer Note */}
          <p
            className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 mt-6 font-light"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We respect your privacy. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;