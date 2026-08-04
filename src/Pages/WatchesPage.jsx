import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFilter, 
  FaTimes, 
  FaShoppingBag, 
  FaHeart, 
  FaRegHeart,
  FaSlidersH 
} from "react-icons/fa";

const INITIAL_WATCHES = [
  {
    id: 1,
    name: "Submariner Date 41mm",
    brand: "Rolex",
    category: "Diver",
    price: 3450000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller",
    movement: "Automatic",
  },
  {
    id: 2,
    name: "Speedmaster Professional Moonwatch",
    brand: "Omega",
    category: "Chronograph",
    price: 1850000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    tag: "Iconic",
    movement: "Manual",
  },
  {
    id: 3,
    name: "Nautilus Self-Winding 5711",
    brand: "Patek Philippe",
    category: "Dress",
    price: 12500000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop",
    tag: "Rare Edition",
    movement: "Automatic",
  },
  {
    id: 4,
    name: "Carrera Calibre Heuer 02",
    brand: "TAG Heuer",
    category: "Sports",
    price: 1150000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
    tag: "New Arrival",
    movement: "Automatic",
  },
  {
    id: 5,
    name: "Royal Oak Selfwinding 41mm",
    brand: "Audemars Piguet",
    category: "Sports",
    price: 8900000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    tag: "Limited",
    movement: "Automatic",
  },
  {
    id: 6,
    name: "Seamaster Diver 300M Co-Axial",
    brand: "Omega",
    category: "Diver",
    price: 1450000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    tag: "Popular",
    movement: "Automatic",
  },
];

const BRANDS = ["All", "Rolex", "Omega", "Patek Philippe", "TAG Heuer", "Audemars Piguet"];
const CATEGORIES = ["All", "Diver", "Chronograph", "Dress", "Sports"];
const MOVEMENTS = ["All", "Automatic", "Manual", "Quartz"];

const WatchesPage = () => {
  // Wishlist State (Stores Array of Watch IDs)
  const [wishlist, setWishlist] = useState([]);

  // Filter & Sort States
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMovement, setSelectedMovement] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Toggle Wishlist Handler
  const toggleWishlist = (watchId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(watchId)
        ? prevWishlist.filter((id) => id !== watchId)
        : [...prevWishlist, watchId]
    );
  };

  // Filter & Sort Logic
  const filteredWatches = useMemo(() => {
    return INITIAL_WATCHES.filter((watch) => {
      const matchBrand = selectedBrand === "All" || watch.brand === selectedBrand;
      const matchCategory = selectedCategory === "All" || watch.category === selectedCategory;
      const matchMovement = selectedMovement === "All" || watch.movement === selectedMovement;
      const matchPrice = watch.price <= maxPrice;
      return matchBrand && matchCategory && matchMovement && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [selectedBrand, selectedCategory, selectedMovement, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedMovement("All");
    setMaxPrice(15000000);
    setSortBy("featured");
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
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
          <div className="absolute right-0 top-0 flex items-center gap-2 text-xs text-zinc-600 font-light">
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
              <div className="space-y-1.5 text-xs text-zinc-600 font-light">
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
                  const isWishlisted = wishlist.includes(watch.id);

                  return (
                    <motion.div
                      key={watch.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white border border-zinc-200 rounded-sm overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col"
                    >
                      {/* Watch Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-zinc-100">
                        <img
                          src={watch.image}
                          alt={watch.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Tag Badge */}
                        <span className="absolute top-3 left-3 bg-zinc-900/90 text-[#D4AF37] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs">
                          {watch.tag}
                        </span>

                        {/* Interactive Wishlist Button */}
                        <button
                          onClick={() => toggleWishlist(watch.id)}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 shadow-sm"
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
                            {watch.movement} • {watch.category}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                          <div>
                            <p className="text-xs text-zinc-400 uppercase tracking-wider text-[9px]">Price</p>
                            <p className="text-sm font-semibold text-zinc-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                              PKR {watch.price.toLocaleString()}
                            </p>
                          </div>
                          
                          {/* Quick Add Button */}
                          <button className="bg-zinc-900 hover:bg-[#D4AF37] text-white w-9 h-9 rounded-sm flex items-center justify-center transition-colors cursor-pointer">
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
    </div>
  );
};

export default WatchesPage;