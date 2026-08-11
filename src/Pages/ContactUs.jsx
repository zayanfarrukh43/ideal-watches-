import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaChevronDown, 
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I schedule a private viewing appointment in Pakistan?",
    answer: "You can request a private viewing directly through our contact form by selecting 'Private Consultation', or via WhatsApp. We host private, secure viewings at our boutique in Karachi."
  },
  {
    question: "Are all timepieces guaranteed 100% authentic?",
    answer: "Yes, every timepiece in our collection undergoes a comprehensive multi-point inspection by certified master watchmakers and comes with full original international documentation, box, and warranty."
  },
  {
    question: "What are your delivery and cash on delivery (COD) policies across Pakistan?",
    answer: "We offer fully insured express courier delivery (TCS / Leopards) across Pakistan within 24–48 hours. Advance security verification is required for high-value orders."
  },
  {
    question: "Can you help source a specific rare or luxury watch in Pakistan?",
    answer: "Absolutely. Our global sourcing network connects directly with verified private collectors and international heritage watchmakers to source rare references directly into Pakistan."
  }
];

const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen py-10 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-24">
        
        {/* Header Title */}
        <div className="text-center space-y-2 sm:space-y-3">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] font-medium block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Client Services — Pakistan
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-wider uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Contact
          </h1>
          <p 
            className="text-zinc-400 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed px-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our dedicated horology specialists in Karachi are available to assist you with luxury watch inquiries, sourcing, or private appointments.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Main Flagship Card */}
          <div className="bg-zinc-950/80 border border-zinc-900 p-5 sm:p-8 space-y-3 sm:space-y-4 text-center rounded-xl group hover:border-[#D4AF37]/50 transition-colors duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaMapMarkerAlt className="text-sm sm:text-base" />
            </div>
            <h3 
              className="text-base sm:text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Main Flagship Boutique
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Shop # 16, Cafe George Market <br />
              Abdullah Haroon Road, Saddar, Karachi
            </p>
          </div>

          {/* Direct Client Care Card */}
          <div className="bg-zinc-950/80 border border-zinc-900 p-5 sm:p-8 space-y-3 sm:space-y-4 text-center rounded-xl group hover:border-[#D4AF37]/50 transition-colors duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaPhoneAlt className="text-sm sm:text-base" />
            </div>
            <h3 
              className="text-base sm:text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Direct Client Care
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              +92 316 2839665 <br />
              <span className="text-zinc-300 font-normal">+92 316 2839665 (WhatsApp)</span> <br />
              support@idealwatches.pk
            </p>
          </div>

          {/* Hours of Operation Card */}
          <div className="bg-zinc-950/80 border border-zinc-900 p-5 sm:p-8 space-y-3 sm:space-y-4 text-center rounded-xl group hover:border-[#D4AF37]/50 transition-colors duration-500 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaClock className="text-sm sm:text-base" />
            </div>
            <h3 
              className="text-base sm:text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Hours of Operation
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Mon — Sat: 11:00 AM – 9:00 PM PKT <br />
              Sunday: By Private Appointment Only
            </p>
          </div>

        </div>

        {/* Main Section: Form & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-900 p-5 sm:p-8 lg:p-10 rounded-2xl space-y-6">
            <div>
              <span 
                className="text-[#D4AF37] uppercase tracking-[0.25em] text-[9px] font-medium block mb-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Send A Message
              </span>
              <h2 
                className="text-2xl sm:text-3xl font-light uppercase text-white tracking-wider"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Bespoke Inquiry
              </h2>
            </div>

            {submitted && (
              <div 
                className="p-4 bg-zinc-900/90 border border-[#D4AF37]/50 text-[#D4AF37] text-xs tracking-wider uppercase text-center font-light rounded-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Shukriya! Your message has been received. Our concierge team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label 
                    className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs sm:text-xs px-4 py-3 rounded-lg outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label 
                    className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@domain.com"
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs sm:text-xs px-4 py-3 rounded-lg outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label 
                    className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 316 2839665"
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs sm:text-xs px-4 py-3 rounded-lg outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>

                {/* Inquiry Topic */}
                <div className="space-y-1.5">
                  <label 
                    className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-zinc-300 text-xs sm:text-xs px-4 py-3 rounded-lg outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Watch Sourcing">Watch Sourcing / Special Order</option>
                    <option value="Private Appointment">Schedule Private Appointment (Karachi)</option>
                    <option value="Servicing & Repair">Servicing & Maintenance</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label 
                  className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the timepiece or service you are interested in..."
                  className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs sm:text-xs p-4 rounded-lg outline-none transition-colors font-light resize-none"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                />
              </div>

              {/* Catchy Action Buttons (Fully Responsive) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Submit Message Button */}
                <button
                  type="submit"
                  className="relative group overflow-hidden w-full h-12 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-semibold text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Submit Message</span>
                </button>

                {/* Catchy WhatsApp Button */}
                <a
                  href="https://wa.me/923162839665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden w-full h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-xs tracking-[0.18em] uppercase shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  <FaWhatsapp className="text-base text-white transition-transform duration-300 group-hover:scale-110" />
                  <span>Chat on WhatsApp</span>
                </a>

              </div>
            </form>
          </div>

          {/* Right Column: Salon Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[320px] sm:min-h-[420px] border border-zinc-900 bg-zinc-950 rounded-2xl overflow-hidden group flex items-end">
              <img 
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000" 
                alt="Ideal Watches Pakistan Salon" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="relative z-10 w-full m-4 sm:m-6 border border-zinc-800/80 bg-black/80 backdrop-blur-md p-4 sm:p-5 text-center rounded-xl">
                <span 
                  className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-light block mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Private VIP Lounge
                </span>
                <p 
                  className="text-base text-white font-light uppercase tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Karachi 
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span 
              className="text-[#D4AF37] text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Common Questions
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-light uppercase tracking-wider text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950/60 border border-zinc-900 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none gap-3"
                >
                  <span 
                    className="text-sm sm:text-base font-light text-zinc-200"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`text-[#D4AF37] text-xs shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-zinc-400 font-light leading-relaxed border-t border-zinc-900/60 pt-3">
                    <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;