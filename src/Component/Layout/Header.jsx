import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaRegHeart,
  FaRegUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { name: "Home", href: "/" },
    { name: "Men's Watches", href: "/mens-watches" },
    { name: "Women's Watches", href: "/womens-watches" },
    { name: "Brands", href: "/brands" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-[#1c180e] to-zinc-950 text-[#D4AF37] text-[11px] font-medium tracking-[2px] uppercase text-center py-2 border-b border-zinc-800/50">
        Nationwide Shipping & Insured Delivery
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================= */}
        {/* Desktop Main Header */}
        {/* ========================= */}
        <div className="hidden lg:flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <h1 className="text-4xl font-light tracking-[12px] text-white leading-none group-hover:text-[#D4AF37] transition-colors duration-300">
              IDEAL
            </h1>
            <p className="text-[10px] tracking-[7px] text-zinc-400 mt-1 uppercase font-light">
              Watches
            </p>
          </Link>

          {/* Luxury Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Search timepieces, reference numbers & collections..."
              className="w-full h-11 rounded-full bg-zinc-900/90 border border-zinc-800 pl-6 pr-12 text-sm text-white placeholder:text-zinc-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all duration-300"
            />
            <button
              aria-label="Search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <FaSearch className="text-base" />
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-8">
            <Link
              to="/account"
              className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <FaRegUser className="text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
              <span className="text-[11px] tracking-wider uppercase mt-1 font-light">
                Account
              </span>
            </Link>

            <Link
              to="/wishlist"
              className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <div className="relative">
                <FaRegHeart className="text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                  2
                </span>
              </div>
              <span className="text-[11px] tracking-wider uppercase mt-1 font-light">
                Wishlist
              </span>
            </Link>

            <Link
              to="/cart"
              className="group flex flex-col items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <div className="relative">
                <FaShoppingBag className="text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                  3
                </span>
              </div>
              <span className="text-[11px] tracking-wider uppercase mt-1 font-light">
                Bag
              </span>
            </Link>
          </div>
        </div>

        {/* ========================= */}
        {/* Desktop Luxury Navigation */}
        {/* ========================= */}
        <nav className="hidden lg:flex h-12 border-t border-zinc-800/80 border-b border-zinc-800/80">
          <div className="w-[240px] border-r border-zinc-800/80 flex items-center px-6 cursor-pointer hover:bg-zinc-900/60 duration-300">
            <span className="uppercase text-[12px] tracking-[2px] text-zinc-200 font-medium">
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
                  className={`relative h-full flex items-center px-6 uppercase text-[12px] tracking-[2px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-zinc-300 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
                  )}
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
            <h1 className="text-2xl font-light tracking-[8px] text-white leading-none">
              IDEAL
            </h1>
            <p className="text-[8px] tracking-[4px] text-zinc-400 uppercase mt-0.5 font-light">
              Watches
            </p>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="p-1 relative">
              <FaRegHeart className="text-lg text-white" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
                2
              </span>
            </Link>

            <Link to="/cart" className="relative p-1">
              <FaShoppingBag className="text-lg text-white" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="lg:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search timepieces..."
              className="w-full h-10 rounded-full bg-zinc-900 border border-zinc-800 pl-4 pr-10 text-xs text-white placeholder:text-zinc-500 focus:border-[#D4AF37] outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <FaSearch className="text-zinc-400 text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Mobile Drawer Menu (CLEANED & FIXED) */}
      {/* ========================= */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[998] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-sm bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col justify-between z-[999] shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Upper Content */}
          <div>
            <div className="pb-6 border-b border-zinc-800/80">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl text-white tracking-[8px] font-light">
                    IDEAL
                  </h2>
                  <p className="text-[10px] tracking-[5px] uppercase text-[#D4AF37] mt-1 font-light">
                    Watches
                  </p>
                  <div className="w-12 h-[1px] bg-[#D4AF37] mt-3"></div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#D4AF37] border border-zinc-800 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300"
                >
                  <FaTimes className="text-zinc-300 hover:text-black text-sm transition-colors duration-300" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-1">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-3.5 border-b border-zinc-900 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <span className="text-zinc-200 text-xs tracking-[2px] uppercase group-hover:text-[#D4AF37] transition font-light">
                    {item.name}
                  </span>
                  <FaChevronRight className="text-[#D4AF37] text-xs group-hover:translate-x-1.5 transition duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="border-t border-zinc-800/80 pt-6 mt-6">
            <Link
              to="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center h-11 rounded-full border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[2px] text-xs font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <FaRegUser className="mr-2.5 text-sm" />
              My Account
            </Link>

            <p className="text-center text-[9px] text-zinc-600 tracking-[3px] uppercase mt-6 font-light">
              IDEAL WATCHES
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;