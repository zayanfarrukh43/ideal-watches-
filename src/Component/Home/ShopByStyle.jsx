import React from "react";
import { motion } from "framer-motion";

const styles = [
  {
    id: 1,
    title: "Leather Strap",
    subtitle: "Classic Horology",
    // Clean transparent PNG watch reference
    image: "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-luxury-gold-watch-png-image_6702741.png",
  },
  {
    id: 2,
    title: "Stainless Steel",
    subtitle: "Timeless Architecture",
    image: "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-silver-luxury-watch-png-image_6702740.png",
  },
  {
    id: 3,
    title: "Mesh Strap",
    subtitle: "Modern Precision",
    image: "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-black-luxury-watch-png-image_6702738.png",
  },
  {
    id: 4,
    title: "Rubber Strap",
    subtitle: "Sport & Performance",
    image: "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-luxury-sports-watch-png-image_6702739.png",
  },
];

const ShopByStyle = () => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-12 border-y border-zinc-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Minimal Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span 
            className="text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-medium block mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Curated Collections
          </span>
          <h2
            className="text-2xl sm:text-4xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Shop By Style
          </h2>
        </div>

        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-between p-6 sm:p-8 bg-zinc-950/60 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 cursor-pointer"
            >
              {/* Radial Highlight Behind Watch */}
              <div className="absolute inset-0 bg-radial from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Watch Display Area */}
              <div className="relative w-full aspect-square flex items-center justify-center my-4">
                <img
                  src={style.image}
                  alt={style.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                />
              </div>

              {/* Minimal Text Label */}
              <div className="text-center w-full z-10 pt-4 border-t border-zinc-900/80 group-hover:border-zinc-800 transition-colors duration-300">
                <p 
                  className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-light mb-1 group-hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {style.subtitle}
                </p>
                <h3
                  className="text-base sm:text-lg font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {style.title}
                </h3>
              </div>

              {/* Ultra-subtle Bottom Line Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-1/2 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByStyle;