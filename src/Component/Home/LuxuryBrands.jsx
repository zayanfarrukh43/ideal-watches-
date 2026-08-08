import React from "react";

// Imports matching your exact filenames in src/assets/Brands/
import armaniExchange from "../../assets/Brands/aramniexchange(4).webp";
import emporioArmani from "../../assets/Brands/armani.webp";
import boss from "../../assets/Brands/boss(6).webp";
import burberry from "../../assets/Brands/burberry(6).webp";
import danielWellington from "../../assets/Brands/dw.png";
import ferragamo from "../../assets/Brands/ferragamo_logo_2.webp";
import fossil from "../../assets/Brands/Fossil.webp";
import gucci from "../../assets/Brands/GUCCI (1).webp";
import guess from "../../assets/Brands/guess(6).webp";
import justCavalli from "../../assets/Brands/justcavalli(4).webp";
import mauriceLacroix from "../../assets/Brands/lacroix(5).webp";
import longines from "../../assets/Brands/longines(4).webp";
import movado from "../../assets/Brands/movado(3).webp";
import pagani from "../../assets/Brands/pagani(5).webp";
import rado from "../../assets/Brands/rado(5).webp";
import tagHeuer from "../../assets/Brands/taghever(4).webp";
import tissot from "../../assets/Brands/tissot(2).webp";
import toryBurch from "../../assets/Brands/toryburch(5).webp";
import versace from "../../assets/Brands/versace(3).webp";
const brands = [
  // Row 1
  { name: "Gucci", logo: gucci, isBlackCard: true },
  { name: "Michael Kors", logo: emporioArmani, isBlackCard: false },
  { name: "Fossil", logo: fossil, isBlackCard: true },
  { name: "Emporio Armani", logo: armaniExchange, isBlackCard: false },
  { name: "Movado", logo: movado, isBlackCard: true },

  // Row 2
  { name: "Tissot", logo: tissot, isBlackCard: false },
  { name: "Versace", logo: versace, isBlackCard: true },
  { name: "Pagani Design", logo: pagani, isBlackCard: false },
  { name: "Guess", logo: guess, isBlackCard: true },
  { name: "Armani Exchange", logo: danielWellington, isBlackCard: false },

  // Row 3
  { name: "Boss", logo: boss, isBlackCard: true },
  { name: "Salvatore Ferragamo", logo: ferragamo, isBlackCard: false },
  { name: "Maurice Lacroix", logo: mauriceLacroix, isBlackCard: true },
  { name: "Just Cavalli", logo: justCavalli, isBlackCard: false },
  { name: "Longines", logo: longines, isBlackCard: true },

  // Row 4 (Centered 4 items)
  { name: "Burberry", logo: burberry, isBlackCard: false },
  { name: "Rado", logo: rado, isBlackCard: true },
  { name: "TAG Heuer", logo: tagHeuer, isBlackCard: false },
  { name: "Tory Burch", logo: toryBurch, isBlackCard: true },
];

const LuxuryBrands = () => {
  return (
    <section className="bg-white py-8 sm:py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading with Decorative Lines */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-12">
          <span className="w-6 sm:w-12 h-[1.5px] bg-gray-400" />
          <h2 className="text-base sm:text-2xl font-semibold text-gray-900 tracking-wide text-center uppercase">
            Shop By Original
          </h2>
          <span className="w-6 sm:w-12 h-[1.5px] bg-gray-400" />
        </div>

        {/* 
          3 Boxes per row on Mobile: w-[calc(33.33%-0.5rem)]
          5 Boxes per row on Desktop: lg:w-[calc(20%-1.25rem)]
        */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-5 lg:gap-6">
          {brands.map((brand, index) => {
            const isBlack = brand.isBlackCard;

            return (
              <div
                key={brand.name || index}
                className={`w-[calc(33.33%-0.5rem)] lg:w-[calc(20%-1.25rem)] aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center p-1.5 sm:p-3 transition-transform duration-300 hover:scale-105 ${
                  isBlack ? "bg-black" : "bg-[#f5f5f7]"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  {brand.logo && (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="max-h-20 sm:max-h-28 w-auto max-w-[92%] object-contain"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBrands;