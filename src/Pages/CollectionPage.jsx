import React from "react";
import { useParams, Link } from "react-router-dom";

// Optional: Map your slugs to nice titles and descriptions
const collectionDetails = {
  "leather-strap": {
    name: "Leather Strap Collection",
    subtitle: "Classic Horology",
    description: "Explore our handcrafted leather strap timepieces built for refined elegance."
  },
  "stainless-steel": {
    name: "Stainless Steel Collection",
    subtitle: "Timeless Architecture",
    description: "Discover durable, precision-engineered stainless steel watches."
  },
  "mesh-strap": {
    name: "Mesh Strap Collection",
    subtitle: "Modern Precision",
    description: "Sleek, lightweight mesh straps for contemporary minimalist style."
  },
  "rubber-strap": {
    name: "Rubber Strap Collection",
    subtitle: "Sport & Performance",
    description: "High-performance luxury watches crafted for extreme durability and sport."
  }
};

const CollectionPage = () => {
  // 1. Get the dynamic URL parameter (matches :category in your route)
  const { category } = useParams();

  // 2. Find details for the selected collection, or fallback if unknown
  const currentCollection = collectionDetails[category] || {
    name: category ? category.replace("-", " ") : "Collection",
    subtitle: "Curated Selection",
    description: "Explore our luxury timepieces."
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Breadcrumb / Back Link */}
        <Link 
          to="/" 
          className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-[#D4AF37] transition-colors mb-8 inline-block"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          ← Back to Home
        </Link>

        {/* Dynamic Header showing the selected collection name */}
        <div className="text-center my-12">
          <span 
            className="text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-medium block mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {currentCollection.subtitle}
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extralight tracking-widest uppercase text-white mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {currentCollection.name}
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm font-light">
            {currentCollection.description}
          </p>
        </div>

        {/* Product Grid Placeholder */}
        <div className="border border-dashed border-zinc-800 rounded-lg p-12 text-center text-zinc-600">
          Showing products filtered for: <span className="text-[#D4AF37] font-mono">{category}</span>
        </div>

      </div>
    </div>
  );
};

export default CollectionPage;