import React from 'react';

const NewArrivals = () => {
  const menProducts = [
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
  ];

  const womenProducts = [
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
    <div className="bg-black text-white min-h-screen py-16 sm:py-24 px-3 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-20 sm:space-y-28">
        
        {/* Minimal Header */}
        <div className="text-center space-y-2">
          <span 
            className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-medium block"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Curated Collection
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            New Arrivals
          </h1>
        </div>

        {/* SECTION 1: MEN WATCHES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Hero Banner */}
          <div className="lg:col-span-5 relative group min-h-[360px] lg:min-h-[580px] overflow-hidden cursor-pointer border border-zinc-900 bg-zinc-950">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-center z-10">
              <div className="border border-zinc-800/80 bg-black/60 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 group-hover:border-[#D4AF37]/40">
                <span 
                  className="text-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.3em] font-light uppercase block mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Gents Edition
                </span>
                <h2 
                  className="text-xl sm:text-3xl font-light text-white tracking-wider uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Men's Watches
                </h2>
                <span 
                  className="inline-block mt-3 text-[10px] tracking-[0.2em] text-zinc-400 border-b border-zinc-700 group-hover:text-white group-hover:border-[#D4AF37] transition-all pb-0.5 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Explore Collection &rarr;
                </span>
              </div>
            </div>
          </div>

          {/* 2 Columns on Mobile Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* SECTION 2: WOMEN WATCHES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* 2 Columns on Mobile Grid (Left on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5 order-2 lg:order-1">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Hero Banner (Right on desktop) */}
          <div className="lg:col-span-5 relative group min-h-[360px] lg:min-h-[580px] overflow-hidden cursor-pointer border border-zinc-900 bg-zinc-950 order-1 lg:order-2">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-center z-10">
              <div className="border border-zinc-800/80 bg-black/60 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 group-hover:border-[#D4AF37]/40">
                <span 
                  className="text-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.3em] font-light uppercase block mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Ladies Edition
                </span>
                <h2 
                  className="text-xl sm:text-3xl font-light text-white tracking-wider uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Women's Watches
                </h2>
                <span 
                  className="inline-block mt-3 text-[10px] tracking-[0.2em] text-zinc-400 border-b border-zinc-700 group-hover:text-white group-hover:border-[#D4AF37] transition-all pb-0.5 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Explore Collection &rarr;
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Reusable Minimal Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-zinc-950/80 border border-zinc-900 hover:border-zinc-700 p-3 sm:p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer">
      
      {/* Product Image Stage */}
      <div className="relative w-full aspect-square bg-black flex items-center justify-center p-2 sm:p-4 mb-3 overflow-hidden">
        
        {/* Minimal Tag */}
        {product.tag && (
          <span 
            className="absolute top-2 left-2 text-[#D4AF37] text-[8px] sm:text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-zinc-800 z-10"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.tag}
          </span>
        )}

        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500 ease-out" 
        />

        {/* Subtle Quick View Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
          <span 
            className="text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-light border-b border-[#D4AF37] pb-0.5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Quick View
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center space-y-1">
        <p 
          className="text-[8px] sm:text-[9px] tracking-[0.2em] text-zinc-500 uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.ref}
        </p>
        <h3 
          className="text-xs sm:text-base font-light text-zinc-200 tracking-wide truncate group-hover:text-[#D4AF37] transition-colors"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {product.title}
        </h3>
        <p 
          className="text-[10px] sm:text-xs font-light text-zinc-400 tracking-wider pt-0.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.price}
        </p>
      </div>

      {/* Subtle Hover Bottom Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-1/3 transition-all duration-500" />
    </div>
  );
};

export default NewArrivals;