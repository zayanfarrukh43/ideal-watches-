const API_BASE_URL = 'https://backen-watches.vercel.app';

import React, { useState, useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/Component/context/CartContext';
import { productImage as optimizeImage, IMAGE_SIZES } from "../../utils/productImage";

// Shown when a watch has no photo uploaded yet (IW monogram)
export const NO_IMAGE = 'https://www.idealwatches.shop/favicon-512.png';

const getPrimaryImage = (product) => product.images?.[0]?.url || NO_IMAGE;

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
          // Newest first; watches with a photo come before ones without, then keep 4
          const hasPhoto = (w) => (w.images?.[0]?.url ? 1 : 0);
          const latest = [...result.data]
            .sort((a, b) => hasPhoto(b) - hasPhoto(a) || new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
            .slice(0, 4);
          setProducts(latest);
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
    <div className="bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Minimal Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span 
            className="text-[#B8901F] uppercase tracking-[0.4em] text-[9px] font-bold block"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Curated Collection
          </span>
          <h1 
            className="text-4xl sm:text-6xl font-semibold tracking-wider uppercase text-black"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            New Arrivals
          </h1>
          <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto mt-4" />
        </div>

        {/* Loading / Empty States */}
        {loading ? (
          <div className="text-center py-20 text-zinc-700 text-sm tracking-widest uppercase font-mono">
            Loading Collection...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-zinc-700 text-sm tracking-widest uppercase font-mono">
            No timepieces found in inventory.
          </div>
        ) : (
          /* Product Cards Grid */
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, buyNow } = useCart();

  const goToProductPage = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    const primaryImage = getPrimaryImage(product);

    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: primaryImage,
      ref: product.referenceNo,
    });
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();

    const primaryImage = getPrimaryImage(product);

    buyNow({
      id: product._id,
      name: product.name,
      price: product.price,
      image: primaryImage,
      ref: product.referenceNo,
    });
    navigate('/checkout');
  };

  // Determine tag dynamically based on model attributes if applicable
  const displayTag = product.isBestSeller ? "BESTSELLER" : product.tag || "NEW";
  const primaryImage = getPrimaryImage(product);
  const hasImage = primaryImage !== NO_IMAGE;

  return (
    <div 
      onClick={goToProductPage}
      className="group bg-white border border-zinc-200 hover:border-zinc-300 p-3 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer relative"
    >
      {/* Product Tag */}
      {displayTag && (
        <span 
          className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[#B8901F] text-[8px] font-bold uppercase tracking-[0.2em] bg-white/90 px-2 py-0.5 border border-zinc-200 z-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {displayTag}
        </span>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-square bg-white flex items-center justify-center p-2 sm:p-4 mb-3 sm:mb-4 overflow-hidden rounded-sm">
        <img 
          src={optimizeImage(primaryImage, IMAGE_SIZES.card)} 
          alt={product.name} 
          className={`max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out ${hasImage ? "" : "w-1/2 opacity-25"}`} 
        />
      </div>

      {/* Info & Action */}
      <div className="space-y-2.5 sm:space-y-3 text-center">
        <div>
          <p 
            className="text-[10px] sm:text-xs tracking-[0.12em] text-black font-extrabold uppercase mb-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ref. {product.referenceNo}
          </p>
          <h3 
            className="text-[13px] sm:text-sm font-semibold text-zinc-900 leading-snug line-clamp-2 min-h-[2.5em] group-hover:text-black transition-colors"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {product.name}
          </h3>
          <p 
            className="text-xs sm:text-sm text-zinc-900 font-bold tracking-wide mt-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Rs. {product.price?.toLocaleString()}
          </p>
        </div>

        {/* Add To Bag CTA */}
        <button
          onClick={handleAddToCart}
          className="w-full h-9 sm:h-10 bg-zinc-100 hover:bg-[#D4AF37] text-zinc-900 hover:text-black border border-zinc-200 hover:border-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] whitespace-nowrap uppercase font-bold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <FaShoppingBag className="text-[10px]" />
          <span>Add To Bag</span>
        </button>

        {/* Buy Now CTA */}
        <button
          onClick={handleBuyNow}
          className="w-full h-9 sm:h-10 bg-[#D4AF37] hover:bg-[#b8952b] text-black border border-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] whitespace-nowrap uppercase font-bold transition-all duration-300 flex items-center justify-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;