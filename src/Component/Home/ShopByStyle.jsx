const API_BASE_URL = 'https://backen-watches.vercel.app';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ShopByStyle = () => {
  const [styles, setStyles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, setIsCartOpen } = useCart(); // Added setIsCartOpen to open drawer automatically

  useEffect(() => {
    const fetchStraps = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/watch-straps`);
        const result = await response.json();

        if (result.success) {
          setStyles(result.data);
        } else {
          setError(result.message || "Failed to fetch watch styles");
        }
      } catch (err) {
        setError("Network error: Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchStraps();
  }, []);

  if (loading) {
    return (
      <section className="bg-black py-20 text-center text-zinc-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Loading styles...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-20 text-center text-red-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Error: {error}
      </section>
    );
  }

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-12 border-y border-zinc-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Minimal Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span 
            className="text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-medium block mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Curated Collections
          </span>
          <h2
            className="text-2xl sm:text-4xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Shop By Style
          </h2>
        </div>

        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {styles.map((product, index) => {
            const slug = product.strapType ? product.strapType.toLowerCase().replace(/\s+/g, '-') : 'collection';
            const imageUrl = product.images && product.images.length > 0 ? product.images[0].url : "";

            return (
              <div key={product._id} className="group flex flex-col h-full bg-zinc-950/60 border border-zinc-900 hover:border-zinc-700 transition-all duration-500">
                
                {/* Clickable Image & Title Area linking to Collection */}
                <Link  className="block flex-grow">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col items-center justify-between p-6 sm:p-8 cursor-pointer h-full"
                  >
                    {/* Radial Highlight Behind Watch */}
                    <div className="absolute inset-0 bg-radial from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Watch Display Area */}
                    <div className="relative w-full aspect-square flex items-center justify-center my-4">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                        />
                      ) : (
                        <div className="text-zinc-600 text-xs">No Image</div>
                      )}
                    </div>

                    {/* Minimal Text Label */}
                    <div className="text-center w-full z-10 pt-4 border-t border-zinc-900/80 group-hover:border-zinc-800 transition-colors duration-300">
                      <p 
                        className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-light mb-1 group-hover:text-[#D4AF37] transition-colors duration-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {product.strapType}
                      </p>
                      <h3
                        className="text-base sm:text-lg font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300 truncate"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* Ultra-subtle Bottom Line Accent */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-1/2 transition-all duration-500" />
                  </motion.div>
                </Link>

                {/* Quick Add to Cart Option */}
                <div className="px-6 pb-6 pt-0 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation(); // Stops the click from triggering parent Link routing
                      
                      // Explicitly format and pass the item payload with normalized properties
                      addToCart({
                        _id: product._id,
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        image: imageUrl,
                        strapType: product.strapType,
                      });

                      // Force open cart drawer to display confirmation instantly
                      if (typeof setIsCartOpen === 'function') {
                        setIsCartOpen(true);
                      }
                    }}
                    className="w-full py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium border border-zinc-800 text-zinc-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-zinc-900 transition-all"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Quick Add — ${product.price}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ShopByStyle;