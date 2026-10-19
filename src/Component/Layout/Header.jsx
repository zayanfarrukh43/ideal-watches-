import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaRegUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import { productImage as optimizeImage, IMAGE_SIZES } from "../../utils/productImage";

const API_BASE_URL = "https://backen-watches.vercel.app";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

  // Search States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const searchInputRef = useRef(null);

  const categories = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Collections", href: "/collections" },
    { name: "Watches", href: "/watches" },
    { name: "Best Sellers", href: "/best" },
    { name: "Sale", href: "/sale" },
  ];

  const openSearch = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSearchError("");
  };

  // Focus the input as soon as the search panel opens
  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  // Close the search panel on Escape
  useEffect(() => {
    if (!isSearchOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isSearchOpen]);

  // Close search + mobile menu whenever the page changes
  useEffect(() => {
    closeSearch();
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Fetch search results from the backend (debounced; stale requests are cancelled)
  useEffect(() => {
    const keyword = searchQuery.trim();
    if (!keyword) {
      setSearchResults([]);
      setIsSearching(false);
      setSearchError("");
      return undefined;
    }

    const controller = new AbortController();
    setIsSearching(true);
    setSearchError("");

    const debounceTimer = setTimeout(async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/search?keyword=${encodeURIComponent(keyword)}`,
          { signal: controller.signal }
        );
        const result = await response.json();
        setSearchResults(result.success && Array.isArray(result.data) ? result.data : []);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Error fetching live search results:", err);
        setSearchResults([]);
        setSearchError("Search is unavailable right now. Please try again.");
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
      controller.abort();
    };
  }, [searchQuery]);

  const handleSelectProduct = (productId) => {
    closeSearch();
    navigate(`/product/${productId}`);
  };

  // Enter opens the first result
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const first = searchResults[0];
    if (first) handleSelectProduct(first._id || first.id);
  };

  const formatPrice = (pkr) => {
    return `PKR ${(pkr || 0).toLocaleString("en-PK")}`;
  };

  return (
    <>
      <header className="w-full bg-zinc-950 border-b border-zinc-800/80 transition-all relative z-40">
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

            {/* Right Side Icons */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => (isSearchOpen ? closeSearch() : openSearch())}
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                className={`group flex flex-col items-center justify-center transition-colors duration-300 cursor-pointer ${
                  isSearchOpen ? "text-[#D4AF37]" : "text-zinc-400 hover:text-[#D4AF37]"
                }`}
              >
                {isSearchOpen ? (
                  <FaTimes className="text-lg text-[#D4AF37]" />
                ) : (
                  <FaSearch className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                )}
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {isSearchOpen ? "Close" : "Search"}
                </span>
              </button>

              <Link
                to="/account"
                className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <FaRegUser className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Account
                </span>
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300 relative cursor-pointer"
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
            <div className="w-[190px] xl:w-[240px] shrink-0 border-r border-zinc-800/80 flex items-center px-4 xl:px-6 cursor-pointer hover:bg-zinc-900/60 transition-colors duration-300">
              <span className="uppercase text-[10px] xl:text-[11px] tracking-[0.15em] xl:tracking-[0.2em] text-zinc-200 font-medium whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
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
                    className={`relative h-full flex items-center px-2.5 xl:px-5 uppercase text-[10px] xl:text-[11px] tracking-[0.15em] xl:tracking-[0.2em] font-medium whitespace-nowrap transition-all duration-300 ${
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
              <button
                onClick={() => (isSearchOpen ? closeSearch() : openSearch())}
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                className="p-1"
              >
                {isSearchOpen ? (
                  <FaTimes className="text-lg text-[#D4AF37]" />
                ) : (
                  <FaSearch className="text-lg text-white hover:text-[#D4AF37] transition-colors" />
                )}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="relative p-1" aria-label="Open bag">
                <FaShoppingBag className="text-lg text-white hover:text-[#D4AF37] transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* Search Panel (toggled)    */}
        {/* ========================= */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full z-50 bg-zinc-950 border-b border-zinc-800 shadow-2xl">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
              <form onSubmit={handleSearchSubmit} className="relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 text-sm pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search watches by name, brand or reference..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 rounded-full bg-zinc-900 border border-zinc-800 pl-12 pr-5 text-base sm:text-sm text-white placeholder:text-zinc-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 outline-none transition-all duration-300 tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                />
              </form>

              {/* Results */}
              {searchQuery.trim() && (
                <div className="mt-3 rounded-xl border border-zinc-800 overflow-hidden max-h-[60vh] overflow-y-auto">
                  {isSearching && searchResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-zinc-400">Searching...</div>
                  ) : searchError ? (
                    <div className="p-4 text-center text-xs text-rose-400">{searchError}</div>
                  ) : searchResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-zinc-400">
                      No watches found for "{searchQuery.trim()}"
                    </div>
                  ) : (
                    <div className="divide-y divide-zinc-900">
                      {searchResults.map((item) => {
                        const watchId = item._id || item.id;
                        const watchImage = item.images?.[0]?.url || item.image || "https://www.idealwatches.shop/favicon-512.png";
                        const watchTitle = item.name || item.title;

                        return (
                          <button
                            type="button"
                            key={watchId}
                            onClick={() => handleSelectProduct(watchId)}
                            className="w-full flex items-center gap-4 p-3 text-left bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors group"
                          >
                            <img
                              src={optimizeImage(watchImage, IMAGE_SIZES.thumb)}
                              alt={watchTitle}
                              className="w-12 h-12 object-contain rounded bg-white shrink-0 border border-zinc-800"
                            />
                            <div className="flex-1 min-w-0">
                              <h4
                                className="text-sm text-white group-hover:text-[#D4AF37] transition-colors truncate"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                              >
                                {watchTitle}
                              </h4>
                              <p className="text-[11px] text-zinc-400 tracking-wide mt-0.5">
                                {item.brand || item.category || "Watch"} • <span className="text-[#D4AF37]">{formatPrice(item.price)}</span>
                              </p>
                            </div>
                            <FaChevronRight className="text-zinc-600 group-hover:text-[#D4AF37] text-xs mr-1 transition-colors shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

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
