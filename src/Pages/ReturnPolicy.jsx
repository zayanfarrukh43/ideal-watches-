import React from "react";
import { motion } from "framer-motion";
import { 
  FaUndoAlt, 
  FaShieldAlt, 
  FaBoxOpen, 
  FaMoneyBillWave, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaPhoneAlt
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <section className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 font-sans border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hassle-Free Guarantees
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            7-Day Return & Exchange Policy
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto pt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            We want you to wear your timepiece with complete confidence. If your purchase isn't perfect, we offer a seamless 7-day inspection and exchange window across Pakistan.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: FaUndoAlt,
              title: "7-Day Inspection Period",
              desc: "You have 7 calendar days from the date of courier delivery to initiate an exchange or return claim.",
            },
            {
              icon: FaBoxOpen,
              title: "Original Packaging Required",
              desc: "Timepiece must be unworn with original plastic wraps, tags, protective films, warranty card, and luxury box intact.",
            },
            {
              icon: FaMoneyBillWave,
              title: "COD & Online Refunds",
              desc: "For COD orders, refunds are credited straight to your Pakistani Bank Account, Raast ID, JazzCash, or EasyPaisa.",
            },
            {
              icon: FaShieldAlt,
              title: "Defect & Transit Guarantee",
              desc: "If your watch arrives damaged or non-functional, we replace it instantly with zero additional shipping cost.",
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

        {/* Step-by-Step Return Process */}
        <div className="bg-zinc-900 text-white p-8 rounded-sm space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-semibold block">
              Simple Protocol
            </span>
            <h2 className="text-2xl font-light uppercase tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              How to Initiate a Return or Exchange
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-800 text-xs">
            <div className="space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-zinc-950 font-bold flex items-center justify-center text-xs">1</span>
              <h4 className="font-semibold text-white uppercase tracking-wider">Contact Concierge</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Reach out to our support team on WhatsApp (+92 300 1234567) within 7 days with your Order ID and photos of the watch.
              </p>
            </div>
            <div className="space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-zinc-950 font-bold flex items-center justify-center text-xs">2</span>
              <h4 className="font-semibold text-white uppercase tracking-wider">Reverse Pickup / Dispatch</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                We will arrange a courier pickup from your home address in major cities (Karachi, Lahore, Islamabad) or guide you to drop off at the nearest hub.
              </p>
            </div>
            <div className="space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-zinc-950 font-bold flex items-center justify-center text-xs">3</span>
              <h4 className="font-semibold text-white uppercase tracking-wider">Quality Inspection & Payout</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Once inspected at our lab, your replacement timepiece will be dispatched or refund issued within 48-72 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Details */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm font-light leading-relaxed">
          
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h3 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              1. Eligibility Guidelines
            </h3>
            <ul className="list-disc pl-5 space-y-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li>The watch must be unworn, undamaged, and free of scratches, sizing alterations, or link removals.</li>
              <li>All original branded packaging, manual booklets, hangtags, and stamped warranty certificates must be returned intact.</li>
              <li>Items purchased on seasonal clearance sales are eligible for size/model exchange only, not cash refunds.</li>
            </ul>
          </div>

          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h3 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              2. Cash on Delivery (COD) Refunds
            </h3>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              Since couriers cannot pay cash back at your doorstep, all approved Cash on Delivery returns will be refunded via direct IBFT Bank Transfer to any standard Pakistani bank account, Raast ID, JazzCash, or EasyPaisa within 3 working days after inspection.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-sm flex items-start gap-4 text-amber-900">
            <FaExclamationTriangle className="text-amber-600 text-xl shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold text-xs uppercase tracking-wider">Important Note Regarding Protective Stickers</h4>
              <p className="text-xs font-light leading-relaxed">
                Please do not remove the transparent protective stickers from the watch crystal, caseback, or bracelet until you are completely satisfied with the watch. Removal of protective wraps renders the watch ineligible for cash refunds.
              </p>
            </div>
          </div>

        </div>

        {/* Support Footer */}
        <div className="pt-8 border-t border-zinc-200 text-center space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Ready to initiate an exchange or return?
          </p>
          <p className="text-sm font-semibold text-zinc-900 flex items-center justify-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <FaPhoneAlt className="text-[#D4AF37] text-xs" /> Returns Concierge WhatsApp: +92 300 1234567 | returns@idealwatches.pk
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReturnPolicy;