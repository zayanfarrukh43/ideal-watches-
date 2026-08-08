import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch, FaShieldAlt, FaTruck, FaPhoneAlt } from "react-icons/fa";

// Data configured for Pakistani Luxury Horology Market (Values in PKR)
const collectionsData = [
  {
    id: "complications",
    title: "Grand Complications",
    subtitle: "Masterpieces of Horological Engineering",
    count: 14,
    pricePKR: 12500000,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
    category: "High Horology",
    description: "Tourbillons, perpetual calendars, and minute repeaters curated for Pakistani collectors.",
    slug: "/collections/grand-complications"
  },
  {
    id: "sports-chronographs",
    title: "Sport & Chronographs",
    subtitle: "Precision Built for Performance",
    count: 28,
    pricePKR: 3500000,
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
    pricePKR: 5000000,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
    category: "Classic",
    description: "Sleek profiles in 18k rose gold and platinum tailored for formal black-tie events.",
    slug: "/collections/dress-watches"
  },
  {
    id: "heritage-vintage",
    title: "Heritage & Vintage",
    subtitle: "Iconic Designs Restored to Perfection",
    count: 11,
    pricePKR: 6100000,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
    category: "Vintage",
    description: "Rare historical references curated and certified by Geneva master restorers.",
    slug: "/collections/heritage-vintage"
  },
  {
    id: "diver-professional",
    title: "Deep Sea Divers",
    subtitle: "Submersible Accuracy Down to 300m",
    count: 22,
    pricePKR: 2750000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000",
    category: "Sport",
    description: "Helium escape valves, luminous indicators, and ceramic bezels designed for professional diving.",
    slug: "/collections/diver-professional"
  },
  {
    id: "limited-editions",
    title: "Bespoke & Limited Editions",
    subtitle: "Exclusive Atelier Collaborations",
    count: 6,
    pricePKR: 18900000,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000",
    category: "High Horology",
    description: "Strictly numbered timepieces featuring hand-engraved dials and custom mechanical movements.",
    slug: "/collections/limited-editions"
  }
];

const filterCategories = ["All", "High Horology", "Sport", "Classic", "Vintage"];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const formatPrice = (pkr) => {
    return `Rs. ${pkr.toLocaleString("en-PK")}`;
  };

  const filteredCollections = collectionsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0b0b0e] text-zinc-100 min-h-screen py-16 sm:py-24 px-6 lg:px-16 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#c5a880]/10 via-[#c5a880]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span 
            className="text-[#c5a880] uppercase tracking-[0.4em] text-[10px] font-medium block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Pakistan's Premier Vault
          </span>
          <h1 
            className="text-4xl sm:text-6xl font-extralight tracking-[0.2em] uppercase text-zinc-100"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Watch Collections
          </h1>
          <div className="w-12 h-[1px] bg-[#c5a880]/40 mx-auto my-2" />
          <p 
            className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Explore our curated portfolio of fine Swiss timepieces, available with white-glove delivery across Karachi, Lahore, and Islamabad.
          </p>
        </div>

        {/* Featured Collection Hero */}
        <div className="relative rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 backdrop-blur-xl overflow-hidden group shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 space-y-8 z-10">
              <span 
                className="bg-[#c5a880]/10 text-[#c5a880] border border-[#c5a880]/30 text-[9px] uppercase tracking-[0.3em] px-3.5 py-1.5 rounded-full font-medium inline-block"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Exclusive Private Reserve
              </span>

              <h2 
                className="text-3xl sm:text-5xl font-light text-white uppercase tracking-wider leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                The Geneva Atelier <br />
                <span className="italic text-zinc-400 font-normal">Vault Edition</span>
              </h2>

              <p 
                className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Handcrafted Swiss tourbillons imported on demand with full customs clearance and insured VIP delivery to your doorstep.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/collections/limited-editions"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5a880] to-[#e6c687] text-zinc-950 hover:brightness-110 uppercase text-[10px] tracking-[0.25em] px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#c5a880]/10"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Explore Collection <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="https://wa.me/923000000000?text=I%20am%20interested%20in%20the%20Geneva%20Atelier%20Private%20Reserve"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 hover:border-[#c5a880] text-zinc-300 hover:text-white uppercase text-[10px] tracking-[0.2em] px-6 py-4 rounded-full font-medium transition-all duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <FaPhoneAlt className="text-[10px] text-[#c5a880]" /> Concierge Direct
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto h-full min-h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000" 
                alt="Geneva Atelier Reserve" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/30 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-y border-zinc-800/50 py-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {filterCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                  selectedCategory === cat
                    ? "bg-[#c5a880] text-zinc-950 border-[#c5a880] shadow-lg shadow-[#c5a880]/15"
                    : "bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-white"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input (ZOOM FIX APPLIED HERE) */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search watches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800/80 focus:border-[#c5a880]/60 rounded-full text-base sm:text-xs text-white placeholder:text-zinc-500 pl-5 pr-10 py-2.5 outline-none font-light transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <Link
              key={item.id}
              to={item.slug}
              className="group relative bg-zinc-900/30 border border-zinc-800/60 hover:border-[#c5a880]/40 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-[#c5a880]/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-80" />
                
                {/* Count Badge */}
                <div 
                  className="absolute top-4 right-4 bg-zinc-950/80 border border-zinc-800/80 rounded-full backdrop-blur-md px-3.5 py-1 text-[9px] uppercase tracking-widest text-[#c5a880] font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.count} Models
                </div>
              </div>

              {/* Details Content */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span 
                    className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] block font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.category}
                  </span>
                  <h3 
                    className="text-2xl font-light text-white uppercase tracking-wider group-hover:text-[#c5a880] transition-colors"
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
                <div className="pt-5 border-t border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span 
                      className="text-[9px] uppercase tracking-widest text-zinc-500 block font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Starting From
                    </span>
                    <span 
                      className="text-base sm:text-lg font-light text-zinc-100"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {formatPrice(item.pricePKR)}
                    </span>
                  </div>

                  <span 
                    className="text-[#c5a880] flex items-center gap-2 uppercase tracking-widest text-[9px] font-medium group-hover:translate-x-1 transition-transform"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    View <FaArrowRight className="text-[9px]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Localized Luxury Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-800/50 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/40">
            <FaShieldAlt className="text-2xl text-[#c5a880]" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>100% Certified Authentic</h4>
              <p className="text-[11px] text-zinc-500 font-light">Swiss paperwork & international warranty</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/40">
            <FaTruck className="text-2xl text-[#c5a880]" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>Insured Nationwide Transit</h4>
              <p className="text-[11px] text-zinc-500 font-light">Armored delivery across PK major hubs</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/40">
            <FaPhoneAlt className="text-2xl text-[#c5a880]" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>Private Client Concierge</h4>
              <p className="text-[11px] text-zinc-500 font-light">Direct WhatsApp & bank wire assistance</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Collections;