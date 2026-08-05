import React from "react";

// Imports matching your exact filenames in src/assets/Brands/
import armaniExchange from "../../assets/Brands/Armani_Exchange_Logo.webp";
import burberry from "../../assets/Brands/bruburry.webp";
import danielWellington from "../../assets/Brands/dw.png";
import emporioArmani from "../../assets/Brands/Emporio_Armani_Logo.webp";
import ferragamo from "../../assets/Brands/ferragamo_logo_2.webp";
import fossil from "../../assets/Brands/Fossil_Logo.webp";
import gucci from "../../assets/Brands/gucci.webp";
import guess from "../../assets/Brands/Guess_Logo.webp";
import boss from "../../assets/Brands/Hugo_Boss_Logo.webp";
import justCavalli from "../../assets/Brands/justcalvli.webp";
import mauriceLacroix from "../../assets/Brands/Maurice_Lacroix_Logo.webp";
import michaelKors from "../../assets/Brands/Michael_Kors_Logo.webp";
import movado from "../../assets/Brands/movado.webp";
import tagHeuer from "../../assets/Brands/tagheurer.webp";
import tissot from "../../assets/Brands/tissot.webp";
import tommyHilfiger from "../../assets/Brands/Tommy_Hilgiger_Logo.webp";
import toryBurch from "../../assets/Brands/torrybury2.webp";
import versace from "../../assets/Brands/versace.webp";

const brands = [
  { name: "Just Cavalli", logo: justCavalli },
  { name: "Tory Burch", logo: toryBurch },
  { name: "TAG Heuer", logo: tagHeuer },
  { name: "Versace", logo: versace },
  { name: "Movado", logo: movado },
  { name: "Tissot", logo: tissot },
  { name: "Salvatore Ferragamo", logo: ferragamo },
  { name: "Gucci", logo: gucci },
  { name: "Maurice Lacroix", logo: mauriceLacroix },
  { name: "Burberry", logo: burberry },
  { name: "Emporio Armani", logo: emporioArmani },
  { name: "Guess", logo: guess },
  { name: "Boss", logo: boss },
  { name: "Michael Kors", logo: michaelKors },
  { name: "Tommy Hilfiger", logo: tommyHilfiger },
  { name: "Fossil", logo: fossil },
  { name: "Armani Exchange", logo: armaniExchange },
  { name: "Daniel Wellington", logo: danielWellington },
];

const LuxuryBrands = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-bold text-gray-900 tracking-wider uppercase inline-block relative pb-2">
            SHOP BY BRAND
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gray-800" />
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-4 justify-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name || index}
              className="aspect-square bg-[#ececec] flex items-center justify-center p-3 sm:p-5 cursor-pointer hover:bg-[#e2e2e2] transition-colors duration-200 group overflow-hidden"
            >
              {/* Image Container Wrapper for Perfect Centering & Sizing */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallbackSpan = e.currentTarget.parentElement.nextElementSibling;
                    if (fallbackSpan) {
                      fallbackSpan.classList.remove("hidden");
                    }
                  }}
                  className="w-full h-full object-contain mix-blend-multiply opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Text Fallback if Image Fails */}
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-gray-800 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBrands;