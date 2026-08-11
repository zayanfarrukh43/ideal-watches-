import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag, FaFilter, FaTimes } from "react-icons/fa";
import { useCart } from "../Component/context/CartContext";

// Ensure brand names in your product data use the exact brand names or slugs
const allProducts = [
  { id: 1, name: "Gucci G-Timeless 38mm", brand: "gucci", price: 185000, gender: "Men", strap: "Leather", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Boss Grand Prix Chronograph", brand: "boss", price: 65000, gender: "Men", strap: "Stainless Steel", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Michael Kors Bradshaw Chronograph", brand: "michael-kors", price: 55000, gender: "Women", strap: "Stainless Steel", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Michael Kors Slim Runaway", brand: "michael-kors", price: 48000, gender: "Unisex", strap: "Leather", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Tissot PRX Automatic", brand: "tissot", price: 110000, gender: "Unisex", strap: "Stainless Steel", image: "https://via.placeholder.com/300" },
];

const BrandCollection = () => {
  const { brandName } = useParams();
  const { addToCart } = useCart();

  // Filter States
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedStrap, setSelectedStrap] = useState("All");
  const [maxPrice, setMaxPrice] = useState(500000);
  const [sortBy, setSortBy] = useState("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Convert "michael-kors" -> "MICHAEL KORS" for the title
  const formattedBrandTitle = decodeURIComponent(brandName).replace(/-/g, " ");

  // STRICT FILTERING: Match products whose brand slug matches the URL brand slug exactly
  const brandProducts = useMemo(() => {
    const currentSlug = brandName.toLowerCase().trim();

    return allProducts.filter((product) => {
      const productBrandSlug = product.brand.toLowerCase().trim().replace(/\s+/g, "-");
      
      const isExactBrand = productBrandSlug === currentSlug;
      const matchesGender = selectedGender === "All" || product.gender === selectedGender;
      const matchesStrap = selectedStrap === "All" || product.strap === selectedStrap;
      const matchesPrice = product.price <= maxPrice;

      return isExactBrand && matchesGender && matchesStrap && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });
  }, [brandName, selectedGender, selectedStrap, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedGender("All");
    setSelectedStrap("All");
    setMaxPrice(500000);
    setSortBy("default");
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-12">
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
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              {brandProducts.length} Timepiece{brandProducts.length !== 1 ? "s" : ""} Found
            </span>

            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg flex items-center gap-2 uppercase tracking-wider"
            >
              <FaFilter /> Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:block space-y-6 pr-4 border-r border-gray-200">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Filters
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
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-black"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block">
                Gender
              </label>
              <div className="space-y-1.5 text-xs text-gray-600">
                {["All", "Men", "Women", "Unisex"].map((gender) => (
                  <label key={gender} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedGender === gender}
                      onChange={() => setSelectedGender(gender)}
                      className="accent-black"
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Strap Filter */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider block">
                Strap Material
              </label>
              <div className="space-y-1.5 text-xs text-gray-600">
                {["All", "Leather", "Stainless Steel", "Rubber", "Mesh"].map((strap) => (
                  <label key={strap} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="strap"
                      checked={selectedStrap === strap}
                      onChange={() => setSelectedStrap(strap)}
                      className="accent-black"
                    />
                    <span>{strap}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price Range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-700 font-semibold uppercase">
                <span>Max Price</span>
                <span>Rs. {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {brandProducts.length === 0 ? (
              <div className="text-center py-24 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
                <p className="text-base font-medium text-gray-700 uppercase tracking-wider">
                  No products available for {formattedBrandTitle} right now.
                </p>
                <p className="text-xs text-gray-400">
                  Please check back later or explore our other luxury collections.
                </p>
                <Link
                  to="/"
                  className="inline-block mt-2 px-6 py-3 bg-black text-white text-xs font-semibold rounded-full uppercase tracking-widest hover:bg-zinc-800 transition-all"
                >
                  Explore Other Brands
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {brandProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg hover:border-gray-400 transition-all duration-300"
                  >
                    <div className="relative w-full aspect-square bg-gray-50 rounded-xl p-4 flex items-center justify-center overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                        {product.strap} • {product.gender}
                      </span>
                      <h3 
                        className="text-base font-medium text-gray-900 truncate"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#D4AF37]">
                        Rs. {product.price.toLocaleString()}
                      </p>

                      <button
                        onClick={() => addToCart && addToCart(product)}
                        className="w-full mt-2 py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                      >
                        <FaShoppingBag className="text-xs" /> Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filter Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end lg:hidden">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 text-lg">
                <FaTimes />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-50 border rounded-lg p-2.5 text-xs"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-black text-white rounded-xl text-xs uppercase font-semibold tracking-wider"
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