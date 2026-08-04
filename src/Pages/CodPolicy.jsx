import React from "react";
import { motion } from "framer-motion";
import { 
  FaHandHoldingUsd, 
  FaShieldAlt, 
  FaTruck, 
  FaPhoneAlt, 
  FaBoxOpen, 
  FaExclamationTriangle 
} from "react-icons/fa";

const policyPoints = [
  {
    icon: FaHandHoldingUsd,
    title: "Pay at Your Doorstep",
    description: "Pay in cash directly to our courier representative upon delivery anywhere across Pakistan.",
  },
  {
    icon: FaPhoneAlt,
    title: "Order Verification Call / WhatsApp",
    description: "All COD orders require mandatory verification via phone call or WhatsApp before dispatch.",
  },
  {
    icon: FaBoxOpen,
    title: "Open-Box Verification Option",
    description: "Inspect the outer security seal and packaging in front of the courier before releasing payment.",
  },
  {
    icon: FaTruck,
    title: "Nationwide Coverage & Tracking",
    description: "Delivered via top courier partners (TCS, Leopards, M&P) with real-time SMS tracking across 100+ Pakistani cities.",
  },
];

const CodPolicy = () => {
  return (
    <section className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 font-sans border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Pakistan Shipping Guidelines
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Cash On Delivery (COD) Policy
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Intro Banner */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-sm text-center">
          <p 
            className="text-zinc-700 text-sm sm:text-base font-light leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            At <strong className="font-semibold text-zinc-900">IDEAL Watches</strong>, we understand the importance of trust and security when purchasing luxury timepieces in Pakistan. We offer convenient nationwide <strong className="font-semibold text-zinc-900">Cash on Delivery (COD)</strong> options to ensure total satisfaction at your doorstep.
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {policyPoints.map((item, idx) => {
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
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Policy Details Sections */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm font-light leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h2 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              1. Order Verification & Processing
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              Once your order is placed, our support team will contact you via phone call or official WhatsApp within 12 hours. Orders will only be dispatched after verbal or written confirmation. Unconfirmed orders will automatically be cancelled after 48 hours.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h2 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              2. High-Value / Luxury Watch Advance Deposit
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              For orders exceeding <strong className="font-semibold text-zinc-900">PKR 50,000</strong> or custom/rare imports, a minor commitment deposit (10% to 20%) via Bank Transfer, JazzCash, or EasyPaisa may be required before shipping. The remaining balance will be collected via COD at delivery.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h2 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              3. Delivery Timelines & Charges
            </h2>
            <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li><strong>Karachi, Lahore, Islamabad / Rawalpindi:</strong> 2–3 Working Days</li>
              <li><strong>Rest of Pakistan:</strong> 3–5 Working Days</li>
              <li><strong>Standard COD Shipping Fee:</strong> Free shipping on orders over PKR 10,000. Flat PKR 250 for orders below.</li>
            </ul>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-sm flex items-start gap-4 text-amber-900">
            <FaExclamationTriangle className="text-amber-600 text-xl shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold text-xs uppercase tracking-wider">Important Note for Customers</h4>
              <p className="text-xs font-light leading-relaxed">
                Please ensure you have the exact cash amount ready upon delivery as courier riders may not carry change. If you wish to refuse the parcel upon open-box inspection, please inform our support team immediately while the rider is present.
              </p>
            </div>
          </div>

        </div>

        {/* Assistance Contact Footer */}
        <div className="pt-8 border-t border-zinc-200 text-center space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Questions regarding your COD order?
          </p>
          <p className="text-sm font-semibold text-zinc-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Support WhatsApp: +92 300 1234567 | Email: support@idealwatches.pk
          </p>
        </div>

      </div>
    </section>
  );
};

export default CodPolicy;

