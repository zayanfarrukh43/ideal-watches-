import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  FaShieldAlt, 
  FaLock, 
  FaCreditCard, 
  FaMoneyBillWave, 
  FaMobileAlt, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaTag,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { useCart } from "../Component/context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart = [], clearCart } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    saveInfo: true,
  });

  // Shipping & Payment Options State
  const [shippingMethod, setShippingMethod] = useState("express"); // "express" | "priority"
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" | "cod" | "wallet"
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvc: "", name: "" });
  
  // Promo Code State
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  // UI States
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [showOrderSummaryMobile, setShowOrderSummaryMobile] = useState(false);

  // Calculated Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shippingCost = shippingMethod === "priority" ? 1500 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  // Form Input Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Promo Code Handler
  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "LUXURY10") {
      setDiscount(10);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try LUXURY10");
    }
  };

  // Submit Order Handler
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsProcessing(true);

    // Simulate Payment Processing API Call
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderId = "IW-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedOrderId);
      setOrderComplete(true);
      if (typeof clearCart === "function") clearCart();
    }, 2000);
  };

  // ORDER COMPLETE CONFIRMATION MODAL
  if (orderComplete) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-2xl">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] text-2xl sm:text-3xl">
            <FaCheckCircle />
          </div>

          <div className="space-y-2">
            <span 
              className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Order Confirmed
            </span>
            <h1 
              className="text-2xl sm:text-3xl font-light text-white leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Thank You For Your Purchase
            </h1>
            <p className="text-xs text-zinc-400">
              Order Number: <span className="text-white font-mono font-semibold">{orderId}</span>
            </p>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            We have sent a detailed order confirmation and receipt to{" "}
            <span className="text-zinc-200 font-medium">{formData.email || "your email"}</span>. Your watch is being prepared for dispatch.
          </p>

          <div className="pt-4 border-t border-zinc-900">
            <button
              onClick={() => navigate("/")}
              className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#b8952b] transition-all duration-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 
              className="text-xl sm:text-2xl font-extralight tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              IDEAL <span className="text-[#D4AF37]">WATCHES</span>
            </h1>
          </Link>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <FaLock className="text-[#D4AF37] shrink-0" />
            <span className="hidden sm:inline">256-Bit SSL Encrypted Checkout</span>
            <span className="sm:hidden text-[10px] uppercase tracking-wider text-zinc-500">Secure</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        
        {/* Mobile Accordion Toggle for Order Summary */}
        <div className="lg:hidden mb-6 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden transition-all">
          <button
            onClick={() => setShowOrderSummaryMobile(!showOrderSummaryMobile)}
            className="w-full p-4 flex items-center justify-between text-xs uppercase tracking-widest text-zinc-300 hover:bg-zinc-900/50 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">
                {showOrderSummaryMobile ? "Hide Order Summary" : "Show Order Summary"}
              </span>
              {showOrderSummaryMobile ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <span className="text-sm font-semibold text-[#D4AF37]">
              Rs. {grandTotal.toLocaleString()}
            </span>
          </button>

          {showOrderSummaryMobile && (
            <div className="p-4 border-t border-zinc-900 space-y-4 bg-black/90">
              <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <p className="text-xs text-zinc-500 text-center py-2">Your shopping bag is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg p-1 shrink-0 flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-black text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {item.quantity || 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 text-xs">
                        <p className="font-medium text-white truncate">{item.name}</p>
                        <p className="text-zinc-500 text-[10px]">Qty: {item.quantity || 1}</p>
                      </div>
                      <span className="text-xs text-[#D4AF37] shrink-0 font-medium">
                        Rs. {(item.price * (item.quantity || 1)).toLocaleString()}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code Input on Mobile */}
              <form onSubmit={handleApplyPromo} className="pt-3 border-t border-zinc-900 space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <FaTag className="absolute left-3 top-3 text-zinc-600 text-xs" />
                    <input
                      type="text"
                      placeholder="Promo Code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-2 py-2 text-xs text-white uppercase placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-zinc-300 uppercase tracking-wider hover:border-[#D4AF37]"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && <p className="text-[10px] text-emerald-400">10% Discount Applied!</p>}
                {promoError && <p className="text-[10px] text-rose-400">{promoError}</p>}
              </form>

              {/* Totals Breakdown */}
              <div className="pt-3 border-t border-zinc-900 space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">Rs. {subtotal.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white">
                    {shippingCost === 0 ? "FREE" : `Rs. ${shippingCost.toLocaleString()}`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Shipping & Payment Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-[#D4AF37] uppercase tracking-wider transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <FaArrowLeft /> Return to Cart
            </button>

            <form onSubmit={handleSubmitOrder} className="space-y-6 sm:space-y-8">
              
              {/* SECTION 1: Contact Details */}
              <div className="space-y-4">
                <h2 
                  className="text-lg sm:text-xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  1. Contact Details
                </h2>

                <div className="space-y-3">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address (for order tracking)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile Phone Number (e.g. 0300 1234567)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* SECTION 2: Shipping Address */}
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <h2 
                  className="text-lg sm:text-xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  2. Delivery Address
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Street Address, House/Apartment No."
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="City (e.g. Karachi, Lahore)"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal / ZIP Code (Optional)"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* SECTION 3: Shipping Method */}
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <h2 
                  className="text-lg sm:text-xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  3. Shipping Options
                </h2>

                <div className="space-y-3">
                  <label 
                    onClick={() => setShippingMethod("express")}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                      shippingMethod === "express" ? "bg-zinc-950 border-[#D4AF37]" : "bg-black border-zinc-900 hover:border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={shippingMethod === "express"} readOnly className="accent-[#D4AF37]" />
                      <div>
                        <p className="text-xs font-medium text-white">Complimentary Express Shipping</p>
                        <p className="text-[10px] text-zinc-400">Insured Delivery in 2–4 Business Days</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-semibold shrink-0">FREE</span>
                  </label>

                  <label 
                    onClick={() => setShippingMethod("priority")}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                      shippingMethod === "priority" ? "bg-zinc-950 border-[#D4AF37]" : "bg-black border-zinc-900 hover:border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={shippingMethod === "priority"} readOnly className="accent-[#D4AF37]" />
                      <div>
                        <p className="text-xs font-medium text-white">VIP Priority Air Dispatch</p>
                        <p className="text-[10px] text-zinc-400">Guaranteed Next-Day / 24-Hour Express</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-semibold shrink-0">Rs. 1,500</span>
                  </label>
                </div>
              </div>

              {/* SECTION 4: Payment Methods */}
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <h2 
                  className="text-lg sm:text-xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  4. Payment Method
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-xl border text-center flex sm:flex-col items-center justify-center gap-2 transition-all ${
                      paymentMethod === "card" ? "bg-zinc-950 border-[#D4AF37] text-[#D4AF37]" : "border-zinc-900 text-zinc-400 hover:border-zinc-800"
                    }`}
                  >
                    <FaCreditCard className="text-base sm:text-lg" />
                    <span className="text-[10px] tracking-wider uppercase font-medium">Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-3 rounded-xl border text-center flex sm:flex-col items-center justify-center gap-2 transition-all ${
                      paymentMethod === "cod" ? "bg-zinc-950 border-[#D4AF37] text-[#D4AF37]" : "border-zinc-900 text-zinc-400 hover:border-zinc-800"
                    }`}
                  >
                    <FaMoneyBillWave className="text-base sm:text-lg" />
                    <span className="text-[10px] tracking-wider uppercase font-medium">Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("wallet")}
                    className={`p-3 rounded-xl border text-center flex sm:flex-col items-center justify-center gap-2 transition-all ${
                      paymentMethod === "wallet" ? "bg-zinc-950 border-[#D4AF37] text-[#D4AF37]" : "border-zinc-900 text-zinc-400 hover:border-zinc-800"
                    }`}
                  >
                    <FaMobileAlt className="text-base sm:text-lg" />
                    <span className="text-[10px] tracking-wider uppercase font-medium">Wallet / Transfer</span>
                  </button>
                </div>

                {/* Sub-Panel: Credit Card */}
                {paymentMethod === "card" && (
                  <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl space-y-3">
                    <input
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardChange}
                      placeholder="Card Number (16 Digits)"
                      required
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        placeholder="MM / YY"
                        required
                        className="bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                      <input
                        type="password"
                        name="cvc"
                        value={cardDetails.cvc}
                        onChange={handleCardChange}
                        placeholder="CVC / CVV"
                        required
                        className="bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                )}

                {/* Sub-Panel: Cash on Delivery */}
                {paymentMethod === "cod" && (
                  <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl text-xs text-zinc-400 leading-relaxed">
                    Pay in cash upon delivery to your doorstep. Please have exact change ready for the courier agent.
                  </div>
                )}

                {/* Sub-Panel: Digital Wallets */}
                {paymentMethod === "wallet" && (
                  <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl space-y-2 text-xs text-zinc-400">
                    <p className="text-white font-medium">JazzCash / EasyPaisa / Online Direct Transfer</p>
                    <p className="text-[11px] leading-relaxed">
                      Payment instructions and account details will be dispatched immediately via SMS/Email after you confirm your order.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing || cart.length === 0}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
                  isProcessing || cart.length === 0
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-[#D4AF37] text-black hover:bg-[#b8952b] shadow-[#D4AF37]/10"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {isProcessing ? (
                  <span className="animate-pulse">Processing Order...</span>
                ) : (
                  <>
                    <FaLock className="text-xs" /> Complete Order • Rs. {grandTotal.toLocaleString()}
                  </>
                )}
              </button>

            </form>
          </div>

          {/* RIGHT COLUMN: Order Summary Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 hidden lg:block sticky top-24">
            <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-6">
              
              <h2 
                className="text-xl font-light text-white tracking-wide uppercase border-b border-zinc-900 pb-4"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Order Summary ({cart.reduce((a, c) => a + (c.quantity || 1), 0)})
              </h2>

              {/* Items List */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <p className="text-xs text-zinc-500 text-center py-6">Your shopping bag is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-black border border-zinc-900 rounded-xl p-1 flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                          {item.quantity || 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-light text-white truncate">{item.name}</p>
                        {item.ref && <p className="text-[9px] text-zinc-500 uppercase">REF. {item.ref}</p>}
                      </div>
                      <span className="text-xs text-[#D4AF37] font-light shrink-0">
                        Rs. {(item.price * (item.quantity || 1)).toLocaleString()}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="pt-4 border-t border-zinc-900 space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <FaTag className="absolute left-3 top-3 text-zinc-600 text-xs" />
                    <input
                      type="text"
                      placeholder="Promo Code (LUXURY10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white uppercase placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] rounded-xl text-[10px] text-zinc-300 uppercase tracking-widest transition-all"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && <p className="text-[10px] text-emerald-400">10% Promo Discount Applied!</p>}
                {promoError && <p className="text-[10px] text-rose-400">{promoError}</p>}
              </form>

              {/* Subtotal Calculations */}
              <div className="space-y-2 pt-4 border-t border-zinc-900 text-xs text-zinc-400 font-light">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">Rs. {subtotal.toLocaleString()}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white">
                    {shippingCost === 0 ? "FREE" : `Rs. ${shippingCost.toLocaleString()}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-normal text-white pt-3 border-t border-zinc-900">
                  <span>Total Amount</span>
                  <span className="text-[#D4AF37] font-semibold text-base">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="p-4 bg-black/60 border border-zinc-900 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <FaShieldAlt /> <span>Ideal Watches Guarantee</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Every order includes a 2-Year Official International Warranty and complimentary insured delivery.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;