    import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaChevronDown, 
  FaPaperPlane 
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I schedule a private viewing appointment?",
    answer: "You can request a private appointment directly through our contact form by selecting 'Private Consultation', or by contacting our concierge desk via phone. We host viewings in Geneva, London, and New York."
  },
  {
    question: "Are all timepieces guaranteed authentic?",
    answer: "Every timepiece in our collection undergoes a multi-point inspection by certified master watchmakers and comes with full original documentation and manufacturer warranty."
  },
  {
    question: "What are your international shipping & insurance policies?",
    answer: "We offer fully insured, signature-required express worldwide shipping through trusted courier partners. Full coverage is guaranteed until the package is in your hands."
  },
  {
    question: "Can you help source a specific rare or limited edition watch?",
    answer: "Yes, our bespoke watch sourcing network connects directly with heritage manufactures and private collectors globally to acquire elusive references."
  }
];

const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-20 sm:space-y-28">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-medium block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Client Services
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Contact Concierge
          </h1>
          <p 
            className="text-zinc-400 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our dedicated horology specialists are available to assist you with inquiries, collection consultations, or private appointments.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 space-y-4 text-center group hover:border-zinc-700 transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaMapMarkerAlt className="text-base" />
            </div>
            <h3 
              className="text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Main Flagship
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Rue du Rhône 42 <br />
              1204 Geneva, Switzerland
            </p>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 space-y-4 text-center group hover:border-zinc-700 transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaPhoneAlt className="text-base" />
            </div>
            <h3 
              className="text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Direct Client Care
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              +41 22 819 00 00 <br />
              concierge@idealwatches.com
            </p>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 space-y-4 text-center group hover:border-zinc-700 transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
              <FaClock className="text-base" />
            </div>
            <h3 
              className="text-lg font-light uppercase tracking-wider text-zinc-200"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Hours of Operation
            </h3>
            <p 
              className="text-xs text-zinc-400 font-light leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Mon — Fri: 10:00 AM – 7:00 PM <br />
              Saturday: By Appointment Only
            </p>
          </div>
        </div>

        {/* Main Section: Form & Map/Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-900 p-6 sm:p-10 space-y-6">
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
                className="p-4 bg-zinc-900 border border-[#D4AF37]/50 text-[#D4AF37] text-xs tracking-wider uppercase text-center font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Thank you. Your message has been sent to our concierge desk.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
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
                    placeholder="Julian Vance"
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs px-4 py-3 outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>

                <div className="space-y-1">
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
                    placeholder="julian@domain.com"
                    className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs px-4 py-3 outline-none transition-colors font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label 
                  className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-zinc-300 text-xs px-4 py-3 outline-none transition-colors font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Watch Sourcing">Watch Sourcing / Special Order</option>
                  <option value="Private Appointment">Schedule Private Appointment</option>
                  <option value="Servicing & Repair">Servicing & Maintenance</option>
                </select>
              </div>

              <div className="space-y-1">
                <label 
                  className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the timepiece or service you are interested in..."
                  className="w-full bg-black border border-zinc-800 focus:border-[#D4AF37] text-white text-xs p-4 outline-none transition-colors font-light resize-none"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-white text-black hover:bg-[#D4AF37] hover:text-black uppercase text-[11px] tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <FaPaperPlane className="text-xs" />
                Submit Message
              </button>
            </form>
          </div>

          {/* Right Column: Atelier Atmosphere Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] border border-zinc-900 bg-zinc-950 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000" 
                alt="Ideal Watches Lounge" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 border border-zinc-800/80 bg-black/80 backdrop-blur-md p-5 text-center">
                <span 
                  className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-light block mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Private Lounge
                </span>
                <p 
                  className="text-base text-white font-light uppercase tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Geneva Showroom & Salon
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span 
              className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block"
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
                className="bg-zinc-950/60 border border-zinc-900 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span 
                    className="text-sm sm:text-base font-light text-zinc-200"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`text-[#D4AF37] text-xs transition-transform duration-300 ${
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