import React from "react";
import { 
  FaInstagram, 
  FaFacebookF, 
 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcAmex, 
  FaCcApplePay 
} from "react-icons/fa";

const Footer = ({ bgColor = "bg-zinc-950" }) => {
  return (
    <footer className={`${bgColor} text-white border-t border-zinc-900 pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-12 relative overflow-hidden transition-colors duration-300`}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand & Narrative Column */}
          <div className="lg:col-span-4 sm:col-span-2">
            <h3 
              className="text-2xl sm:text-3xl font-light tracking-wider text-white mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              IDEAL WATCHES
            </h3>
            <p 
              className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Curators of high horology and Swiss timekeeping excellence. Handcrafted perfection for the discerning collector.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebookF, href: "#" },
               
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#D4AF37] hover:bg-zinc-800 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="text-xs" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Collections
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {["Tourbillon Series", "Grand Complications", "Minimalist Classic", "Limited Editions", "Ladies Collection"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-zinc-400 hover:text-white text-xs font-light transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {["Private Concierge", "Watch Servicing", "Bespoke Engraving", "Certificate Verification", "Trade-In Program"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-zinc-400 hover:text-white text-xs font-light transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              House of Ideal
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {["Our Heritage", "Swiss Craftsmanship", "Journal & News", "Boutique Finder", "Careers"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-zinc-400 hover:text-white text-xs font-light transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Hours / Contact */}
          <div className="lg:col-span-2">
            <h4 
              className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Concierge
            </h4>
            <div className="space-y-2 text-xs font-light text-zinc-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <p className="text-white font-normal">Geneva Flagship</p>
              <p>Rue du Rhône 42, Switzerland</p>
              <p className="pt-2 text-white font-normal">Private Appointments</p>
              <p>concierge@idealwatches.com</p>
              <p>+41 22 819 9000</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p 
            className="text-[11px] text-zinc-500 font-light uppercase tracking-widest"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © {new Date().getFullYear()} IDEAL Watches. All Rights Reserved.
          </p>

          {/* Payment Badges
          <div className="flex items-center gap-4 text-zinc-600 text-xl">
            <FaCcVisa className="hover:text-zinc-300 transition-colors" />
            <FaCcMastercard className="hover:text-zinc-300 transition-colors" />
            <FaCcAmex className="hover:text-zinc-300 transition-colors" />
            <FaCcApplePay className="hover:text-zinc-300 transition-colors" />
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;