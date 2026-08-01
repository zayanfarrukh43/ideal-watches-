import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaShoppingBag, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaTruck, 
  FaMinus, 
  FaPlus, 
  FaCheck, 
  FaChevronDown, 
  FaChevronUp, 
  FaGem,
  FaUndo,
  FaAward
} from "react-icons/fa";
import { useCart } from "../Component/context/CartContext";

// High-End Luxury Master Products List
const allProducts = [
  {
    id: 1,
    title: "Daniel Wellington Classic",
    subtitle: "Ultra-Thin Quartz • Signature Monochromes",
    ref: "DW-0204DW",
    price: 14000,
    priceDisplay: "Rs. 14,000",
    tag: "Best Seller",
    images: [
      "https://via.placeholder.com/800x800/09090b/ffffff?text=DW+0204DW+Front",
      "https://via.placeholder.com/800x800/121215/ffffff?text=DW+0204DW+Profile",
      "https://via.placeholder.com/800x800/1a1a1e/ffffff?text=DW+0204DW+Wrist"
    ],
    highlights: [
      "Surgical-Grade 316L Stainless Steel Case",
      "Hand-Stitched Italian Calfskin Leather",
      "Scratch-Resistant Sapphire Crystal Coated Glass"
    ],
    description: 
      "Embodying pure minimalist elegance, the Classic 0204DW pairs an architectural 6mm ultra-thin case with an eggshell-white dial. Engineered with high-precision Japanese quartz, this centerpiece transitions effortlessly from formal black-tie events to elevated everyday wear.",
    specs: { 
      "Dial Finish": "Eggshell White with Polished Baton Markers", 
      "Movement": "Japanese Quartz (Miyota Precision)", 
      "Case Material": "316L Surgical Stainless Steel", 
      "Case Diameter": "40mm",
      "Case Thickness": "6mm Ultra-Slim",
      "Strap Material": "Supple Italian Genuine Leather",
      "Water Resistance": "3 ATM (30 Meters - Splash Resistant)"
    }
  },
  {
    id: 4,
    title: "Tommy Hilfiger Chronograph",
    subtitle: "Precision Timing • Grand Horizon Edition",
    ref: "TH-1791421",
    price: 25000,
    priceDisplay: "Rs. 25,000",
    tag: "Featured Masterpiece",
    images: [
      "https://via.placeholder.com/800x800/09090b/ffffff?text=Tommy+1791421+Front",
      "https://via.placeholder.com/800x800/121215/ffffff?text=Tommy+1791421+Detail"
    ],
    highlights: [
      "Deep Sunray Blue Multi-Function Dial",
      "Brushed and Polished Dual-Finish Steel Bracelet",
      "Integrated Tachymeter Outer Bezel"
    ],
    description: 
      "A bold expression of modern sport luxury. Featuring a deep ocean-blue sunray dial framed by an engraved tachymeter bezel, this timepiece combines classic precision sub-dials with rugged architectural steel construction.",
    specs: { 
      "Dial Finish": "Deep Sunray Blue with Luminous Indices", 
      "Movement": "Multi-Function Quartz Chronograph", 
      "Case Material": "Brushed & Polished Stainless Steel", 
      "Case Diameter": "44mm",
      "Strap Material": "Solid Stainless Steel Link Bracelet",
      "Water Resistance": "5 ATM (50 Meters)"
    }
  },
  {
    id: 6,
    title: "Michael Kors Laney Watch",
    subtitle: "Radiant PVD Gold • Crystal Paved Bezel",
    ref: "MK-4892",
    price: 27000,
    priceDisplay: "Rs. 27,000",
    tag: "Limited Edition",
    images: [
      "https://via.placeholder.com/800x800/09090b/ffffff?text=MK+4892+Front",
      "https://via.placeholder.com/800x800/121215/ffffff?text=MK+4892+Angle"
    ],
    highlights: [
      "Precision-Set Pavé Crystal Bezel Ring",
      "Rich Champagne Sunray Dial with Roman Numerals",
      "Gold PVD Electroplated Scratch-Resistant Finish"
    ],
    description: 
      "Crafted for moments that demand sophistication, the Laney features an intricate hand-set crystal bezel that captures ambient light from every angle. Finished in rich warm gold tones, it serves as both a high-precision instrument and jewelry centerpiece.",
    specs: { 
      "Dial Finish": "Champagne Gold Sunray", 
      "Movement": "High-Precision Swiss-Engineered Quartz", 
      "Case Material": "PVD Gold-Plated Stainless Steel", 
      "Case Diameter": "38mm",
      "Strap Material": "Gold-Tone Metal Link Bracelet",
      "Water Resistance": "5 ATM (50 Meters)"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = allProducts.find((item) => item.id === Number(id)) || allProducts[0];

  const imagesList = product.images || [product.image];
  const [selectedImage, setSelectedImage] = useState(imagesList[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("specs");

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: selectedImage,
        ref: product.ref,
      });
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="bg-[#08080a] text-zinc-100 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-12 selection:bg-[#D4AF37] selection:text-black">
      <div className="max-w-[1340px] mx-auto space-y-10 sm:space-y-12">
        
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800/80 pb-5 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-zinc-400 hover:text-[#D4AF37] uppercase transition-all duration-300"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300 text-zinc-500 group-hover:text-[#D4AF37]" />
            <span>Return to Collection</span>
          </button>
          
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
            <span>Collections</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-300 font-medium">{product.title}</span>
          </div>
        </div>

        {/* Hero Section: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* LEFT: Image Gallery Stage (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/80 rounded-3xl p-6 sm:p-12 flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
              
              {/* Luxury Accent Halo Background */}
              <div className="absolute inset-0 bg-radial from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

              {/* Tag Badge */}
              {product.tag && (
                <div 
                  className="absolute top-5 left-5 text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] bg-black/80 backdrop-blur-md px-4 py-1.5 border border-[#D4AF37]/30 rounded-full z-10 flex items-center gap-2 shadow-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  {product.tag}
                </div>
              )}

              <img
                src={selectedImage}
                alt={product.title}
                className="w-full max-h-[460px] sm:max-h-[540px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_25px_25px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-3.5 pt-1 overflow-x-auto pb-2 scrollbar-none">
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl border p-2 bg-zinc-950 overflow-hidden transition-all duration-300 flex-shrink-0 ${
                      selectedImage === imgUrl 
                        ? "border-[#D4AF37] ring-1 ring-[#D4AF37] opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.25)]" 
                        : "border-zinc-800/80 hover:border-zinc-600 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail view" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Details (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* Header Details */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span 
                  className="text-[10px] text-[#D4AF37] tracking-[0.35em] uppercase font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  REF. {product.ref}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1 rounded-full">
                  <FaGem className="text-[#D4AF37] text-xs" /> Certified Authentic
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {product.title}
              </h1>

              {product.subtitle && (
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] font-medium">
                  {product.subtitle}
                </p>
              )}

              {/* Price Display */}
              <div className="pt-3 flex items-baseline gap-4 border-t border-zinc-900">
                <span 
                  className="text-3xl sm:text-4xl text-[#D4AF37] font-light tracking-wide"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {product.priceDisplay}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                  Duty & Import Taxes Included
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Highlights Feature List */}
            {product.highlights && (
              <ul className="space-y-2 py-3 border-y border-zinc-900">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Quantity Selector & Action Button */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <span 
                  className="text-[11px] uppercase text-zinc-400 tracking-[0.2em]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Quantity
                </span>
                
                <div className="flex items-center justify-between w-32 h-11 rounded-full border border-zinc-800 bg-zinc-950 px-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-zinc-400 hover:text-[#D4AF37] transition-colors p-1"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="text-[10px]" />
                  </button>
                  <span className="text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-zinc-400 hover:text-[#D4AF37] transition-colors p-1"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="text-[10px]" />
                  </button>
                </div>
              </div>

              {/* Add To Bag CTA */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-4 sm:py-4.5 rounded-full font-medium text-xs uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl ${
                  added 
                    ? "bg-zinc-900 text-[#D4AF37] border border-[#D4AF37]/60 shadow-[0_0_20px_rgba(212,175,55,0.2)]" 
                    : "bg-[#D4AF37] text-black hover:bg-[#e0bc43] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {added ? (
                  <>
                    <FaCheck className="text-sm" /> Added To Your Bag
                  </>
                ) : (
                  <>
                    <FaShoppingBag />
                    Acquire Item • {(product.price * quantity).toLocaleString("en-PK", { style: "currency", currency: "PKR" })}
                  </>
                )}
              </button>
            </div>

            {/* Accordions */}
            <div className="space-y-3 pt-3">
              
              {/* Technical Specifications Accordion */}
              <div className="border border-zinc-800/80 bg-zinc-950/60 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors">
                <button
                  onClick={() => toggleAccordion("specs")}
                  className="w-full p-4.5 flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] text-zinc-200 hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Technical Specifications</span>
                  {openAccordion === "specs" ? <FaChevronUp className="text-[#D4AF37]" /> : <FaChevronDown className="text-zinc-500" />}
                </button>
                {openAccordion === "specs" && (
                  <div className="p-4.5 pt-0 space-y-2.5 text-xs text-zinc-300 border-t border-zinc-900/80 mt-1">
                    {Object.entries(product.specs || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1.5 border-b border-zinc-900/60 last:border-0 gap-4">
                        <span className="text-zinc-400 uppercase tracking-wider text-[10px] shrink-0">{key}</span>
                        <span className="text-zinc-100 font-light text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Complimentary Shipping & Warranty Accordion */}
              <div className="border border-zinc-800/80 bg-zinc-950/60 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors">
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full p-4.5 flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] text-zinc-200 hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Shipping & Global Warranty</span>
                  {openAccordion === "shipping" ? <FaChevronUp className="text-[#D4AF37]" /> : <FaChevronDown className="text-zinc-500" />}
                </button>
                {openAccordion === "shipping" && (
                  <div className="p-4.5 pt-0 space-y-3 text-xs text-zinc-400 border-t border-zinc-900/80 mt-1 leading-relaxed">
                    <p className="flex items-center gap-2">
                      <FaTruck className="text-[#D4AF37]" /> Express insured courier delivery dispatched within 24–48 hours.
                    </p>
                    <p className="flex items-center gap-2">
                      <FaAward className="text-[#D4AF37]" /> Includes 2-Year official manufacturer global warranty coverage.
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUndo className="text-[#D4AF37]" /> 7-Day return policy on unworn pieces in original box.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-3 bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <FaTruck className="text-[#D4AF37] text-base shrink-0" />
                <span className="text-[11px] leading-tight text-zinc-300">Insured Worldwide Express Shipping</span>
              </div>
              <div className="flex items-center gap-3 bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <FaShieldAlt className="text-[#D4AF37] text-base shrink-0" />
                <span className="text-[11px] leading-tight text-zinc-300">2-Year Official Manufacturer Guarantee</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;