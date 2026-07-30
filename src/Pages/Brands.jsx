import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const featuredBrands = [
  {
    name: "Patek Philippe",
    origin: "Geneva, Switzerland",
    founded: "1839",
    description: "Renowned as the pinnacle of Swiss horology, creating unmatched grand complications and timeless heirlooms.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
    slug: "/brand/patek-philippe"
  },
  {
    name: "Audemars Piguet",
    origin: "Le Brassus, Switzerland",
    founded: "1875",
    description: "Pioneers of avant-garde horology, celebrated for iconic octagonal silhouettes and master finishing.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    slug: "/brand/audemars-piguet"
  },
  {
    name: "Vacheron Constantin",
    origin: "Geneva, Switzerland",
    founded: "1755",
    description: "The world's oldest continuously operating watch manufacturer, embodying classical Swiss mastery.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
    slug: "/brand/vacheron-constantin"
  },
  {
    name: "Rolex",
    origin: "Geneva, Switzerland",
    founded: "1905",
    description: "The global benchmark in robust precision, tool-watch innovation, and timeless status.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
    slug: "/brand/rolex"
  }
];

const allBrandsList = [
  { letter: "A", brands: ["A. Lange & Söhne", "Audemars Piguet"] },
  { letter: "B", brands: ["Breguet", "Breitling", "Blancpain", "Bvlgari"] },
  { letter: "C", brands: ["Cartier", "Chopard"] },
  { letter: "F", brands: ["FP Journe"] },
  { letter: "G", brands: ["Grand Seiko", "Girard-Perregaux"] },
  { letter: "I", brands: ["IWC Schaffhausen"] },
  { letter: "J", brands: ["Jaeger-LeCoultre"] },
  { letter: "O", brands: ["Omega"] },
  { letter: "P", brands: ["Patek Philippe", "Panerai", "Piaget"] },
  { letter: "R", brands: ["Rolex", "Richard Mille"] },
  { letter: "T", brands: ["Tudor", "TAG Heuer"] },
  { letter: "V", brands: ["Vacheron Constantin"] },
  { letter: "Z", brands: ["Zenith"] }
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Brands = () => {
  const [activeLetter, setActiveLetter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = allBrandsList
    .map((group) => {
      // Letter filter check
      if (activeLetter !== "All" && group.letter !== activeLetter) {
        return null;
      }

      // Search query check
      const matchedBrands = group.brands.filter((b) =>
        b.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (matchedBrands.length === 0) return null;

      return {
        letter: group.letter,
        brands: matchedBrands
      };
    })
    .filter(Boolean);

  return (
    <div className="bg-black text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto space-y-20">
        
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-medium block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Swiss & Haute Horlogerie
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Partner Manufactures
          </h1>
          <p 
            className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We curate timepieces from the world’s premier heritage houses and independent haute horlogerie ateliers.
          </p>
        </div>

        {/* Featured Houses Showcase */}
        <div className="space-y-8">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <div>
              <span 
                className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-light block mb-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Holy Trinity & Classics
              </span>
              <h2 
                className="text-2xl sm:text-3xl font-light uppercase text-white tracking-wider"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Featured Houses
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBrands.map((brand, idx) => (
              <Link
                key={idx}
                to={brand.slug}
                className="group relative bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Brand Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <span 
                    className="absolute top-3 right-3 bg-black/80 border border-zinc-800 text-zinc-400 text-[8px] uppercase tracking-widest px-2.5 py-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Estd. {brand.founded}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span 
                      className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {brand.origin}
                    </span>
                    <h3 
                      className="text-2xl font-light text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {brand.name}
                    </h3>
                    <p 
                      className="text-xs text-zinc-400 font-light leading-relaxed"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {brand.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                    <span 
                      className="text-[10px] uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      View Catalog <FaArrowRight className="text-[10px]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Brand Index & Alphabetical Filter */}
        <div className="space-y-10 pt-8 border-t border-zinc-900">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span 
                className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Complete Index
              </span>
              <h2 
                className="text-2xl sm:text-3xl font-light uppercase text-white tracking-wider"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                All Manufactures
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search brand name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-900 focus:border-[#D4AF37] text-xs text-white placeholder:text-zinc-600 pl-4 pr-10 py-2.5 outline-none font-light transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              />
              <FaSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 text-xs" />
            </div>
          </div>

          {/* Alphabet Bar */}
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center border-y border-zinc-900 py-4">
            <button
              onClick={() => setActiveLetter("All")}
              className={`text-[10px] font-mono px-3 py-1.5 uppercase transition-colors ${
                activeLetter === "All"
                  ? "bg-[#D4AF37] text-black font-bold"
                  : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-900"
              }`}
            >
              All
            </button>
            {alphabet.map((char) => {
              const hasBrands = allBrandsList.some((b) => b.letter === char);
              return (
                <button
                  key={char}
                  disabled={!hasBrands}
                  onClick={() => setActiveLetter(char)}
                  className={`text-[10px] font-mono px-2.5 py-1.5 transition-colors ${
                    activeLetter === char
                      ? "bg-[#D4AF37] text-black font-bold"
                      : hasBrands
                      ? "bg-zinc-950 text-zinc-300 hover:text-white border border-zinc-900"
                      : "text-zinc-700 cursor-not-allowed"
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          {/* Brand Grid Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((group, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-zinc-900 p-6 space-y-4">
                  <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                    <span 
                      className="text-2xl font-light text-[#D4AF37]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {group.letter}
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-900" />
                  </div>

                  <ul className="space-y-2">
                    {group.brands.map((bName, i) => (
                      <li key={i}>
                        <Link
                          to={`/brand/${bName.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm font-light text-zinc-300 hover:text-[#D4AF37] transition-colors flex items-center justify-between group/item"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          <span>{bName}</span>
                          <span className="text-[10px] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#D4AF37]">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-zinc-500 font-light text-xs">
                No manufactures found matching your criteria.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Brands;