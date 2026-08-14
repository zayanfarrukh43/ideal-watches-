import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag, FaFilter, FaTimes, FaSlidersH } from "react-icons/fa";
import { useCart } from "../Component/context/CartContext";

const API_BASE_URL = "https://backen-watches.vercel.app";

const BrandCollection = () => {
  const { brandName } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Backend Data States
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter States
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedStrap, setSelectedStrap] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [sortBy, setSortBy] = useState("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Convert "michael-kors" -> "MICHAEL KORS" for the title
  const formattedBrandTitle = decodeURIComponent(brandName || "").replace(/-/g, " ");

  // Fetch watches from production backend API on mount
  useEffect(() => {
    const fetchBrandWatches = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/watches`);
        
        if (!response.ok) {
          throw new Error("Failed to connect to the watch collection server.");
        }

        const result = await response.json();

        let items = [];
        if (Array.isArray(result)) {
          items = result;
        } else if (result.success && Array.isArray(result.data)) {
          items = result.data;
        } else if (Array.isArray(result.products)) {
          items = result.products;
        }

        setWatches(items);
      } catch (err) {
        console.error("Error fetching watches:", err);
        setError("Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchBrandWatches();
  }, []);

  // STRICT FILTERING: Match products whose brand slug matches the URL brand slug exactly
  const brandProducts = useMemo(() => {
    const currentSlug = (brandName || "").toLowerCase().trim();

    return watches.filter((product) => {
      const productBrandStr = product.brand || product.brandName || "";
      const productBrandSlug = productBrandStr.toLowerCase().trim().replace(/\s+/g, "-");
      
      const isExactBrand = productBrandSlug === currentSlug;
      
      const productGender = product.gender || product.category || "Unisex";
      const matchesGender = selectedGender === "All" || productGender.toLowerCase() === selectedGender.toLowerCase();
      
      const productStrap = product.strap || product.specifications?.strap || "Leather";
      const matchesStrap = selectedStrap === "All" || productStrap.toLowerCase().includes(selectedStrap.toLowerCase());
      
      const matchesPrice = (Number(product.price) || 0) <= maxPrice;

      return isExactBrand && matchesGender && matchesStrap && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);
      return 0;
    });
  }, [watches, brandName, selectedGender, selectedStrap, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedGender("All");
    setSelectedStrap("All");
    setMaxPrice(15000000);
    setSortBy("default");
  };

  // Helper function to robustly extract image URLs matching backend standards
  const renderImage = (imageSource) => {
    if (!imageSource || imageSource.length === 0) {
      return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";
    }
    if (Array.isArray(imageSource)) {
      return imageSource[0]?.url || imageSource[0];
    }
    return imageSource.url || imageSource;
  };

  if (loading) {
    return (
      <div className="bg-white text-zinc-500 min-h-screen flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em]">
        Loading {formattedBrandTitle} Collection...
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
    <div className="bg-white text-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-widest transition-colors mb-3"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <h1 
              className="text-3xl sm:text-5xl font-light tracking-wide text-gray-900 uppercase"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {formattedBrandTitle} <span className="text-[#D4AF37]">Collection</span>
            </h1>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {brandProducts.length} Timepiece{brandProducts.length !== 1 ? "s" : ""} Found
            </span>

            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-black text-white text-xs font-semibold rounded-sm flex items-center gap-2 uppercase tracking-wider"
            >
              <FaFilter /> Filters
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block space-y-6 pr-6 border-r border-gray-200 sticky top-24 bg-gray-50/50 p-6 rounded-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <FaSlidersH className="text-[#D4AF37]" /> Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-[11px] text-gray-500 hover:text-black underline tracking-wider"
              >
                Reset All
              </button>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-sm p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Gender / Category
              </label>
              <div className="space-y-1.5 text-xs text-gray-600 font-light">
                {["All", "Men", "Women", "Unisex"].map((gender) => (
                  <label key={gender} className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedGender === gender}
                      onChange={() => setSelectedGender(gender)}
                      className="accent-[#D4AF37] cursor-pointer"
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Strap Filter */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Strap Material
              </label>
              <div className="space-y-1.5 text-xs text-gray-600 font-light">
                {["All", "Leather", "Stainless Steel", "Rubber", "Mesh"].map((strap) => (
                  <label key={strap} className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                    <input
                      type="radio"
                      name="strap"
                      checked={selectedStrap === strap}
                      onChange={() => setSelectedStrap(strap)}
                      className="accent-[#D4AF37] cursor-pointer"
                    />
                    <span>{strap}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price Range */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-xs text-gray-700 font-semibold uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span>Max Price</span>
                <span className="text-[#D4AF37]">PKR {(maxPrice / 100000).toFixed(1)} Lakh</span>
              </div>
              <input
                type="range"
                min="100000"
                max="15000000"
                step="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {brandProducts.length === 0 ? (
              <div className="text-center py-24 bg-gray-50 rounded-sm border border-gray-200 space-y-4">
                <p className="text-base font-medium text-gray-700 uppercase tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  No products available for {formattedBrandTitle} right now.
                </p>
                <p className="text-xs text-gray-400 font-light">
                  Please check back later or explore our other luxury collections.
                </p>
                <Link
                  to="/watches"
                  className="inline-block mt-2 px-6 py-3 bg-black text-white text-xs font-semibold rounded-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  Explore All Watches
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {brandProducts.map((product) => {
                  const productId = product._id || product.id;
                  const productImage = renderImage(product.images || product.image);
                  const productStrap = product.strap || product.specifications?.strap || "Luxury Strap";
                  const productGender = product.gender || product.category || "Unisex";

                  return (
                    <div
                      key={productId}
                      onClick={() => navigate(`/product/${productId}`)}
                      className="group bg-white border border-gray-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative w-full aspect-square bg-gray-50 rounded-sm p-4 flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={productImage}
                          alt={product.name}
                          className="max-h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                          {productStrap} • {productGender}
                        </span>
                        <h3 
                          className="text-base font-normal text-gray-900 truncate group-hover:text-[#D4AF37] transition-colors"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          PKR {(product.price || 0).toLocaleString()}
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart && addToCart(product);
                          }}
                          className="w-full mt-2 py-2.5 bg-gray-900 hover:bg-[#D4AF37] text-white hover:text-black rounded-sm text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 font-medium cursor-pointer"
                        >
                          <FaShoppingBag className="text-xs" /> Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filter Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end lg:hidden">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 space-y-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 text-lg cursor-pointer">
                <FaTimes />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-sm p-2.5 text-xs cursor-pointer"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-100">
              <label className="text-xs font-semibold uppercase text-gray-700">Max Price</label>
              <input
                type="range"
                min="100000"
                max="15000000"
                step="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <p className="text-xs text-[#D4AF37] font-semibold text-right">PKR {(maxPrice / 100000).toFixed(1)} Lakh</p>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-black text-white rounded-sm text-xs uppercase font-semibold tracking-wider hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCollection;