import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTag, 
  FaShoppingBag, 
  FaHeart, 
  FaRegHeart, 
  FaPercent,
  FaCheck,
  FaArrowRight,
  FaEye
} from "react-icons/fa";
import { useCart } from "../Component/context/CartContext"; // Adjust path if needed

const SalesPage = () => {
  const navigate = useNavigate();

  // Pull addToCart from CartContext
  const { addToCart } = useCart();

  // Backend Data States
  const [activeSales, setActiveSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Selected Campaign Tab State
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  // Wishlist & Cart Feedback States
  const [wishlist, setWishlist] = useState([]);
  const [cartNotification, setCartNotification] = useState(null);

  // Fetch Active Sales Campaigns from Backend API (Updated to production Vercel URL)
  useEffect(() => {
    const fetchSales = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://backen-watches.vercel.app/api/sales/active");
        
        if (!response.ok) {
          throw new Error("Failed to fetch active sales campaigns.");
        }

        const result = await response.json();
        const salesData = Array.isArray(result) ? result : (result.data || []);
        
        setActiveSales(salesData);
        
        // Automatically select the first active sale campaign if available
        if (salesData.length > 0) {
          setSelectedCampaignId(salesData[0]._id || salesData[0].id);
        }
      } catch (err) {
        console.error("Error fetching sales:", err);
        setError("Could not connect to the server or load active sales.");
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  // Memoized current active campaign based on selection
  const currentCampaign = useMemo(() => {
    return activeSales.find(
      (sale) => (sale._id || sale.id) === selectedCampaignId
    ) || activeSales[0];
  }, [activeSales, selectedCampaignId]);

  // Toggle Wishlist Handler
  const toggleWishlist = (e, watchId) => {
    e.stopPropagation(); // Prevents event bubbling
    setWishlist((prev) =>
      prev.includes(watchId) ? prev.filter((id) => id !== watchId) : [...prev, watchId]
    );
  };

  // Add to Cart Handler using Context & Discount Calculation
  const handleAddToCart = (watch, discountPercent) => {
    const watchId = watch._id || watch.id;
    const selectedImg = renderImage(watch.images || watch.image);

    const originalPrice = watch.price || 0;
    const discountedPrice = Math.round(originalPrice * (1 - discountPercent / 100));

    const cartItem = {
      id: watchId,
      name: watch.name,
      price: discountedPrice,
      originalPrice: originalPrice,
      appliedDiscount: discountPercent,
      image: selectedImg,
      ref: watch.referenceNo,
      quantity: 1,
    };

    if (typeof addToCart === 'function') {
      addToCart(cartItem);

      // Trigger visual toast notification
      setCartNotification(watch.name);
      setTimeout(() => {
        setCartNotification(null);
      }, 3000);
    } else {
      console.error("addToCart function is missing from context or props.");
    }
  };

  // Safe Image URL Extractor for Cloudinary or standard strings
  const renderImage = (imageSource) => {
    if (!imageSource || imageSource.length === 0) {
      return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";
    }
    if (Array.isArray(imageSource)) {
      return imageSource[0]?.url || imageSource[0];
    }
    return imageSource.url || imageSource;
  };

  if (loading) {
    return (
      <div className="bg-white text-zinc-500 min-h-screen flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em]">
        Loading Exclusive Sales Events...
      </div>
    );
  }

  if (error || activeSales.length === 0) {
    return (
      <div className="bg-white text-zinc-900 min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <FaTag className="text-3xl text-zinc-300" />
        <h2 className="text-xl font-light uppercase tracking-wider" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          No Active Sales Campaigns Right Now
        </h2>
        <p className="text-xs text-zinc-500 font-light max-w-md">
          {error || "Check back soon for exclusive seasonal price drops and limited-time watch collections."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-zinc-900 hover:bg-[#D4AF37] text-white text-xs uppercase tracking-widest px-6 py-3 transition-colors mt-2 cursor-pointer"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const discountVal = currentCampaign?.discountPercentage || 0;
  const currentCampaignId = currentCampaign?._id || currentCampaign?.id;

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#D4AF37] selection:text-black relative">
      
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {cartNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-6 left-1/2 z-50 bg-zinc-900 text-white px-6 py-3 rounded-sm shadow-xl flex items-center gap-3 border border-[#D4AF37]"
          >
            <FaCheck className="text-[#D4AF37] text-sm" />
            <div className="text-xs">
              <p className="font-semibold">Added to Cart with Discount!</p>
              <p className="text-zinc-400 text-[10px] line-clamp-1">{cartNotification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3 pb-6 border-b border-zinc-200">
          <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
            <FaPercent className="text-xs" />
            <span className="text-[11px] uppercase tracking-[0.35em] font-semibold font-mono">
              Limited Time Price Reductions
            </span>
          </div>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Exclusive Timepiece Sales
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Campaign Switcher Tabs (If multiple active sales) */}
        {activeSales.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3">
            {activeSales.map((sale) => {
              const saleId = sale._id || sale.id;
              const isSelected = saleId === selectedCampaignId;
              return (
                <button
                  key={saleId}
                  onClick={() => setSelectedCampaignId(saleId)}
                  className={`text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                      : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-[#D4AF37]"
                  }`}
                >
                  {sale.title} ({sale.discountPercentage}% OFF)
                </button>
              );
            })}
          </div>
        )}

        {/* Campaign Products Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Included Timepieces ({currentCampaign?.watches?.length || 0})
              </h3>
            </div>
            
            {currentCampaignId && (
              <button
                onClick={() => navigate(`/sales/${currentCampaignId}`)}
                className="text-xs uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Dedicated Page</span>
                <FaArrowRight className="text-[9px]" />
              </button>
            )}
          </div>

          {!currentCampaign?.watches || currentCampaign.watches.length === 0 ? (
            <div className="text-center py-16 bg-zinc-50 border border-zinc-200 rounded-sm">
              <p className="text-xs text-zinc-500 font-light uppercase tracking-wider">No specific watches attached to this campaign.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCampaign.watches.map((watch) => {
                const watchId = watch._id || watch.id;
                const isWishlisted = wishlist.includes(watchId);
                const watchImage = renderImage(watch.images || watch.image);
                
                const originalPrice = watch.price || 0;
                const discountedPrice = Math.round(originalPrice * (1 - discountVal / 100));

                return (
                  <motion.div
                    key={watchId}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white border border-zinc-200 rounded-sm overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
                  >
                    {/* Watch Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-100">
                      <img
                        src={watchImage}
                        alt={watch.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Discount Badge */}
                      <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[9px] uppercase tracking-widest px-2.5 py-1 font-bold rounded-xs">
                        {discountVal}% OFF
                      </span>

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => toggleWishlist(e, watchId)}
                        aria-label="Wishlist toggle"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 shadow-sm z-10 cursor-pointer"
                      >
                        {isWishlisted ? (
                          <FaHeart className="text-xs text-red-500" />
                        ) : (
                          <FaRegHeart className="text-xs text-zinc-600 hover:text-red-500" />
                        )}
                      </button>
                    </div>

                    {/* Product Information */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1">
                        <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest block font-semibold">
                          {watch.brand}
                        </span>
                        <h3 
                          className="text-base font-normal text-zinc-900 line-clamp-1 group-hover:text-[#D4AF37] transition-colors"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {watch.name}
                        </h3>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-zinc-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[9px] text-zinc-400 uppercase tracking-wider">Sale Price</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-zinc-900">
                                PKR {discountedPrice.toLocaleString()}
                              </span>
                              <span className="text-[11px] text-zinc-400 line-through font-light">
                                PKR {originalPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(watch, discountVal);
                            }}
                            className="bg-zinc-900 hover:bg-[#D4AF37] text-white px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <FaShoppingBag className="text-xs" />
                            <span>Add</span>
                          </button>
                        </div>

                        {/* Dedicated View Detail Button */}
                        <button
                          onClick={() => navigate(`/sales/${currentCampaignId}`)}
                          className="w-full bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 hover:border-[#D4AF37] py-2 rounded-sm text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer font-medium"
                        >
                          <FaEye className="text-xs text-[#D4AF37]" />
                          <span>View Detail</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SalesPage;