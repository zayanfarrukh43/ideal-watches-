const API_BASE_URL = 'https://backen-watches.vercel.app';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ProductCard } from "./NewArrival";

const PREVIEW_COUNT = 4;

const collections = [
  { id: "men", gender: "Men", subtitle: "For Him", title: "Men's Collection" },
  { id: "women", gender: "Women", subtitle: "For Her", title: "Women's Collection" },
];

const GenderCollection = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch watches from backend on mount
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/watches`);
        const result = await response.json();
        if (result.success) {
          setWatches(result.data);
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
    <section className="bg-white text-black py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-zinc-200 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-20 sm:space-y-28">
        {collections.map((item) => {
          const items = watches.filter(
            (w) => w.gender?.toLowerCase() === item.gender.toLowerCase()
          );

          return (
            <div key={item.id} className="space-y-10 sm:space-y-14">

              {/* Collection Heading */}
              <div className="text-center space-y-3">
                <span
                  className="text-[#B8901F] text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-bold block"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.subtitle}
                </span>
                <h2
                  className="text-3xl sm:text-5xl font-bold tracking-widest uppercase text-black"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h2>
                <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto mt-4" />
              </div>

              {/* Products: first 4 only */}
              {loading ? (
                <div className="text-center py-12 text-zinc-700 text-sm tracking-widest uppercase font-mono">
                  Loading Collection...
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-12 text-zinc-700 text-sm tracking-widest uppercase font-mono">
                  No timepieces found in this collection.
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {items.slice(0, PREVIEW_COUNT).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}

              {/* Show More -> full collection page */}
              <div className="text-center">
                <Link
                  to={`/gender/${item.id}`}
                  className="inline-flex items-center gap-2 px-8 py-3 border border-black bg-black hover:bg-[#D4AF37] hover:border-[#D4AF37] text-white hover:text-black text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Show More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GenderCollection;
