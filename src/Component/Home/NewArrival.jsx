import React from 'react';

const NewArrivals = () => {
  const menProducts = [
    {
      id: 1,
      title: "Daniel Wellington Men's Quartz",
      ref: "0204DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=DW+0204DW",
      tag: "NEW"
    },
    {
      id: 2,
      title: "Daniel Wellington Men's Quartz",
      ref: "0103DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=DW+0103DW"
    },
    {
      id: 3,
      title: "Daniel Wellington Men's Quartz",
      ref: "0104DW",
      price: "Rs. 14,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=DW+0104DW"
    },
    {
      id: 4,
      title: "Tommy Hilfiger Chronograph",
      ref: "1791421",
      price: "Rs. 25,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=Tommy+1791421",
      tag: "BESTSELLER"
    },
  ];

  const womenProducts = [
    {
      id: 5,
      title: "Michael Kors Maren Watch",
      ref: "MK7518",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=MK+7518"
    },
    {
      id: 6,
      title: "Michael Kors Laney Watch",
      ref: "MK4892",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=MK+4892",
      tag: "LIMITED"
    },
    {
      id: 7,
      title: "Michael Kors Gold Edition",
      ref: "MK6206",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=MK+6206"
    },
    {
      id: 8,
      title: "Michael Kors Brecken Grey Dial",
      ref: "MK8563",
      price: "Rs. 27,000",
      image: "https://via.placeholder.com/400x400/f8f8f8/111111?text=MK+8563"
    },
  ];

  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold">Curated Collection</span>
          <h1 className="text-4xl sm:text-5xl font-serif tracking-wide text-amber-100 uppercase">New Arrivals</h1>
          <div className="w-16 h-[1px] bg-amber-500/50 mx-auto mt-4" />
        </div>

        {/* SECTION 1: MEN WATCHES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Hero Luxury Banner */}
          <div className="lg:col-span-5 relative group min-h-[480px] lg:min-h-[620px] rounded-xs overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000')` }}
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Luxury Label Box */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-center z-10">
              <div className="border border-amber-400/40 bg-black/40 backdrop-blur-md p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-amber-400 text-xs tracking-[0.3em] font-light uppercase block mb-1">Gents Edition</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-stone-100 tracking-wider uppercase font-normal">
                  Men's Watches
                </h2>
                <span className="inline-block mt-4 text-[11px] tracking-[0.2em] text-amber-200/80 border-b border-amber-400/30 pb-1 uppercase">Discover Range &rarr;</span>
              </div>
            </div>
          </div>

          {/* 2x2 Product Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* SECTION 2: WOMEN WATCHES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 2x2 Product Grid (Left side on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Hero Luxury Banner (Right side on desktop) */}
          <div className="lg:col-span-5 relative group min-h-[480px] lg:min-h-[620px] rounded-xs overflow-hidden cursor-pointer order-1 lg:order-2">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000')` }}
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Luxury Label Box */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-center z-10">
              <div className="border border-amber-400/40 bg-black/40 backdrop-blur-md p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-amber-400 text-xs tracking-[0.3em] font-light uppercase block mb-1">Ladies Edition</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-stone-100 tracking-wider uppercase font-normal">
                  Women's Watches
                </h2>
                <span className="inline-block mt-4 text-[11px] tracking-[0.2em] text-amber-200/80 border-b border-amber-400/30 pb-1 uppercase">Discover Range &rarr;</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Reusable Luxury Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-stone-950 border border-stone-800/80 hover:border-amber-500/40 rounded-xs p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black">
      <div className="relative w-full aspect-square bg-stone-900/60 rounded-xs overflow-hidden flex items-center justify-center p-6 mb-4">
        
        {/* Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-stone-900 border border-amber-500/50 text-amber-400 text-[10px] tracking-widest px-2.5 py-1 uppercase z-10">
            {product.tag}
          </span>
        )}

        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500" 
        />

        {/* Hover Quick View / Action */}
        <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs tracking-[0.2em] uppercase font-semibold py-3 px-6 transition-colors duration-200">
            View Timepiece
          </button>
        </div>
      </div>

      <div className="text-center space-y-1">
        <p className="text-[10px] tracking-[0.2em] text-amber-500/80 uppercase font-mono">{product.ref}</p>
        <h3 className="text-sm font-serif text-stone-200 tracking-wide line-clamp-1 group-hover:text-amber-200 transition-colors">
          {product.title}
        </h3>
        <p className="text-xs font-light text-stone-400 tracking-wider pt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default NewArrivals;