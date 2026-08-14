const API_BASE_URL = 'https://backen-watches.vercel.app';

import React, { useState, useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/Component/context/CartContext';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch watches from backend on mount
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/watches`);
        const result = await response.json();
        if (result.success) {
          setProducts(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch watches:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-20 sm:py-28 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Minimal Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] font-medium block"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Curated Collection
          </span>
          <h1 
            className="text-4xl sm:text-6xl font-light tracking-wider uppercase text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            New Arrivals
          </h1>
          <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto mt-4" />
        </div>

        {/* Loading / Empty States */}
        {loading ? (
          <div className="text-center py-20 text-zinc-500 text-sm tracking-widest uppercase font-mono">
            Loading Collection...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 text-sm tracking-widest uppercase font-mono">
            No timepieces found in inventory.
          </div>
        ) : (
          /* Product Cards Grid */
          <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </section>
        )}

      </div>
    </div>
  );
};

// Minimalist Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const goToProductPage = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    // Grab first Cloudinary image safely or use fallback
    const primaryImage = product.images?.[0]?.url || 'https://via.placeholder.com/400x400/09090b/ffffff?text=Watch';

    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: primaryImage,
      ref: product.referenceNo,
    });
  };

  // Determine tag dynamically based on model attributes if applicable
  const displayTag = product.isBestSeller ? "BESTSELLER" : product.tag || "NEW";
  const primaryImage = product.images?.[0]?.url || 'https://via.placeholder.com/400x400/09090b/ffffff?text=Watch';

  return (
    <div 
      onClick={goToProductPage}
      className="group bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer relative"
    >
      {/* Product Tag */}
      {displayTag && (
        <span 
          className="absolute top-3 left-3 text-[#D4AF37] text-[8px] uppercase tracking-[0.2em] bg-black/80 px-2 py-0.5 border border-zinc-800/80 z-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {displayTag}
        </span>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-square bg-black/40 flex items-center justify-center p-4 mb-4 overflow-hidden rounded-sm">
        <img 
          src={primaryImage} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* Info & Action */}
      <div className="space-y-3 text-center">
        <div>
          <p 
            className="text-[8px] sm:text-[9px] tracking-[0.25em] text-zinc-500 uppercase mb-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ref. {product.referenceNo}
          </p>
          <h3 
            className="text-xs sm:text-sm font-light text-zinc-200 tracking-wide truncate group-hover:text-white transition-colors"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {product.name}
          </h3>
          <p 
            className="text-[10px] sm:text-xs text-zinc-400 font-light tracking-wider mt-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Rs. {product.price?.toLocaleString()}
          </p>
        </div>

        {/* Add To Bag CTA */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 bg-zinc-900/80 hover:bg-[#D4AF37] text-zinc-300 hover:text-black border border-zinc-800 hover:border-[#D4AF37] text-[9px] tracking-[0.25em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <FaShoppingBag className="text-[10px]" />
          <span>Add To Bag</span>
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;