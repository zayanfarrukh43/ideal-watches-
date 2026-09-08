import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch, FaShieldAlt, FaTruck, FaWhatsapp, FaClock } from "react-icons/fa";

const WHATSAPP_NUMBER = "923162839665";
const API_BASE_URL = "https://backen-watches.vercel.app";

const Collections = () => {
  // Backend Data States
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch both watches and straps on mount
  useEffect(() => {
    const fetchVaultCollections = async () => {
      try {
        setLoading(true);

        const [watchesRes, strapsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/watches`),
          fetch(`${API_BASE_URL}/api/watch-straps`)
        ]);

        const watchesResult = await watchesRes.json();
        const strapsResult = await strapsRes.json();

        let mergedVault = [];

        // Normalize and tag Watches
        if (watchesResult.success && Array.isArray(watchesResult.data)) {
          const formattedWatches = watchesResult.data.map((w) => ({
            ...w,
            itemType: "watch",
            categoryTag: w.category || w.gender || "Complications"
          }));
          mergedVault = [...mergedVault, ...formattedWatches];
        }

        // Normalize and tag Watch Straps
        if (strapsResult.success && Array.isArray(strapsResult.data)) {
          const formattedStraps = strapsResult.data.map((s) => ({
            ...s,
            itemType: "strap",
            categoryTag: s.strapType ? `${s.strapType} Strap` : "Straps & Accessories"
          }));
          mergedVault = [...mergedVault, ...formattedStraps];
        }

        if (mergedVault.length > 0) {
          setItems(mergedVault);
        } else {
          setError("Failed to retrieve watch collections & straps.");
        }
      } catch (err) {
        console.error("Error fetching vault collections:", err);
        setError("Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchVaultCollections();
  }, []);

  // Dynamically extract unique category tags + "All Items"
  const categories = ["All Items", ...new Set(items.map((i) => i.categoryTag))];

  const formatPrice = (pkr) => {
    return `PKR ${(pkr || 0).toLocaleString("en-PK")}`;
  };

  const getWhatsAppLink = (itemTitle) => {
    const text = itemTitle 
      ? `Hello, I am inquiring about availability and details for the ${itemTitle}.` 
      : "Hello, I would like to speak with a Swiss watch specialist.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Filter items based on selected category and search query
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Items" ||
      item.categoryTag.toLowerCase() === selectedCategory.toLowerCase();

    const itemName = item.name || item.title || "";
    const itemDesc = item.description || "";
    const matchesSearch =
      itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      itemDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="bg-[#050507] text-zinc-500 min-h-screen flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em]">
        Accessing Swiss Horology Vault & Straps...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#050507] text-zinc-300 min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-xs uppercase tracking-widest font-mono text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-xs text-[#c5a880] uppercase tracking-widest border border-zinc-800 px-5 py-2.5 rounded-sm hover:border-[#c5a880] transition"
        >
          Retry Vault Connection
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#050507] text-zinc-100 min-h-screen py-10 sm:py-16 px-4 sm:px-8 lg:px-12 selection:bg-[#c5a880]/20 selection:text-[#c5a880]">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[#c5a880] tracking-[0.3em] uppercase text-[10px] font-medium block">
            Swiss Horology Vault
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-wide text-zinc-100 uppercase"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Watch & Strap Collections
          </h1>
          <p className="text-zinc-400 text-xs font-light max-w-md mx-auto leading-relaxed pt-1">
            Certified mechanical timepieces, custom straps, tourbillons, and horological accessories inspected by master watchmakers.
          </p>
        </div>

        {/* Featured Hero Banner */}
        {items.length > 0 && (
          <div className="relative border border-zinc-800/80 bg-zinc-950 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 space-y-5 z-10">
                <span className="text-[#c5a880] text-[9px] tracking-[0.25em] uppercase font-medium block">
                  Swiss Caliber Spotlight
                </span>
                <h2 
                  className="text-2xl sm:text-4xl font-light text-white uppercase tracking-wide leading-tight"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {items[0].name || items[0].title}
                </h2>

                <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                  {items[0].description || "Hand-assembled mechanical movements featuring high precision standards and sophisticated complications."}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to={`/product/${items[0]._id || items[0].id}`}
                    className="inline-flex items-center gap-2 text-zinc-950 bg-[#c5a880] hover:bg-[#b89a70] uppercase text-[10px] tracking-[0.2em] px-5 py-3 font-semibold transition-colors"
                  >
                    View Details <FaArrowRight className="text-[8px]" />
                  </Link>

                  <a
                    href={getWhatsAppLink(items[0].name || items[0].title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 uppercase text-[10px] tracking-[0.2em] px-5 py-3 font-medium transition-colors"
                  >
                    <FaWhatsapp className="text-sm text-emerald-400" /> WhatsApp Specialist
                  </a>
                </div>
              </div>

              {/* Feature Image */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-auto h-full min-h-[280px] bg-black overflow-hidden">
                <img 
                  src={items[0].images?.[0]?.url || items[0].image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000"} 
                  alt={items[0].name || "Horology"} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent lg:hidden" />
              </div>

            </div>
          </div>
        )}

        {/* Category Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors relative py-1 ${
                  selectedCategory === cat
                    ? "text-[#c5a880] font-medium"
                    : "text-zinc-500 hover:text-zinc-300 font-light"
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]" />
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <input
              type="text"
              placeholder="Search timepieces & straps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-800 focus:border-[#c5a880] text-xs text-white placeholder:text-zinc-600 pr-6 py-1 outline-none font-light transition-colors"
            />
            <FaSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Products & Straps Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-zinc-950/40 border border-zinc-800/60 rounded-sm space-y-3">
            <p className="text-sm font-light text-zinc-300 uppercase tracking-wider">
              No timepieces or straps found in this category.
            </p>
            <p className="text-xs text-zinc-500">
              Try selecting a different filter or clearing your search query.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const itemId = item._id || item.id;
              const itemImage = item.images?.[0]?.url || item.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000";
              const itemTitle = item.name || item.title;
              const itemCategory = item.categoryTag;
              const itemSpec = item.strap || item.strapType || item.specifications?.strap || (item.itemType === "strap" ? "Handcrafted Strap" : "Automatic Movement");

              return (
                <div
                  key={itemId}
                  className="group flex flex-col justify-between bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
                >
                  <div>
                    {/* Image Link */}
                    <Link to={`/product/${itemId}`} className="block relative aspect-[4/3] overflow-hidden bg-black">
                      <img 
                        src={itemImage} 
                        alt={itemTitle} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                      
                      <span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest text-zinc-400 font-light bg-zinc-950/90 px-2 py-0.5 border border-zinc-800/80 flex items-center gap-1">
                        <FaClock className="text-[8px] text-[#c5a880]" /> {item.itemType === "strap" ? "Strap & Accessory" : "Swiss Certified"}
                      </span>
                    </Link>

                    {/* Specs & Description */}
                    <div className="p-6 space-y-2.5">
                      <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em]">
                        <span className="text-[#c5a880] font-medium">{itemCategory}</span>
                        <span className="text-zinc-500 font-light truncate max-w-[150px]">{itemSpec}</span>
                      </div>

                      <Link to={`/product/${itemId}`}>
                        <h3 
                          className="text-xl font-light text-zinc-100 uppercase tracking-wide group-hover:text-[#c5a880] transition-colors truncate"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {itemTitle}
                        </h3>
                      </Link>

                      <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
                        {item.description || "Exquisite horological piece crafted with precision and luxury standards."}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-zinc-900 mx-6 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-zinc-500 block font-light">Price</span>
                      <span className="text-zinc-200 font-light tracking-wide">{formatPrice(item.price)}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={getWhatsAppLink(itemTitle)}
                        target="_blank"
                        rel="noreferrer"
                        title="Inquire on WhatsApp"
                        className="p-2 border border-zinc-800 hover:border-emerald-500/50 bg-zinc-900/50 text-zinc-400 hover:text-emerald-400 transition-colors rounded-full"
                      >
                        <FaWhatsapp className="text-sm" />
                      </a>

                      <Link
                        to={`/product/${itemId}`}
                        className="text-[#c5a880] text-[10px] uppercase tracking-widest font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        View <FaArrowRight className="text-[8px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Watchmaking Authenticity Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-zinc-800/60">
          <div className="flex items-center gap-3.5 p-4 border border-zinc-800/40 bg-zinc-950/50">
            <FaShieldAlt className="text-base text-[#c5a880] shrink-0" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-200 font-medium">Geneva Seal & Papers</h4>
              <p className="text-[11px] text-zinc-500 font-light">Certified movement origin & warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 border border-zinc-800/40 bg-zinc-950/50">
            <FaTruck className="text-base text-[#c5a880] shrink-0" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-200 font-medium">Armored Watch Transport</h4>
              <p className="text-[11px] text-zinc-500 font-light">Insured door-to-door delivery</p>
            </div>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 p-4 border border-emerald-500/20 bg-emerald-950/10 hover:border-emerald-500/40 transition-colors group"
          >
            <FaWhatsapp className="text-lg text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-200 font-medium group-hover:text-emerald-300 transition-colors">WhatsApp Horology Desk</h4>
              <p className="text-[11px] text-zinc-500 font-light">Private watchmaker consultations</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Collections;