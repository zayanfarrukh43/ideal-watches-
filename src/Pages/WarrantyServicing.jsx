import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaTools, 
  FaClock, 
  FaCertificate, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaFileSignature,
  FaTruck
} from "react-icons/fa";

const WarrantyServicing = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderId: "",
    watchBrand: "",
    issueDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 font-sans border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Peace of Mind & Watch Care
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Warranty & Servicing
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto pt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Every timepiece backed by our 2-Year IDEAL Protection Guarantee alongside official manufacturer international warranties.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: FaCertificate,
              title: "100% Authentic & Stamped",
              desc: "All watches arrive with official manufacturer warranty cards stamped by authorized regional distributors.",
            },
            {
              icon: FaShieldAlt,
              title: "2-Year Comprehensive Coverage",
              desc: "Covers internal mechanical movements, battery replacements, hands, and dial defects free of charge.",
            },
            {
              icon: FaTools,
              title: "Swiss-Grade Service Center",
              desc: "Our master horologists operate a state-of-the-art flagship repair laboratory in Karachi.",
            },
            {
              icon: FaClock,
              title: "Complimentary Maintenance Check",
              desc: "Free water-resistance testing, gasket lubrication, and ultrasonic case cleaning with every annual service.",
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

        {/* Coverage Details Section */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm font-light leading-relaxed">
          
          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
            <h2 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              What is Covered?
            </h2>
            <ul className="list-disc pl-5 space-y-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li>Internal watch movement defects (Automatic, Mechanical, and Quartz).</li>
              <li>Factory defects in the hands, dial, or internal assembly.</li>
              <li>Free battery replacements within the first 24 months from purchase date.</li>
              <li>Water resistance degradation under normal intended usage parameters.</li>
            </ul>
          </div>

          <div className="space-y-2 border-l-2 border-zinc-300 pl-4">
            <h2 
              className="text-lg font-semibold text-zinc-900 uppercase tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              What is Excluded?
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li>Normal wear and tear to strap/bracelet (leather, rubber, stainless steel scratches).</li>
              <li>Damage to crystal glass, bezel, case, or crown caused by impact or dropping.</li>
              <li>Water damage resulting from operating the crown underwater or exceeding ATM limits.</li>
              <li>Unauthorized repairs or third-party tampering outside IDEAL Watch Boutique labs.</li>
            </ul>
          </div>

        </div>

        {/* Exclusive Flagship Repair Laboratory in Karachi */}
        <div className="bg-zinc-900 text-white p-8 rounded-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-semibold block">
              Flagship Horology Laboratory
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Karachi Boutique & Service Center
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-800 text-xs">
            {/* Walk-in Location */}
            <div className="bg-zinc-800/50 p-5 rounded-sm border border-zinc-700/50 space-y-2">
              <p className="font-semibold text-white flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-[#D4AF37]" /> In-Person Walk-In (Karachi)
              </p>
              <p className="text-zinc-300 font-light leading-relaxed">
                Dolmen Mall Clifton, Level 1, Boutique #14, Marine Drive, Block 4 Clifton, Karachi.
              </p>
              <p className="text-[#D4AF37] font-medium pt-1">
                Ph: (021) 111-000-888 | Mon - Sat: 11 AM - 9 PM
              </p>
            </div>

            {/* Nationwide Courier Pickup */}
            <div className="bg-zinc-800/50 p-5 rounded-sm border border-zinc-700/50 space-y-2">
              <p className="font-semibold text-white flex items-center gap-2 text-sm">
                <FaTruck className="text-[#D4AF37]" /> Outside Karachi?
              </p>
              <p className="text-zinc-300 font-light leading-relaxed">
                We arrange insured reverse-courier pickups across Pakistan (Lahore, Islamabad, Rawalpindi, etc.) directly to our Karachi lab.
              </p>
              <p className="text-zinc-400 font-medium pt-1">
                Fully insured transit during servicing.
              </p>
            </div>
          </div>
        </div>

        {/* Claim / Servicing Request Form */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-normal text-zinc-900 uppercase" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Submit a Warranty or Service Claim
            </h3>
            <p className="text-xs text-zinc-500 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Fill out your details below and our horology concierge will contact you within 24 hours to schedule drop-off in Karachi or insured courier pickup nationwide.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-6 text-center rounded-sm space-y-2 text-emerald-900">
              <FaCheckCircle className="text-emerald-600 text-2xl mx-auto" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">Claim Submitted Successfully</h4>
              <p className="text-xs font-light">
                Ticket #WR-{Math.floor(100000 + Math.random() * 900000)} generated. Our technical team will reach out via WhatsApp/Phone shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    WhatsApp / Mobile Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="03001234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Order Reference ID / Warranty Serial
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IW-10492"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Watch Brand & Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. TAG Heuer Formula 1"
                    value={formData.watchBrand}
                    onChange={(e) => setFormData({ ...formData, watchBrand: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Describe the Issue or Service Required
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Battery replacement needed, watch gained 5 minutes overnight, glass replacement..."
                  value={formData.issueDescription}
                  onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                  className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-[#D4AF37] text-white py-3.5 px-6 uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 rounded-sm cursor-pointer"
              >
                <FaFileSignature className="text-xs" /> Submit Warranty Claim
              </button>
            </form>
          )}
        </div>

        {/* Concierge Support Footer */}
        <div className="pt-8 border-t border-zinc-200 text-center space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Direct Warranty Concierge Helpline
          </p>
          <p className="text-sm font-semibold text-zinc-900 flex items-center justify-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <FaPhoneAlt className="text-[#D4AF37] text-xs" /> WhatsApp Support: +92 300 1234567 | Email: service@idealwatches.pk
          </p>
        </div>

      </div>
    </section>
  );
};

export default WarrantyServicing;