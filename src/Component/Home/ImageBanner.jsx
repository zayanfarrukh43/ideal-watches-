import React from 'react';
import { Link } from 'react-router-dom';

// Web-optimised copies of Banner 2 in src/assets/banner
// (web: 2400x800 = 3:1, mobile: 1080x1919 = 9:16)
import bannerWeb from '../../assets/Banner 2 v 2.png';
import bannerMobile from '../../assets/Banner mobile layout v2.png';

export default function ImageBanner() {
  return (
    <section className="w-full bg-[#FCFCFB] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Framed image card. Phones (< 768px) get the tall mobile layout, everything
          else the wide web layout. The frame matches each image's own shape, so the
          banner always shows in full with nothing cropped. */}
      <Link
        to="/collections"
        className="group relative block w-full max-w-[1600px] mx-auto overflow-hidden rounded-2xl bg-black aspect-[1080/1919] md:aspect-[3/1]"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={bannerMobile} />
          <img
            src={bannerWeb}
            alt="Ideal Watches - Luxury Watches"
            loading="lazy"
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover select-none group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
        </picture>

        {/* Shop Now - bottom-centre on phones (plain area under the watch),
            bottom-right on larger screens (clear of the banner's own text) */}
        <span
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-6 md:right-6 z-10 whitespace-nowrap bg-white text-[#1A1A1A] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase px-7 py-3.5 group-hover:bg-[#D4AF37] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Shop Now
        </span>
      </Link>
    </section>
  );
}
