import React from "react";
import { motion } from "framer-motion";
import { 
  FaCertificate, 
  FaCheckDouble, 
  FaSearch, 
  FaFileContract, 
  FaShieldAlt,
  FaPhoneAlt
} from "react-icons/fa";

const AuthenticityGuarantee = () => {
  return (
    <section className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 font-sans border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            The IDEAL Promise
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Authenticity Guarantee
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto pt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Setting the standard for luxury watch retail in Pakistan. We pledge that every timepiece sold through IDEAL Watches is 100% genuine, untouched, and fully documented.
          </p>
        </div>

        {/* 4 Pillars of Authenticity Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: FaCertificate,
              title: "Official Documentation",
              desc: "Every watch includes its original manufacturer warranty card, stamped and dated, alongside the official manual and tags.",
            },
            {
              icon: FaSearch,
              title: "Serial Traceability",
              desc: "All serial numbers engraved on the watch case flawlessly match the accompanying certificates and official brand registries.",
            },
            {
              icon: FaCheckDouble,
              title: "Expert Verification",
              desc: "Our in-house master horologists inspect the movement, finishing, and weight of every piece before dispatch across Pakistan.",
            },
            {
              icon: FaFileContract,
              title: "Authorized Sourcing",
              desc: "We bypass grey markets, sourcing strictly through authorized international distributors and direct manufacturer networks.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm hover:border-[#D4AF37] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-[#D4AF37]">
                  <Icon className="text-base" />
                </div>
                <h3 
                  className="text-lg font-normal text-zinc-900 mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-xs text-zinc-600 font-light leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* The Ironclad Guarantee Banner */}
        <div className="bg-zinc-900 text-white p-8 rounded-sm flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
          
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <FaShieldAlt className="text-[#D4AF37] text-2xl" />
          </div>
          
          <div className="space-y-2 text-center sm:text-left z-10">
            <h2 className="text-2xl font-light uppercase tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Our 100% Money-Back Pledge
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
              We have a zero-tolerance policy for replicas or unauthorized aftermarket modifications. If any watch purchased from IDEAL Watches Pakistan is proven by the official brand to be unauthentic, we will issue a full, unquestioned refund alongside a formal apology.
            </p>
          </div>
        </div>

        {/* Detailed Policy Text */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm font-light leading-relaxed">
          
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h3 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Unboxing Experience
            </h3>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              Luxury is in the details. When you receive an order from IDEAL Watches, whether in Karachi, Lahore, or Islamabad, it arrives in the brand's original presentation box. This includes the outer sleeve, inner display box, original cushion, chronometer certificates (if applicable), and physical instruction manuals. Nothing is omitted.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-zinc-300 pl-4">
            <h3 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Independent Verifications Welcome
            </h3>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              We encourage our clients to verify their purchases. You are welcome to take any timepiece bought from us to an official brand boutique or an independent certified horologist in Pakistan. The flawless movement, pristine dial finishing, and verifiable serial numbers will always stand up to the most rigorous micro-inspections.
            </p>
          </div>

        </div>

        {/* Support Footer */}
        <div className="pt-8 border-t border-zinc-200 text-center space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Have questions about a specific model's authenticity?
          </p>
          <p className="text-sm font-semibold text-zinc-900 flex items-center justify-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <FaPhoneAlt className="text-[#D4AF37] text-xs" /> Connect with our Experts: +92 300 1234567
          </p>
        </div>

      </div>
    </section>
  );
};

export default AuthenticityGuarantee;