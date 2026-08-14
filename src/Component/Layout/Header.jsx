import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaRegHeart,
  FaRegUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaClock
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();
  
  const wishlistCount = 0; // Dynamic badge count fallback

  // Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  const categories = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Collections", href: "/collections" },
    { name: "Watches", href: "/watches" },
    { name: "Best Sellers", href: "/best" },
    { name: "Sale", href: "/sale" },
  ];

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch search results from backend API when query changes
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        setShowDropdown(false);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        const response = await fetch(`http://localhost:5000/api/search?keyword=${encodeURIComponent(searchQuery)}`);
        const result = await response.json();
        
        if (result.success && Array.isArray(result.data)) {
          setSearchResults(result.data);
          setShowDropdown(true);
        }
      } catch (err) {
        console.error("Error fetching live search results:", err);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 300); // Debounce search request
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSelectProduct = (productId) => {
    setShowDropdown(false);
    setSearchQuery("");
    navigate(`/product/${productId}`);
  };

  const formatPrice = (pkr) => {
    return `PKR ${(pkr || 0).toLocaleString("en-PK")}`;
  };

  return (
    <>
      <header className="w-full bg-zinc-950 border-b border-zinc-800/80 transition-all sticky top-0 z-40">
        {/* Top Announcement Bar */}
        <div 
          className="bg-gradient-to-r from-zinc-950 via-[#1c180e] to-zinc-950 text-[#D4AF37] text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-center py-2 border-b border-zinc-800/50"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Nationwide Shipping & Insured Delivery
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ========================= */}
          {/* Desktop Main Header */}
          {/* ========================= */}
          <div className="hidden lg:flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <h1 
                className="text-3xl xl:text-4xl font-light tracking-[0.35em] text-white leading-none group-hover:text-[#D4AF37] transition-colors duration-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                IDEAL
              </h1>
              <p 
                className="text-[9px] tracking-[0.5em] text-zinc-400 mt-1 uppercase font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Watches
              </p>
            </Link>

            {/* Luxury Live Search Bar with Dropdown */}
            <div className="flex-1 max-w-xl relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search timepieces, reference numbers & collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => { if (searchQuery.trim()) setShowDropdown(true); }}
                  className="w-full h-11 rounded-full bg-zinc-900/80 border border-zinc-800/80 pl-6 pr-12 text-xs text-white placeholder:text-zinc-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 outline-none transition-all duration-300 tracking-wide font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                />
                <button
                  aria-label="Search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <FaSearch className="text-sm" />
                </button>
              </div>

              {/* Live Search Results Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 shadow-2xl rounded-lg overflow-hidden z-50 max-h-[400px] overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-zinc-400 font-light">
                      {isSearching ? "Searching horology vault..." : "No matching timepieces found."}
                    </div>
                  ) : (
                    <div className="divide-y divide-zinc-900">
                      {searchResults.map((item) => {
                        const watchId = item._id || item.id;
                        const watchImage = item.images?.[0]?.url || item.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000";
                        const watchTitle = item.name || item.title;

                        return (
                          <div
                            key={watchId}
                            onClick={() => handleSelectProduct(watchId)}
                            className="flex items-center gap-4 p-3 hover:bg-zinc-900/80 cursor-pointer transition-colors group"
                          >
                            <img
                              src={watchImage}
                              alt={watchTitle}
                              className="w-12 h-12 object-cover rounded bg-black shrink-0 border border-zinc-800"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 
                                className="text-sm font-light text-white group-hover:text-[#D4AF37] transition-colors truncate uppercase"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                              >
                                {watchTitle}
                              </h4>
                              <p className="text-[10px] text-zinc-400 font-light tracking-wide">
                                {item.category || item.brand || "Horology"} • <span className="text-[#D4AF37]">{formatPrice(item.price)}</span>
                              </p>
                            </div>
                            <FaChevronRight className="text-zinc-600 group-hover:text-[#D4AF37] text-xs mr-2 transition-colors" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-8">
              <Link
                to="/account"
                className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <FaRegUser className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Account
                </span>
              </Link>

              <Link
                to="/wishlist"
                className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300 relative"
              >
                <div className="relative">
                  <FaRegHeart className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Wishlist
                </span>
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300 relative"
              >
                <div className="relative">
                  <FaShoppingBag className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Bag
                </span>
              </button>
            </div>
          </div>

          {/* ========================= */}
          {/* Desktop Luxury Navigation */}
          {/* ========================= */}
          <nav className="hidden lg:flex h-12 border-t border-zinc-800/80 border-b border-zinc-800/80">
            <div className="w-[240px] border-r border-zinc-800/80 flex items-center px-6 cursor-pointer hover:bg-zinc-900/60 transition-colors duration-300">
              <span className="uppercase text-[11px] tracking-[0.2em] text-zinc-200 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Shop By Category
              </span>
            </div>

            <div className="flex-1 flex justify-center items-center">
              {categories.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={`relative h-full flex items-center px-5 uppercase text-[11px] tracking-[0.2em] font-medium transition-all duration-300 ${
                      isActive ? "text-[#D4AF37]" : "text-zinc-300 hover:text-[#D4AF37]"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.name}
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ========================= */}
          {/* Mobile Header Bar */}
          {/* ========================= */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-zinc-900 border border-zinc-800 text-white p-2.5 rounded-lg shadow-sm hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center"
              aria-label="Open Navigation Menu"
            >
              <FaBars className="text-base" />
            </button>

            <Link to="/" className="text-center">
              <h1 className="text-2xl font-light tracking-[0.3em] text-white leading-none" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                IDEAL
              </h1>
              <p className="text-[8px] tracking-[0.4em] text-zinc-400 uppercase mt-0.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Watches
              </p>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/wishlist" className="p-1 relative flex items-center">
                <FaRegHeart className="text-lg text-white hover:text-[#D4AF37] transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button onClick={() => setIsCartOpen(true)} className="relative p-1">
                <FaShoppingBag className="text-lg text-white hover:text-[#D4AF37] transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar with Dropdown */}
          <div className="lg:hidden pb-3 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search timepieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 rounded-full bg-zinc-900 border border-zinc-800 pl-4 pr-10 text-xs text-white placeholder:text-zinc-500 focus:border-[#D4AF37] outline-none"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <FaSearch className="text-zinc-400 text-xs" />
              </button>
            </div>

            {/* Mobile Results Dropdown */}
            {showDropdown && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-950 border border-zinc-800 shadow-xl rounded-lg overflow-hidden z-50 max-h-[300px] overflow-y-auto">
                {searchResults.length === 0 ? (
                  <div className="p-3 text-center text-xs text-zinc-400">No timepieces found</div>
                ) : (
                  <div className="divide-y divide-zinc-900">
                    {searchResults.map((item) => {
                      const watchId = item._id || item.id;
                      const watchImage = item.images?.[0]?.url || item.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000";
                      const watchTitle = item.name || item.title;

                      return (
                        <div
                          key={watchId}
                          onClick={() => handleSelectProduct(watchId)}
                          className="flex items-center gap-3 p-2.5 bg-zinc-950 active:bg-zinc-900"
                        >
                          <img src={watchImage} alt={watchTitle} className="w-10 h-10 object-cover rounded bg-black shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs text-white truncate uppercase" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                              {watchTitle}
                            </h4>
                            <p className="text-[10px] text-[#D4AF37]">{formatPrice(item.price)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ========================= */}
        {/* Mobile Drawer Menu */}
        {/* ========================= */}
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[998] transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-sm bg-zinc-950 border-r border-zinc-800/80 p-6 flex flex-col justify-between z-[999] shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative z-10">
              <div className="pb-6 border-b border-zinc-800/80">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl text-white tracking-[0.3em] font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                      IDEAL
                    </h2>
                    <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] mt-1 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Watches
                    </p>
                    <div className="w-10 h-[1px] bg-[#D4AF37] mt-3"></div>
                  </div>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#D4AF37] border border-zinc-800 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 group"
                  >
                    <FaTimes className="text-zinc-300 group-hover:text-black text-sm transition-colors duration-300" />
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                {categories.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-3.5 border-b border-zinc-900 hover:border-[#D4AF37]/30 transition-all duration-300"
                    >
                      <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-light ${
                        isActive ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-[#D4AF37]"
                      }`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {item.name}
                      </span>
                      <FaChevronRight className="text-[#D4AF37] text-xs group-hover:translate-x-1.5 transition duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 border-t border-zinc-800/80 pt-6 mt-6 space-y-3">
              <Link
                to="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center h-11 rounded-full border border-zinc-800 text-zinc-300 uppercase tracking-[0.2em] text-[11px] font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <FaRegHeart className="mr-2.5 text-sm" />
                Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
              </Link>

              <Link
                to="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center h-11 rounded-full border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <FaRegUser className="mr-2.5 text-sm" />
                My Account
              </Link>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer />
    </>
  );
};

export default Header;