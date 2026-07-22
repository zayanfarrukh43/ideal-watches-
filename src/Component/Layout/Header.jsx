import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const categories = [
    { name: "New Arrivals", href: "/collections/new" },
    { name: "Rolex", href: "/brand/rolex" },
    { name: "Omega", href: "/brand/omega" },
    { name: "Audemars Piguet", href: "/brand/ap" },
    { name: "Patek Philippe", href: "/brand/patek" },
    { name: "Straps & Accessories", href: "/accessories" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-[#1c180e] to-zinc-950 text-[#D4AF37] text-[11px] font-medium tracking-[2px] uppercase text-center py-2 border-b border-zinc-800/50">
        Complimentary Express Worldwide Shipping & Insured Delivery
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
                <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
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
                <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                  3
                </span>
              </div>
              <span className="text-[11px] tracking-wider uppercase mt-1 font-light">
                Bag
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Categories Sub-Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-10 py-3 border-t border-zinc-800/40">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-xs font-light uppercase tracking-[2.5px] text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ========================= */}
        {/* Mobile Header Bar */}
        {/* ========================= */}
        <div className="lg:hidden flex items-center justify-between h-16">
          {/* Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white p-2 hover:text-[#D4AF37] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-center">
            <h1 className="text-2xl font-light tracking-[8px] text-white leading-none">
              IDEAL
            </h1>
            <p className="text-[8px] tracking-[4px] text-zinc-400 uppercase mt-0.5 font-light">
              Watches
            </p>
          </Link>

          {/* Quick Icons */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="p-1">
              <FaRegHeart className="text-lg text-white" />
            </Link>

            <Link to="/cart" className="relative p-1">
              <FaShoppingBag className="text-lg text-white" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">
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
      {/* Mobile Drawer Menu */}
      {/* ========================= */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <div>
                <h2 className="text-xl tracking-[6px] text-white font-light">IDEAL</h2>
                <p className="text-[8px] tracking-[3px] text-zinc-400 uppercase">Watches</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white p-2"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="mt-8 space-y-4">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm uppercase tracking-[2px] text-zinc-300 hover:text-[#D4AF37] transition-colors border-b border-zinc-900"
                >
                  <span>{item.name}</span>
                  <FaChevronRight className="text-[10px] text-zinc-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer Links */}
          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <Link
              to="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400 hover:text-[#D4AF37]"
            >
              <FaRegUser />
              <span>My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;