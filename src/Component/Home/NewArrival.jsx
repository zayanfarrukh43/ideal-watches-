import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/Component/context/CartContext';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      title: "Daniel Wellington Men's Quartz",
      ref: "0204DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=DW+0204DW",
      tag: "NEW"
    },
    {
      id: 2,
      title: "Daniel Wellington Men's Quartz",
      ref: "0103DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=DW+0103DW"
    },
    {
      id: 3,
      title: "Daniel Wellington Men's Quartz",
      ref: "0104DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=DW+0104DW"
    },
    {
      id: 4,
      title: "Tommy Hilfiger Chronograph",
      ref: "1791421",
      price: "Rs. 25,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=Tommy+1791421",
      tag: "BESTSELLER"
    },
    {
      id: 5,
      title: "Michael Kors Maren Watch",
      ref: "MK7518",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=MK+7518"
    },
    {
      id: 6,
      title: "Michael Kors Laney Watch",
      ref: "MK4892",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=MK+4892",
      tag: "LIMITED"
    },
    {
      id: 7,
      title: "Michael Kors Gold Edition",
      ref: "MK6206",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=MK+6206"
    },
    {
      id: 8,
      title: "Michael Kors Brecken Grey Dial",
      ref: "MK8563",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/09090b/ffffff?text=MK+8563"
    },
  ];

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

        {/* Product Cards Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

      </div>
    </div>
  );
};

// Minimalist Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const goToProductPage = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    const numericPrice = typeof product.price === 'string' 
      ? Number(product.price.replace(/[^0-9]/g, '')) 
      : product.price;

    addToCart({
      id: product.id,
      name: product.title,
      price: numericPrice,
      image: product.image,
      ref: product.ref,
    });
  };

  return (
    <div 
      onClick={goToProductPage}
      className="group bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer relative"
    >
      {/* Product Tag */}
      {product.tag && (
        <span 
          className="absolute top-3 left-3 text-[#D4AF37] text-[8px] uppercase tracking-[0.2em] bg-black/80 px-2 py-0.5 border border-zinc-800/80 z-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.tag}
        </span>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-square bg-black/40 flex items-center justify-center p-4 mb-4 overflow-hidden rounded-sm">
        <img 
          src={product.image} 
          alt={product.title} 
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
            Ref. {product.ref}
          </p>
          <h3 
            className="text-xs sm:text-sm font-light text-zinc-200 tracking-wide truncate group-hover:text-white transition-colors"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {product.title}
          </h3>
          <p 
            className="text-[10px] sm:text-xs text-zinc-400 font-light tracking-wider mt-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.price}
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