import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Component/context/CartContext';

import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Collections from './Pages/Collections';
import ProductDetail from './Pages/ProductDetail'; // Import page
import ScrollToTop from './Component/ScrollToTop';
import Checkout from './Pages/Checkout';
import CodPolicy from './Pages/CodPolicy';
import OrderTracking from './Pages/OrderTracking';
import WarrantyServicing from './Pages/WarrantyServicing';
import ReturnPolicy from './Pages/ReturnPolicy';
import AuthenticityGuarantee from './Pages/AuthenticityGuarantee';
import WatchesPage from './Pages/WatchesPage';
function App() {
  return (
    <CartProvider>
      <div className="bg-black min-h-screen flex flex-col justify-between">
        <Header />
        <ScrollToTop />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/collections" element={<Collections />} />
            {/* Dynamic Product Page */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cod-policy" element={<CodPolicy />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/warranty" element={<WarrantyServicing />} />
            <Route path="/returns" element={<ReturnPolicy />} />
            <Route path="/authenticity" element={<AuthenticityGuarantee />} />  
            <Route path="/watches" element={<WatchesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;