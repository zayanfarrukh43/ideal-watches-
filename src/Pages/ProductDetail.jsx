import React, { useState, useEffect } from "react";
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

const API_BASE_URL = "https://backen-watches.vercel.app";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, buyNow } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("specs");

  // Fetch from /api/watches first; fall back to /api/watch-straps if not found
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        setLoading(true);

        // Attempt 1: Fetch from watches endpoint
        const watchResponse = await fetch(`${API_BASE_URL}/api/watches/${id}`);
        const watchResult = await watchResponse.json();

        if (watchResult.success && watchResult.data) {
          setProduct({ ...watchResult.data, itemType: "watch" });
          const initialImg = watchResult.data.images?.[0]?.url || 'https://via.placeholder.com/800x800/09090b/ffffff?text=Watch';
          setSelectedImage(initialImg);
          return;
        }

        // Attempt 2: Fallback to watch-straps endpoint
        const strapResponse = await fetch(`${API_BASE_URL}/api/watch-straps/${id}`);
        const strapResult = await strapResponse.json();

        if (strapResult.success && strapResult.data) {
          setProduct({ ...strapResult.data, itemType: "strap" });
          const initialImg = strapResult.data.images?.[0]?.url || 'https://via.placeholder.com/800x800/09090b/ffffff?text=Strap';
          setSelectedImage(initialImg);
          return;
        }

        setError('Item not found in watches or straps collection.');
      } catch (err) {
        console.error('Failed to fetch item details:', err);
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchItemDetails();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: selectedImage,
        ref: product.referenceNo || product.strapType || "GENEVA-ACC",
      });
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    if (!product) return;

    for (let i = 0; i < quantity; i++) {
      buyNow({
        id: product._id,
        name: product.name,
        price: product.price,
        image: selectedImage,
        ref: product.referenceNo || product.strapType || "GENEVA-ACC",
      });
    }

    navigate("/checkout");
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  if (loading) {
    return (
      <div className="bg-white text-zinc-800 min-h-screen flex items-center justify-center font-mono text-sm tracking-widest uppercase">
        Loading Masterpiece...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="bg-white text-zinc-800 min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-sm tracking-widest uppercase font-mono">{error || 'Product not found.'}</p>
        <button
          onClick={() => navigate(-1)}
          className="text-xs text-[#8C6A12] uppercase tracking-widest border border-[#D4AF37]/40 px-5 py-2.5 rounded-full hover:bg-[#D4AF37] hover:text-black transition cursor-pointer"
        >
          Return to Collection
        </button>
      </div>
    );
  }

  const imagesList = product.images?.length > 0 
    ? product.images.map(img => img.url) 
    : ['https://via.placeholder.com/800x800/09090b/ffffff?text=Item'];

  // Map specifications dynamically for watches or straps
  const formattedSpecs = product.specifications ? {
    "Dial Finish": product.specifications.dialFinish,
    "Movement": product.specifications.movement,
    "Case Material": product.specifications.caseMaterial,
    "Case Diameter": product.specifications.caseDiameter,
    "Case Thickness": product.specifications.caseThickness,
    "Strap Material": product.specifications.strapMaterial,
    "Water Resistance": product.specifications.waterResistance
  } : {
    "Strap Style": product.strapType || "Leather/Metal",
    "Compatibility": "Universal Swiss Lug",
    "Buckle Finish": "Polished Steel",
    "Material": "Handcrafted Leather / Steel Alloy"
  };

  const displayTag = product.isBestSeller 
    ? "Best Seller" 
    : (product.category || product.strapType || "Accessory");

  return (
    <div className="bg-white text-zinc-900 min-h-screen px-4 sm:px-6 lg:px-12 py-6 sm:py-10 selection:bg-[#D4AF37] selection:text-black">
      <div className="max-w-[1280px] mx-auto">

        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between gap-6 border-b border-zinc-200 pb-4">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2.5 shrink-0 text-[11px] sm:text-xs tracking-[0.2em] text-zinc-900 font-semibold hover:text-[#8C6A12] uppercase transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back</span>
          </button>

          <nav className="hidden sm:flex items-center gap-2 min-w-0 text-[11px] text-zinc-600 tracking-[0.15em] uppercase">
            <span className="shrink-0">{product.brand || "Geneva Horology"}</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-900 font-semibold truncate">{product.name}</span>
          </nav>
        </div>

        {/* Main Grid: image | details (equal halves on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-start pt-6 sm:pt-10">

          {/* LEFT: Image Gallery (stays in view while scrolling details on desktop) */}
          <div className="lg:sticky lg:top-6">
            <div className="relative aspect-square w-full bg-white border border-zinc-200 rounded-2xl flex items-center justify-center p-6 sm:p-10 overflow-hidden group">
              {/* Tag Badge */}
              {displayTag && (
                <span
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C6A12] bg-white border border-[#D4AF37]/40 px-3 py-1 rounded-full"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {displayTag}
                </span>
              )}

              <img
                src={selectedImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1 scrollbar-none">
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    aria-label={`View image ${idx + 1}`}
                    className={`w-20 h-20 shrink-0 rounded-xl border bg-white p-1.5 overflow-hidden transition-all duration-300 cursor-pointer ${
                      selectedImage === imgUrl
                        ? "border-[#D4AF37] ring-1 ring-[#D4AF37]"
                        : "border-zinc-200 opacity-60 hover:opacity-100 hover:border-zinc-400"
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Details */}
          <div className="flex flex-col">

            {/* Meta row */}
            <div className="flex items-center justify-between gap-4">
              <span
                className="text-sm text-[#7A5C0F] tracking-[0.2em] uppercase font-extrabold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ref. {product.referenceNo || product.strapType || "ACC-GENEVA"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-800 font-semibold uppercase tracking-widest bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-full">
                <FaGem className="text-[#8C6A12]" /> Certified Authentic
              </span>
            </div>

            {/* Title + brand */}
            <h1
              className="mt-4 text-3xl sm:text-4xl xl:text-[2.75rem] font-semibold tracking-tight text-black leading-[1.1]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {product.name}
            </h1>
            <p
              className="mt-3 text-xs text-zinc-700 uppercase tracking-[0.2em] font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {product.brand || "Geneva Horology"} <span className="text-zinc-300 mx-1.5">|</span> {product.gender || "Universal"} Edition
            </p>

            {/* Price */}
            <div className="mt-6 py-5 border-y border-zinc-200">
              <p
                className="text-3xl sm:text-4xl text-[#8C6A12] font-bold tracking-wide leading-none"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Rs. {product.price?.toLocaleString()}
              </p>
              <p className="mt-2 text-[11px] text-zinc-600 uppercase tracking-widest font-semibold">
                Duty &amp; import taxes included
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
              {product.description || "Exquisite horological accessory crafted with precision standards and luxury finishes."}
            </p>

            {/* Purchase */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs uppercase text-zinc-900 font-semibold tracking-[0.2em]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Quantity
                </span>
                <span className="text-xs text-zinc-600 font-medium">
                  {product.stock === 0 ? "Out of stock" : `${product.stock ?? 10} in stock`}
                </span>
              </div>

              <div className="flex gap-3">
                {/* Quantity stepper */}
                <div className="flex items-center justify-between w-32 h-14 shrink-0 rounded-full border border-zinc-300 bg-white px-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-zinc-800 hover:text-[#8C6A12] transition-colors p-1 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="text-[11px]" />
                  </button>
                  <span className="text-base font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(product.stock ?? 10, q + 1))}
                    className="text-zinc-800 hover:text-[#8C6A12] transition-colors p-1 cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="text-[11px]" />
                  </button>
                </div>

                {/* Add To Bag */}
                <button
                  onClick={handleAddToCart}
                  disabled={added || product.stock === 0}
                  className={`flex-1 h-14 rounded-full font-semibold text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-2.5 ${
                    product.stock === 0
                      ? "bg-zinc-200 text-zinc-600 cursor-not-allowed"
                      : added
                        ? "bg-zinc-50 text-[#8C6A12] border border-[#D4AF37]"
                        : "bg-[#D4AF37] text-black hover:bg-[#c9a430] cursor-pointer"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {product.stock === 0 ? (
                    "Out of Stock"
                  ) : added ? (
                    <>
                      <FaCheck /> Added To Bag
                    </>
                  ) : (
                    <>
                      <FaShoppingBag /> Add To Bag
                    </>
                  )}
                </button>
              </div>

              {/* Buy Now */}
              {product.stock !== 0 && (
                <button
                  onClick={handleBuyNow}
                  className="mt-3 w-full h-14 rounded-full font-semibold text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center bg-black text-white hover:bg-[#D4AF37] hover:text-black cursor-pointer"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Buy Now • Rs. {(product.price * quantity).toLocaleString()}
                </button>
              )}
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <FaTruck className="text-[#8C6A12] text-base shrink-0" />
                <span className="text-xs leading-snug text-zinc-900 font-medium">Insured Express Shipping</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <FaShieldAlt className="text-[#8C6A12] text-base shrink-0" />
                <span className="text-xs leading-snug text-zinc-900 font-medium">Official Manufacturer Guarantee</span>
              </div>
            </div>

            {/* Details sections */}
            <div className="mt-8 border-t border-zinc-200">

              {/* Technical Specifications */}
              <div className="border-b border-zinc-200">
                <button
                  onClick={() => toggleAccordion("specs")}
                  className="w-full py-5 flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] text-zinc-900 font-bold hover:text-[#8C6A12] transition-colors cursor-pointer"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Technical Specifications</span>
                  {openAccordion === "specs" ? <FaChevronUp className="text-[#8C6A12]" /> : <FaChevronDown className="text-zinc-600" />}
                </button>
                {openAccordion === "specs" && (
                  <dl className="pb-5">
                    {Object.entries(formattedSpecs).map(([key, value]) => (
                      value && (
                        <div key={key} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 py-3 border-b border-zinc-100 last:border-0">
                          <dt className="text-[11px] text-zinc-600 font-semibold uppercase tracking-wider">{key}</dt>
                          <dd className="text-sm text-zinc-900 font-medium text-right">{value}</dd>
                        </div>
                      )
                    ))}
                  </dl>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-zinc-200">
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full py-5 flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] text-zinc-900 font-bold hover:text-[#8C6A12] transition-colors cursor-pointer"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>Shipping &amp; Returns</span>
                  {openAccordion === "shipping" ? <FaChevronUp className="text-[#8C6A12]" /> : <FaChevronDown className="text-zinc-600" />}
                </button>
                {openAccordion === "shipping" && (
                  <ul className="pb-5 space-y-3 text-sm text-zinc-800 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <FaTruck className="text-[#8C6A12] mt-1 shrink-0" /> Express insured courier delivery dispatched within 24–48 hours.
                    </li>
                    <li className="flex items-start gap-3">
                      <FaAward className="text-[#8C6A12] mt-1 shrink-0" /> {product.warranty || "Includes 2-Year official manufacturer global warranty coverage."}
                    </li>
                    <li className="flex items-start gap-3">
                      <FaUndo className="text-[#8C6A12] mt-1 shrink-0" /> 7-Day return policy on unworn pieces in original packaging.
                    </li>
                  </ul>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;