import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTag, 
  FaShoppingBag, 
  FaClock, 
  FaPercent, 
  FaCheck, 
  FaArrowLeft,
  FaShieldAlt,
  FaCalendarAlt
} from "react-icons/fa";
import { useCart } from "../Component/context/CartContext"; // Adjust path if needed

const SaleDetailPage = () => {
  const { id } = useParams(); // Gets the campaign ID from route: /sales/:id
  const navigate = useNavigate();

  // Pull addToCart from CartContext
  const { addToCart } = useCart();

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartNotification, setCartNotification] = useState(null);

  // Fetch individual sale campaign and its populated watches from backend (Updated to production Vercel URL)
  useEffect(() => {
    const fetchCampaignDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://backen-watches.vercel.app/api/sales/${id}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch campaign details.");
        }

        const result = await response.json();
        const campaignData = result.data || result;
        setCampaign(campaignData);
      } catch (err) {
        console.error("Error fetching sale details:", err);
        setError("Could not load sale campaign details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCampaignDetail();
    }
  }, [id]);

  // Add to Cart Handler with Discount Calculation & LocalStorage Sync
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
      
      // Trigger Toast Notification
      setCartNotification(watch.name);
      setTimeout(() => {
        setCartNotification(null);
      }, 2500);
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
        Loading Campaign Details...
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="bg-white text-zinc-900 min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <FaTag className="text-3xl text-zinc-300" />
        <h2 className="text-xl font-light uppercase tracking-wider" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          Campaign Not Found
        </h2>
        <p className="text-xs text-zinc-500 font-light max-w-md">
          {error || "The sale event you are looking for might have ended or does not exist."}
        </p>
        <button
          onClick={() => navigate("/sales")}
          className="bg-zinc-900 hover:bg-[#D4AF37] text-white text-xs uppercase tracking-widest px-6 py-3 transition-colors mt-2 cursor-pointer"
        >
          Back to Sales Events
        </button>
      </div>
    );
  }

  const discountVal = campaign.discountPercentage || 0;

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

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation & Back Action */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-[10px]" />
            <span>Return</span>
          </button>
        </div>

        {/* Campaign Hero Showcase */}
        <div className="bg-zinc-900 text-white p-8 sm:p-12 rounded-sm shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden border-l-4 border-[#D4AF37]">
          <div className="space-y-4 max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs">
              {discountVal}% Discount Active
            </div>
            
            <h1 
              className="text-3xl sm:text-5xl font-light tracking-wide text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {campaign.title}
            </h1>
            
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {campaign.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-zinc-400 font-light border-t border-white/10">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#D4AF37]" /> 
                {new Date(campaign.startDate).toLocaleDateString()} — {new Date(campaign.endDate).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-[#D4AF37]" /> Brand: <strong className="text-white">{campaign.applicableBrand}</strong>
              </span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-center shrink-0 z-10 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Special Promotion</p>
            <p className="text-4xl sm:text-5xl font-light text-[#D4AF37] my-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Save {discountVal}%
            </p>
            <p className="text-[11px] text-zinc-300 font-light">Applied directly at checkout</p>
          </div>
        </div>

        {/* Populated Watches Collection Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Collection Timepieces ({campaign.watches?.length || 0})
            </h2>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Status: {campaign.isActive ? "Active Event" : "Concluded"}
            </span>
          </div>

          {!campaign.watches || campaign.watches.length === 0 ? (
            <div className="text-center py-20 bg-zinc-50 border border-zinc-200 rounded-sm">
              <p className="text-xs text-zinc-500 font-light uppercase tracking-wider">No timepieces are currently linked to this sale event.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaign.watches.map((watch) => {
                const watchId = watch._id || watch.id;
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
                      
                      {/* Discount Tag */}
                      <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[9px] uppercase tracking-widest px-2.5 py-1 font-bold rounded-xs">
                        {discountVal}% OFF
                      </span>
                    </div>

                    {/* Product Information & Add to Cart Action */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1">
                        <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest block font-semibold">
                          {watch.brand}
                        </span>
                        <h3 
                          className="text-base font-normal text-zinc-900 line-clamp-1"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {watch.name}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <div>
                          <p className="text-[9px] text-zinc-400 uppercase tracking-wider">Event Price</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-zinc-900">
                              PKR {discountedPrice.toLocaleString()}
                            </span>
                            <span className="text-[11px] text-zinc-400 line-through font-light">
                              PKR {originalPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Add to Cart Function */}
                        <button
                          onClick={() => handleAddToCart(watch, discountVal)}
                          className="bg-zinc-900 hover:bg-[#D4AF37] text-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <FaShoppingBag className="text-xs" />
                          <span>Add to Cart</span>
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

export default SaleDetailPage;