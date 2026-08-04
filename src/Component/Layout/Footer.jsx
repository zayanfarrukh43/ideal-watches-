import React from "react";
import { Link } from "react-router-dom";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa, 
  FaCcMastercard,
  FaTruck,
  FaMoneyBillWave
} from "react-icons/fa";

const Footer = ({ bgColor = "bg-zinc-950" }) => {
  // Collections Links Configuration
  const collectionLinks = [
    { label: "Men's Luxury Watches", path: "/collections/mens" },
    { label: "Ladies Elegance", path: "/collections/ladies" },
    { label: "Automatic Chronographs", path: "/collections/automatic" },
    { label: "Minimalist Series", path: "/collections/minimalist" },
    { label: "Couple Editions", path: "/collections/couples" }
  ];

  // Customer Care Links Configuration
  const customerCareLinks = [
    { label: "Cash on Delivery Policy", path: "/cod-policy" },
    { label: "Order Tracking", path: "/track-order" },
    { label: "Warranty & Servicing", path: "/warranty" },
    { label: "7-Day Return Policy", path: "/returns" },
    { label: "Authenticity Guarantee", path: "/authenticity" }
  ];

  return (
    <footer className={`${bgColor} text-white border-t border-zinc-900 pt-14 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-12 relative overflow-hidden transition-colors duration-300 font-sans`}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand & Narrative Column */}
          <div className="lg:col-span-4 sm:col-span-2 space-y-4">
            <Link to="/">
              <h3 
                className="text-2xl sm:text-3xl font-light tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-200"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                IDEAL WATCHES
              </h3>
            </Link>
            
            <p 
              className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Pakistan’s premier destination for authentic luxury timepieces. Delivering certified original watches across Karachi, Lahore, Islamabad, and nationwide.
            </p>

            {/* Social Icons & WhatsApp Quick Connect */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaInstagram, href: "https://instagram.com/idealwatches.pk", label: "Instagram" },
                { icon: FaFacebookF, href: "https://facebook.com/idealwatches.pk", label: "Facebook" },
                { icon: FaWhatsapp, href: "https://wa.me/923001234567", label: "WhatsApp" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-zinc-900 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="text-xs" />
                  </a>
                );
              })}
            </div>

            {/* Delivery Badge for Pakistan */}
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <FaTruck className="text-[#D4AF37]" />
              <span>Insured Free Express Delivery across Pakistan</span>
            </div>
          </div>

          {/* Quick Links Column 1: Collections */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Collections
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {collectionLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="text-zinc-400 hover:text-[#D4AF37] text-xs font-light transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2: Customer Care */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Customer Care
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {customerCareLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="text-zinc-400 hover:text-[#D4AF37] text-xs font-light transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 3: Flagship Boutiques */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Boutiques
            </h4>
            <div className="space-y-3 text-xs font-light text-zinc-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <Link to="/boutiques/karachi" className="block group">
                <p className="text-white font-normal flex items-center gap-1.5 group-hover:text-[#D4AF37] transition-colors">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-[10px]" /> Karachi
                </p>
                <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400">Dolmen Mall Clifton, Level 1</p>
              </Link>
            </div>
          </div>

          {/* Direct Contact / Support Column */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Concierge
            </h4>
            <div className="space-y-2.5 text-xs font-light text-zinc-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <a href="tel:+9221111000888" className="flex items-center gap-2 text-zinc-300 hover:text-[#D4AF37] transition-colors">
                <FaPhoneAlt className="text-[#D4AF37] text-[10px]" />
                <span>+92 (021) 111-000-888</span>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors">
                <FaWhatsapp className="text-emerald-500 text-xs" />
                <span>+92 300 1234567</span>
              </a>
              <a href="mailto:support@idealwatches.pk" className="flex items-center gap-2 text-zinc-300 hover:text-[#D4AF37] transition-colors">
                <FaEnvelope className="text-[#D4AF37] text-[10px]" />
                <span>support@idealwatches.pk</span>
              </a>
              <p className="pt-2 text-[10px] text-zinc-500">
                Mon - Sat: 11:00 AM - 9:00 PM (PKT)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <p 
              className="text-[11px] text-zinc-500 font-light uppercase tracking-widest"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              © {new Date().getFullYear()} IDEAL Watches Pakistan. All Rights Reserved.
            </p>
            <p className="text-[10px] text-zinc-600">
              Prices displayed in PKR (Pakistani Rupee) inclusive of all local taxes.
            </p>
          </div>

          {/* Local Pakistani Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800/80">
            <Link to="/cod-policy" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              <FaMoneyBillWave /> Cash on Delivery
            </Link>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <FaCcVisa className="text-base text-blue-400" />
              <FaCcMastercard className="text-base text-orange-400" />
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-300 font-medium text-[10px] uppercase tracking-wider">
              Bank Transfer / Raast
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;