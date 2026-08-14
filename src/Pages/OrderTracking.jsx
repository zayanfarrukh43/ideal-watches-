import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaBox, 
  FaTruck, 
  FaCheckCircle, 
  FaClock, 
  FaPhoneAlt, 
  FaExclamationCircle,
  FaMapMarkerAlt
} from "react-icons/fa";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [contactInput, setContactInput] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");

  // Live Backend Lookup Handler
  const handleTrackOrder = async (e) => {
    e.preventDefault();
    if (!orderId.trim() || !contactInput.trim()) {
      setError("Please enter both your Order ID and Email or Phone Number.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const isEmail = contactInput.includes("@");
      const queryParam = isEmail ? `email=${encodeURIComponent(contactInput.trim())}` : `phone=${encodeURIComponent(contactInput.trim())}`;

      // Configured with your live Vercel backend deployment URL
      const API_BASE_URL = import.meta.env?.VITE_API_URL || process.env?.REACT_APP_BACKEND_URL || "https://backen-watches.vercel.app";

      const response = await fetch(`${API_BASE_URL}/api/orders/track/${orderId.trim().toUpperCase()}?${queryParam}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Order not found with the provided details.");
      }

      const apiOrder = result.data;
      
      // Determine status timeline index based on order status
      let statusIdx = 1;
      const currentStatus = (apiOrder.orderStatus || apiOrder.status || "").toLowerCase();
      if (currentStatus === "verified" || currentStatus === "processing" || currentStatus === "pending") statusIdx = 1;
      if (currentStatus === "dispatched" || currentStatus === "shipped") statusIdx = 2;
      if (currentStatus === "out for delivery") statusIdx = 3;
      if (currentStatus === "delivered") statusIdx = 4;

      // Extract actual products from backend orderItems
      const formattedProducts = apiOrder.orderItems && apiOrder.orderItems.length > 0
        ? apiOrder.orderItems.map(item => `${item.name || item.watch?.name || "Product"} (Qty: ${item.quantity || 1})`).join(", ")
        : "N/A";

      setOrderData({
        id: apiOrder.orderId || apiOrder._id,
        customerName: apiOrder.shippingAddress?.fullName || "Valued Customer",
        city: apiOrder.shippingAddress?.city || "Pakistan",
        product: formattedProducts,
        totalAmount: `PKR ${Number(apiOrder.totalPrice || 0).toLocaleString()}`,
        paymentMethod: apiOrder.paymentMethod || (apiOrder.isPaid ? "Paid Online" : "Cash on Delivery (COD)"),
        courier: apiOrder.courier || "TCS Express / Leopard Courier",
        trackingNumber: apiOrder.trackingNumber || `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
        statusIndex: statusIdx,
        statusText: apiOrder.orderStatus || apiOrder.status || "Processing",
        estimatedDelivery: apiOrder.estimatedDelivery || "2–4 Business Days",
        timeline: [
          { title: "Order Placed", date: apiOrder.createdAt ? new Date(apiOrder.createdAt).toLocaleDateString() : "Recent", completed: true, desc: "Order received successfully on website." },
          { title: "Verification", date: "Verified", completed: statusIdx >= 1, desc: "Confirmed via contact details provided." },
          { title: "Dispatched from Hub", date: statusIdx >= 2 ? "In Transit" : "Pending", completed: statusIdx >= 2, desc: "Handed over to courier partner." },
          { title: "Out for Delivery", date: statusIdx >= 3 ? "Today" : "Pending", completed: statusIdx >= 3, desc: "Assigned to local delivery rider." },
          { title: "Delivered", date: statusIdx >= 4 ? "Completed" : "Pending", completed: statusIdx >= 4, desc: "Awaiting recipient confirmation." },
        ]
      });
      setSearched(true);

    } catch (err) {
      console.warn("Error fetching order from backend:", err.message);
      setError(err.message || "Order not found with the provided details.");
      setOrderData(null);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 font-sans border-b border-zinc-200 min-h-[80vh]">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span 
            className="text-[#D4AF37] text-[11px] uppercase tracking-[0.35em] font-semibold block"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Real-Time Shipment Status
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-light text-zinc-900 uppercase tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Track Your Order
          </h1>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto pt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Enter your order reference ID and email or phone number used during checkout to monitor your shipment delivery.
          </p>
        </div>

        {/* Tracking Search Form */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-sm shadow-sm">
          <form onSubmit={handleTrackOrder} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Order ID <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 198987"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm uppercase"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Phone Number or Email <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="email@domain.com or phone"
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                />
              </div>
            </div>

            {error && !searched && (
              <p className="text-xs text-red-600 flex items-center gap-1.5 pt-1">
                <FaExclamationCircle /> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 hover:bg-[#D4AF37] text-white py-3.5 px-6 uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 rounded-sm shadow-sm cursor-pointer"
            >
              {loading ? (
                <>
                  <FaClock className="animate-spin text-sm" /> Searching Database...
                </>
              ) : (
                <>
                  <FaSearch className="text-xs" /> Track Shipment
                </>
              )}
            </button>
          </form>
        </div>

        {/* Search Results Display */}
        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {orderData ? (
                <div className="bg-white border border-zinc-200 rounded-sm p-6 sm:p-8 space-y-8 shadow-sm">
                  
                  {/* Order Overview Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                        Status: {orderData.statusText}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-normal text-zinc-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                        Order #{orderData.id}
                      </h2>
                      <p className="text-xs text-zinc-500 mt-0.5">Courier: <strong className="text-zinc-700">{orderData.courier}</strong> ({orderData.trackingNumber})</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-zinc-500">Estimated Delivery</p>
                      <p className="text-sm font-semibold text-zinc-900">{orderData.estimatedDelivery}</p>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-zinc-50 p-4 border border-zinc-200 text-xs">
                    <div>
                      <span className="text-zinc-500 block">Recipient</span>
                      <strong className="text-zinc-900">{orderData.customerName} ({orderData.city})</strong>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Product(s) Ordered</span>
                      <strong className="text-zinc-900 truncate block">{orderData.product}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Total Payable</span>
                      <strong className="text-zinc-900">{orderData.totalAmount}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Payment Mode</span>
                      <strong className="text-zinc-900">{orderData.paymentMethod}</strong>
                    </div>
                  </div>

                  {/* Timeline Tracker */}
                  <div className="space-y-6 pt-2">
                    <h3 className="text-sm uppercase tracking-wider text-zinc-900 font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Logistics Progress
                    </h3>
                    <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200">
                      {orderData.timeline.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-4">
                          <div className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-2 ${
                            step.completed 
                              ? "bg-zinc-900 border-zinc-900 text-white" 
                              : "bg-white border-zinc-300 text-zinc-400"
                          }`}>
                            {step.completed ? <FaCheckCircle className="text-[10px]" /> : idx + 1}
                          </div>
                          
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <h4 className={`text-sm font-medium ${step.completed ? "text-zinc-900" : "text-zinc-400"}`}>
                                {step.title}
                              </h4>
                              <span className="text-[10px] text-zinc-400 font-light">({step.date})</span>
                            </div>
                            <p className="text-xs text-zinc-600 font-light leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 p-8 text-center rounded-sm space-y-3">
                  <FaExclamationCircle className="text-amber-600 text-2xl mx-auto" />
                  <h3 className="text-base font-semibold text-amber-900">Order Not Found</h3>
                  <p className="text-xs text-amber-800 font-light max-w-md mx-auto">
                    We couldn't find an order matching ID <strong className="font-semibold">{orderId.toUpperCase()}</strong> with the provided contact information. Please check your details or contact concierge support.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Support Footer Note */}
        <div className="text-center pt-6 border-t border-zinc-200 space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Need immediate assistance regarding shipment?
          </p>
          <p className="text-sm font-semibold text-zinc-900 flex items-center justify-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <FaPhoneAlt className="text-[#D4AF37] text-xs" /> WhatsApp Concierge: +92 300 1234567
          </p>
        </div>

      </div>
    </section>
  );
};

export default OrderTracking;