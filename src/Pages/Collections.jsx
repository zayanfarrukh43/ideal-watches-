import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch, FaSlidersH } from "react-icons/fa";

const collectionsData = [
  {
    id: "complications",
    title: "Grand Complications",
    subtitle: "Masterpieces of Horological Engineering",
    count: 14,
    startingPrice: "$45,000",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
    category: "High Horology",
    description: "Tourbillons, perpetual calendars, and minute repeaters crafted for discerning connoisseurs.",
    slug: "/collections/grand-complications"
  },
  {
    id: "sports-chronographs",
    title: "Sport & Chronographs",
    subtitle: "Precision Built for Performance",
    count: 28,
    startingPrice: "$12,500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    category: "Sport",
    description: "High-grade titanium and steel chronographs engineered for speed, depth, and endurance.",
    slug: "/collections/sports-chronographs"
  },
  {
    id: "dress-watches",
    title: "Ultra-Thin Dress",
    subtitle: "Understated Elegance & Refinement",
    count: 19,
    startingPrice: "$18,000",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
    category: "Classic",
    description: "Sleek profiles in 18k rose gold and platinum tailored for formal attire.",
    slug: "/collections/dress-watches"
  },
  {
    id: "heritage-vintage",
    title: "Heritage & Vintage",
    subtitle: "Iconic Designs Restored to Perfection",
    count: 11,
    startingPrice: "$22,000",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
    category: "Vintage",
    description: "Rare historical references curated and certified by master Swiss restorers.",
    slug: "/collections/heritage-vintage"
  },
  {
    id: "diver-professional",
    title: "Deep Sea Divers",
    subtitle: "Submersible Accuracy Down to 300m",
    count: 22,
    startingPrice: "$9,800",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000",
    category: "Sport",
    description: "Helium escape valves, luminous indicators, and ceramic bezels designed for the deep.",
    slug: "/collections/diver-professional"
  },
  {
    id: "limited-editions",
    title: "Bespoke & Limited Editions",
    subtitle: "Exclusive Atelier Collaborations",
    count: 6,
    startingPrice: "$68,000",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000",
    category: "High Horology",
    description: "Strictly numbered timepieces featuring hand-engraved dials and custom movements.",
    slug: "/collections/limited-editions"
  }
];

const filterCategories = ["All", "High Horology", "Sport", "Classic", "Vintage"];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = collectionsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-medium block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Curated Catalog
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Watch Collections
          </h1>
          <p 
            className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Explore our meticulously categorized portfolio of fine horology, from grand complications to modern sporty chronographs.
          </p>
        </div>

        {/* Featured Collection Hero */}
        <div className="relative border border-zinc-900 bg-zinc-950 overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 z-10">
              <span 
                className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] uppercase tracking-[0.25em] px-3 py-1 font-medium inline-block"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Featured Release
              </span>
              <h2 
                className="text-3xl sm:text-5xl font-light text-white uppercase tracking-wider"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                The Geneva Atelier <br />
                <span className="italic text-zinc-400 font-normal">Private Reserve</span>
              </h2>
              <p 
                className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                An exclusive collection of 10 handcrafted tourbillons created in collaboration with independent Swiss master watchmakers.
              </p>
              <div>
                <Link
                  to="/collections/limited-editions"
                  className="inline-flex items-center gap-3 bg-white text-black hover:bg-[#D4AF37] hover:text-black uppercase text-[10px] tracking-[0.25em] px-8 py-3.5 font-medium transition-all duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Explore Reserve <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000" 
                alt="Geneva Atelier Reserve" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-y border-zinc-900 py-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {filterCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 font-light ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-black border-[#D4AF37] font-medium"
                    : "bg-black text-zinc-400 border-zinc-900 hover:border-zinc-700 hover:text-white"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 focus:border-[#D4AF37] text-xs text-white placeholder:text-zinc-600 pl-4 pr-10 py-2.5 outline-none font-light transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            />
            <FaSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 text-xs" />
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCollections.map((item) => (
            <Link
              key={item.id}
              to={item.slug}
              className="group relative bg-zinc-950/70 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4 bg-black/80 border border-zinc-800 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-widest text-[#D4AF37]">
                  {item.count} Models
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span 
                    className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] block font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.category}
                  </span>
                  <h3 
                    className="text-2xl font-light text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-xs text-zinc-400 font-light leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                  <div>
                    <span 
                      className="text-[9px] uppercase tracking-widest text-zinc-500 block font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      From
                    </span>
                    <span 
                      className="text-sm font-light text-zinc-200"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {item.startingPrice}
                    </span>
                  </div>

                  <span className="text-xs text-[#D4AF37] flex items-center gap-2 uppercase tracking-widest text-[10px] group-hover:translate-x-1 transition-transform">
                    View <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collections;