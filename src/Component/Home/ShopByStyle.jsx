import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Local image imports from src/assets/Brands
import leatherImg from "../../assets/Brands/leatherstrap.webp";
import meshImg from "../../assets/Brands/mesh.webp";

// Add paths for stainless and rubber when you add those assets to the folder
import stainlessImg from "../../assets/Brands/steelnessstain.webp"; // Temporary fallback or replace with your stainless asset
import rubberImg from "../../assets/Brands/rubber.webp";    // Temporary fallback or replace with your rubber asset

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
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-12 border-y border-zinc-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span 
            className="text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-medium block mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Curated Collections
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Shop By Style
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="relative bg-[#08080a] border border-zinc-800/80 hover:border-zinc-700 transition-all duration-500 flex flex-col items-center justify-between p-8 sm:p-10 h-[480px] overflow-hidden"
              >
                {/* Radial Glow Highlight */}
                <div className="absolute inset-0 bg-radial from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Display Area */}
                <div className="relative w-full flex-1 flex items-center justify-center my-4">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="max-h-[220px] max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                  />
                </div>

                {/* Text Label Section */}
                <div className="text-center w-full z-10 pt-6 border-t border-zinc-900 group-hover:border-zinc-800 transition-colors duration-300">
                  <p 
                    className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-light mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {style.subtitle}
                  </p>
                  <h3
                    className="text-xl font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300"
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