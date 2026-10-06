import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Local image imports from src/assets/Brands
import leatherImg from "../../assets/Brands/leatherstrap.png";
import meshImg from "../../assets/Brands/mesh.png";
import stainlessImg from "../../assets/Brands/steelnessstain.png"; 
import rubberImg from "../../assets/Brands/rubber.png"; 

const stylesList = [
  {
    id: "leather",
    subtitle: "CLASSIC HOROLOGY",
    title: "Leather Strap",
    categoryQuery: "Leather Strap",
    image: leatherImg,
  },
  {
    id: "stainless",
    subtitle: "TIMELESS ARCHITECTURE",
    title: "Stainless Steel",
    categoryQuery: "Stainless Steel",
    image: stainlessImg,
  },
  {
    id: "mesh",
    subtitle: "MODERN PRECISION",
    title: "Mesh Strap",
    categoryQuery: "Mesh Strap",
    image: meshImg,
  },
  {
    id: "rubber",
    subtitle: "SPORT & PERFORMANCE",
    title: "Rubber Strap",
    categoryQuery: "Rubber Strap",
    image: rubberImg,
  },
];

const ShopByStyle = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-3 sm:px-6 lg:px-12 border-y border-zinc-200 text-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span 
            className="text-[#B8901F] text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-bold block mb-2 sm:mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Curated Collections
          </span>
          <h2
            className="text-2xl sm:text-5xl font-bold tracking-widest uppercase text-black"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Shop By Style
          </h2>
        </div>

        {/* Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stylesList.map((style, index) => (
            <Link 
              key={style.id} 
              to={`/collections?category=${encodeURIComponent(style.categoryQuery)}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-500 flex flex-col items-center justify-between p-4 sm:p-8 lg:p-10 h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden"
              >
                {/* Radial Glow Highlight */}
                <div className="absolute inset-0 bg-radial from-zinc-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Display Area */}
                <div className="relative w-full flex-1 flex items-center justify-center my-2 sm:my-4">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="max-h-[130px] sm:max-h-[180px] lg:max-h-[220px] max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                  />
                </div>

                {/* Text Label Section */}
                <div className="text-center w-full z-10 pt-3 sm:pt-6 border-t border-zinc-200 group-hover:border-zinc-300 transition-colors duration-300">
                  <p 
                    className="text-[7.5px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-700 font-semibold mb-1 group-hover:text-[#B8901F] transition-colors duration-300 truncate"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {style.subtitle}
                  </p>
                  <h3
                    className="text-sm sm:text-lg lg:text-xl font-semibold tracking-wide text-zinc-900 group-hover:text-black transition-colors duration-300 truncate"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {style.title}
                  </h3>
                </div>

                {/* Gold Bottom Border Highlight on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByStyle;