import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFilter, 
  FaTimes, 
  FaShoppingBag, 
  FaHeart, 
  FaRegHeart,
  FaSlidersH 
} from "react-icons/fa";

const BRANDS = ["All", "Rolex", "Omega", "Patek Philippe", "TAG Heuer", "Audemars Piguet", "Cartier", "Tudor"];
const CATEGORIES = ["All", "Diver", "Chronograph", "Dress", "Sports"];
const MOVEMENTS = ["All", "Automatic", "Manual", "Quartz"];

const WatchesPage = () => {
  const navigate = useNavigate();

  // Backend Data States
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wishlist State (Persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("watch_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter & Sort States
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMovement, setSelectedMovement] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync wishlist with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("watch_wishlist", JSON.stringify(wishlist));
    } catch (err) {
      console.error("Failed to save wishlist to localStorage:", err);
    }
  }, [wishlist]);

  // Fetch watches from backend API (Updated to production Vercel URL)
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://backen-watches.vercel.app/api/watches");
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setWatches(result.data);
        } else {
          setError("Failed to retrieve watch collection.");
        }
      } catch (err) {
        console.error("Error fetching watches:", err);
        setError("Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  // Toggle Wishlist Handler
  const toggleWishlist = (e, watchId) => {
    e.stopPropagation(); // Prevents card click navigation
    setWishlist((prevWishlist) =>
      prevWishlist.includes(watchId)
        ? prevWishlist.filter((id) => id !== watchId)
        : [...prevWishlist, watchId]
    );
  };

  // Filter & Sort Logic
  const filteredWatches = useMemo(() => {
    return watches.filter((watch) => {
      const matchBrand = selectedBrand === "All" || watch.brand?.trim().toLowerCase() === selectedBrand.trim().toLowerCase();
      const matchCategory = selectedCategory === "All" || watch.category?.trim().toLowerCase() === selectedCategory.trim().toLowerCase();
      
      const movementVal = watch.specifications?.movement || watch.movement || "";
      const matchMovement = selectedMovement === "All" || movementVal.toLowerCase().includes(selectedMovement.toLowerCase());
      
      const matchPrice = watch.price <= maxPrice;
      return matchBrand && matchCategory && matchMovement && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 4.8) - (a.rating || 4.8);
      return (a._id || a.id)?.localeCompare(b._id || b.id);
    });
  }, [watches, selectedBrand, selectedCategory, selectedMovement, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedMovement("All");
    setMaxPrice(15000000);
    setSortBy("featured");
  };

  if (loading) {
    return (
      <div className="bg-white text-zinc-500 min-h-screen flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em]">
        Loading Horology Collection...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-zinc-800 min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-xs uppercase tracking-widest font-mono text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-xs text-black uppercase tracking-widest border border-zinc-300 px-5 py-2.5 rounded-sm hover:border-[#D4AF37] transition"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Banner Header */}
        <div className="text-center space-y-3 pb-6 border-b border-zinc-200 relative">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Swiss Horology Collection
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Luxury Timepieces
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-2" />

          {/* Wishlist Counter Header Badge */}
          <div className="absolute right-0 top-0 hidden sm:flex items-center gap-2 text-xs text-zinc-600 font-light">
            <FaHeart className={`text-sm ${wishlist.length > 0 ? "text-red-500" : "text-zinc-400"}`} />
            <span>Saved: <strong className="text-zinc-900">{wishlist.length}</strong></span>
          </div>
        </div>

        {/* Toolbar: Mobile Filter Toggle + Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100 text-xs">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-zinc-900 text-white px-4 py-2.5 rounded-sm uppercase tracking-wider font-medium"
          >
            <FaFilter className="text-[#D4AF37]" /> Filter Watches
          </button>

          <p className="text-zinc-500 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Showing <span className="font-semibold text-zinc-900">{filteredWatches.length}</span> timepieces
          </p>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-zinc-500 uppercase tracking-wider text-[11px] hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-50 border border-zinc-200 text-zinc-900 px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37] rounded-sm cursor-pointer"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <option value="featured">Featured Collection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Main Layout: Sidebar + Product Grid */}
        <div className="flex gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-24 bg-zinc-50/60 p-6 border border-zinc-200 rounded-sm">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <FaSlidersH className="text-[#D4AF37]" /> Refine By
              </h3>
              <button 
                onClick={resetFilters} 
                className="text-[10px] text-zinc-400 hover:text-[#D4AF37] uppercase tracking-wider underline transition-colors"
              >
                Reset All
              </button>
            </div>

            {/* Brand Filter */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-medium text-zinc-800 tracking-wider">Brand</h4>
              <div className="space-y-1.5 text-xs text-zinc-600 font-light max-h-48 overflow-y-auto pr-2">
                {BRANDS.map((brand) => (
                  <label key={brand} className="flex items-center gap-2.5 cursor-pointer hover:text-zinc-900 transition-colors">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="accent-[#D4AF37] cursor-pointer"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3 border-t border-zinc-200 pt-6">
              <div className="flex justify-between items-center text-xs">
                <h4 className="uppercase font-medium text-zinc-800 tracking-wider">Max Price</h4>
                <span className="font-semibold text-[#D4AF37]">
                  PKR {(maxPrice / 100000).toFixed(1)} Lakh
                </span>
              </div>
              <input
                type="range"
                min="1000000"
                max="15000000"
                step="500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-3 border-t border-zinc-200 pt-6">
              <h4 className="text-xs uppercase font-medium text-zinc-800 tracking-wider">Category</h4>
              <div className="space-y-1.5 text-xs text-zinc-600 font-light">
                {CATEGORIES.map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 cursor-pointer hover:text-zinc-900 transition-colors">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-[#D4AF37] cursor-pointer"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Movement Filter */}
            <div className="space-y-3 border-t border-zinc-200 pt-6">
              <h4 className="text-xs uppercase font-medium text-zinc-800 tracking-wider">Movement</h4>
              <div className="space-y-1.5 text-xs text-zinc-600 font-light">
                {MOVEMENTS.map((mov) => (
                  <label key={mov} className="flex items-center gap-2.5 cursor-pointer hover:text-zinc-900 transition-colors">
                    <input
                      type="radio"
                      name="movement"
                      checked={selectedMovement === mov}
                      onChange={() => setSelectedMovement(mov)}
                      className="accent-[#D4AF37] cursor-pointer"
                    />
                    <span>{mov}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <div className="flex-1">
            {filteredWatches.length === 0 ? (
              <div className="text-center py-20 space-y-4 bg-zinc-50 border border-zinc-200 rounded-sm">
                <p className="text-zinc-500 text-sm font-light">No watches match your selected filter criteria.</p>
                <button
                  onClick={resetFilters}
                  className="bg-zinc-900 hover:bg-[#D4AF37] text-white text-xs uppercase tracking-widest px-6 py-2.5 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWatches.map((watch) => {
                  const watchId = watch._id || watch.id;
                  const isWishlisted = wishlist.includes(watchId);
                  
                  const watchImage = watch.images?.[0]?.url || watch.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";
                  const watchTag = watch.isBestSeller ? "Best Seller" : (watch.tag || watch.category);
                  const movementType = watch.specifications?.movement || watch.movement || "Automatic";

                  return (
                    <motion.div
                      key={watchId}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => navigate(`/product/${watchId}`)}
                      className="group bg-white border border-zinc-200 rounded-sm overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col cursor-pointer shadow-xs hover:shadow-md"
                    >
                      {/* Watch Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-zinc-100">
                        <img
                          src={watchImage}
                          alt={watch.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Tag Badge */}
                        {watchTag && (
                          <span className="absolute top-3 left-3 bg-zinc-900/90 text-[#D4AF37] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs">
                            {watchTag}
                          </span>
                        )}

                        {/* Interactive Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(e, watchId)}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 shadow-sm z-10"
                        >
                          {isWishlisted ? (
                            <FaHeart className="text-xs text-red-500 transition-colors" />
                          ) : (
                            <FaRegHeart className="text-xs text-zinc-600 hover:text-red-500 transition-colors" />
                          )}
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1">
                          <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest block font-semibold">
                            {watch.brand}
                          </span>
                          <h3 
                            className="text-base font-normal text-zinc-900 line-clamp-1 group-hover:text-[#D4AF37] transition-colors"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            {watch.name}
                          </h3>
                          <p className="text-[11px] text-zinc-400 font-light">
                            {movementType} • {watch.category}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                          <div>
                            <p className="text-[9px] text-zinc-400 uppercase tracking-wider">Price</p>
                            <p className="text-sm font-semibold text-zinc-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                              PKR {watch.price?.toLocaleString()}
                            </p>
                          </div>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/product/${watchId}`);
                            }} 
                            className="bg-zinc-900 hover:bg-[#D4AF37] text-white w-9 h-9 rounded-sm flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <FaShoppingBag className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                    <FaSlidersH className="text-[#D4AF37]" /> Filter Collection
                  </h3>
                  <button 
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-2 text-zinc-500 hover:text-zinc-900"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Mobile Brands */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-medium text-zinc-800 tracking-wider">Brand</h4>
                  <div className="space-y-2 text-xs text-zinc-600">
                    {BRANDS.map((brand) => (
                      <label key={brand} className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-brand"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(brand)}
                          className="accent-[#D4AF37]"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Price */}
                <div className="space-y-3 border-t border-zinc-200 pt-4">
                  <div className="flex justify-between items-center text-xs">
                    <h4 className="uppercase font-medium text-zinc-800 tracking-wider">Max Price</h4>
                    <span className="font-semibold text-[#D4AF37]">PKR {(maxPrice / 100000).toFixed(1)} Lakh</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="15000000"
                    step="500000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#D4AF37]"
                  />
                </div>

                {/* Mobile Categories */}
                <div className="space-y-3 border-t border-zinc-200 pt-4">
                  <h4 className="text-xs uppercase font-medium text-zinc-800 tracking-wider">Category</h4>
                  <div className="space-y-2 text-xs text-zinc-600">
                    {CATEGORIES.map((cat) => (
                      <label key={cat} className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-[#D4AF37]"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200 flex gap-3">
                <button
                  onClick={resetFilters}
                  className="flex-1 border border-zinc-300 text-zinc-800 py-2.5 text-xs uppercase tracking-wider rounded-sm"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 bg-zinc-900 text-white py-2.5 text-xs uppercase tracking-wider rounded-sm"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchesPage;