import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { 
  FaTimes, 
  FaTrashAlt, 
  FaShoppingBag, 
  FaPlus, 
  FaMinus, 
  FaArrowRight, 
  FaShieldAlt, 
  FaLock 
} from "react-icons/fa";

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  const handleExplore = () => {
    setIsCartOpen(false);
    navigate("/collections");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Darkened Glass Backdrop with Fade Blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        {/* Main Drawer Container - Full screen on small mobile, max 450px on tablet/desktop */}
        <div className="w-screen max-w-full sm:max-w-[450px] bg-[#09090b] border-l border-zinc-800/80 text-white flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all">
          
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <FaShoppingBag className="text-[#D4AF37] text-xs" />
              </div>
              <div>
                <h2 
                  className="text-lg sm:text-xl font-light uppercase tracking-[0.2em] text-white"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Your Selection
                </h2>
                <p 
                  className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {cart.reduce((acc, curr) => acc + curr.quantity, 0)} {cart.reduce((acc, curr) => acc + curr.quantity, 0) === 1 ? 'Piece' : 'Pieces'}
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(false)} 
              className="w-9 h-9 rounded-full border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
              aria-label="Close Selection"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-16">
                <div className="w-16 h-16 rounded-full border border-zinc-800/80 bg-zinc-950 flex items-center justify-center shadow-inner">
                  <FaShoppingBag className="text-zinc-600 text-xl" />
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-lg font-light uppercase tracking-wider text-zinc-300"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Your Bag Is Empty
                  </h3>
                  <p 
                    className="text-xs text-zinc-500 max-w-[240px] leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Explore our curated vault of luxury horology to make your first selection.
                  </p>
                </div>
                <button
                  onClick={handleExplore}
                  className="mt-2 px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black uppercase text-[10px] tracking-[0.25em] font-medium rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative flex gap-4 p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 items-center"
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative w-20 h-20 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 p-2 shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    {item.ref && (
                      <span className="text-[9px] text-[#D4AF37] tracking-[0.25em] uppercase font-semibold block">
                        REF. {item.ref}
                      </span>
                    )}

                    <h4 
                      className="text-sm font-light text-zinc-100 uppercase tracking-wider truncate"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {item.name}
                    </h4>

                    <p 
                      className="text-xs text-[#D4AF37] font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                    </p>

                    {/* Quantity Pill Box */}
                    <div className="pt-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/80 rounded-full px-2 py-0.5">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-[7px]" />
                        </button>
                        
                        <span className="text-[11px] font-mono font-medium px-1 text-zinc-200">
                          {item.quantity}
                        </span>

                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-[7px]" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-500 hover:text-red-400 p-1.5 transition-colors"
                        title="Remove item"
                      >
                        <FaTrashAlt className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Luxury Action Button */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md space-y-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
              
              {/* Order Summary Pricing */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span 
                    className="uppercase tracking-[0.2em] text-zinc-400 font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Subtotal
                  </span>
                  <span 
                    className="text-xl font-light text-[#D4AF37]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Rs. {totalPrice.toLocaleString("en-PK")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span>Shipping & Duties</span>
                  <span className="text-emerald-400 font-medium uppercase tracking-wider">Calculated at checkout</span>
                </div>
              </div>

              {/* Ultra Luxury Shimmer CTA Button */}
              <button 
                onClick={handleCheckout}
                className="group relative w-full h-13 sm:h-14 overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] p-[1px] shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.4)] transition-all duration-500 active:scale-[0.99]"
              >
                <div className="w-full h-full bg-[#D4AF37] group-hover:bg-[#e0bc43] rounded-full flex items-center justify-center gap-3 px-6 transition-all duration-300">
                  <span 
                    className="text-black font-semibold uppercase text-[11px] tracking-[0.25em]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Proceed To Checkout
                  </span>
                  <FaArrowRight className="text-black text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </button>

              {/* Guarantees */}
              <div className="flex items-center justify-center gap-4 pt-1 text-[10px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <FaLock className="text-[#D4AF37] text-[9px]" /> Encrypted Checkout
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FaShieldAlt className="text-[#D4AF37] text-[9px]" /> Official Warranty
                </span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;