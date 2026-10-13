import React from 'react';
import { Link } from 'react-router-dom';

import bannerImage from '../../assets/Ideal Watches Web Banner.png';

export default function ImageBanner() {
  return (
    <section className="w-full bg-[#FCFCFB] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Framed image card. The banner is 3:1 - on phones/tablets a taller frame is
          used and the image is cropped from the right so the IDEAL text + watch stay
          in view; on desktop the full banner shows uncropped. */}
      <Link
        to="/collections"
        className="group relative block w-full max-w-[1600px] mx-auto overflow-hidden rounded-2xl bg-black aspect-[2/1] sm:aspect-[5/2] lg:aspect-[3/1]"
        style={{ maxHeight: '75vh' }}
      >
        <img
          src={bannerImage}
          alt="Ideal Watches - Timeless Style for Modern Men"
          loading="lazy"
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-[0%_50%] sm:object-[10%_50%] lg:object-center select-none group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
        />

        {/* Shop Now - sits bottom-right, clear of the banner's own text */}
        <span
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 bg-white text-[#1A1A1A] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 sm:px-7 sm:py-3.5 group-hover:bg-[#D4AF37] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Shop Now
        </span>
      </Link>
    </section>
  );
}
