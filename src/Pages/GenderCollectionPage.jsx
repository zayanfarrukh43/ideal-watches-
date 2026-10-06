const API_BASE_URL = 'https://backen-watches.vercel.app';

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductCard } from "../Component/Home/NewArrival";

const genderDetails = {
  men: {
    gender: "Men",
    name: "Men's Collection",
    subtitle: "For Him",
    description: "Bold, precision-engineered timepieces crafted for the modern gentleman.",
  },
  women: {
    gender: "Women",
    name: "Women's Collection",
    subtitle: "For Her",
    description: "Elegant, refined timepieces designed to complement every occasion.",
  },
};

const GenderCollectionPage = () => {
  const { gender } = useParams();
  const current = genderDetails[gender?.toLowerCase()];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch watches from backend and keep only the selected gender
  useEffect(() => {
    if (!current) {
      setLoading(false);
      return;
    }

    const fetchWatches = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/watches`);
        const result = await response.json();
        if (result.success) {
          setProducts(
            result.data.filter(
              (w) => w.gender?.toLowerCase() === current.gender.toLowerCase()
            )
          );
        }
      } catch (err) {
        console.error('Failed to fetch watches:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, [current]);

  return (
    <div className="bg-white text-black min-h-screen py-20 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">

        {/* Back Link */}
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-700 hover:text-[#B8901F] transition-colors mb-8 inline-block"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="text-center my-12 space-y-3">
          <span
            className="text-[#B8901F] text-[10px] uppercase tracking-[0.35em] font-bold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {current ? current.subtitle : "Collection"}
          </span>
          <h1
            className="text-3xl sm:text-5xl font-bold tracking-widest uppercase text-black"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {current ? current.name : "Collection Not Found"}
          </h1>
          {current && (
            <p className="text-zinc-800 max-w-xl mx-auto text-sm font-semibold">
              {current.description}
            </p>
          )}
          <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto mt-4" />
        </div>

        {/* Loading / Empty States / Grid */}
        {loading ? (
          <div className="text-center py-20 text-zinc-700 text-sm tracking-widest uppercase font-mono">
            Loading Collection...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-zinc-700 text-sm tracking-widest uppercase font-mono">
            No timepieces found in this collection.
          </div>
        ) : (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </section>
        )}

      </div>
    </div>
  );
};

export default GenderCollectionPage;
