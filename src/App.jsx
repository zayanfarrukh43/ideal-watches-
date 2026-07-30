import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;