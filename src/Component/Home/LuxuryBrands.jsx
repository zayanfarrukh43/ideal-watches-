import React from "react";
import { Link } from "react-router-dom";

// Asset imports matching your exact directory
import armaniExchange from "../../assets/Brands/aramniexchange(4).webp";
import emporioArmani from "../../assets/Brands/armani.webp";
import boss from "../../assets/Brands/boss(6).webp";
import burberry from "../../assets/Brands/burberry(6).webp";
import versace from "../../assets/Brands/versace(3).webp";
import salavante from "../../assets/Brands/salavante(5).webp";
import fossil from "../../assets/Brands/Fossil.webp";
import gucci from "../../assets/Brands/GUCCI (1).webp";
import guess from "../../assets/Brands/guess(6).webp";
import justCavalli from "../../assets/Brands/justcavali.png";
import mauriceLacroix from "../../assets/Brands/lacroix(5).webp";
import longines from "../../assets/Brands/longines(4).webp";
import michealkros from "../../assets/Brands/michealkors.png";
import movado from "../../assets/Brands/movado(3).webp";
import pagani from "../../assets/Brands/pagani(5).webp";
import rado from "../../assets/Brands/rado(5).webp";
import tagHeuer from "../../assets/Brands/taghever(4).webp";
import tissot from "../../assets/Brands/tissot(2).webp";
import toryBurch from "../../assets/Brands/toryburch(5).webp";

const brands = [
  { name: "Gucci", logo: gucci, isBlackCard: true },
  { name: "Michael Kors", logo: michealkros, isBlackCard: false },
  { name: "Fossil", logo: fossil, isBlackCard: true },
  { name: "Emporio Armani", logo: emporioArmani, isBlackCard: false },
  { name: "Movado", logo: movado, isBlackCard: true },
  { name: "Tissot", logo: tissot, isBlackCard: false },
  { name: "Versace", logo: versace, isBlackCard: true }, // Set to true for black background
  { name: "Pagani Design", logo: pagani, isBlackCard: false },
  { name: "Guess", logo: guess, isBlackCard: true },
  { name: "Armani Exchange", logo: armaniExchange, isBlackCard: false },
  { name: "Boss", logo: boss, isBlackCard: true },
  { name: "Salvatore", logo: salavante, isBlackCard: false },
  { name: "Maurice Lacroix", logo: mauriceLacroix, isBlackCard: true },
  { name: "Just Cavalli", logo: justCavalli, isBlackCard: false },
  { name: "Longines", logo: longines, isBlackCard: true },
  { name: "Burberry", logo: burberry, isBlackCard: false },
  { name: "Rado", logo: rado, isBlackCard: true },
  { name: "TAG Heuer", logo: tagHeuer, isBlackCard: false },
  { name: "Tory Burch", logo: toryBurch, isBlackCard: true },
];

const LuxuryBrands = () => {
  return (
    <section className="bg-white py-8 sm:py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-12">
          <span className="w-6 sm:w-12 h-[1.5px] bg-gray-400" />
          <h2 className="text-base sm:text-2xl font-semibold text-gray-900 tracking-wide text-center uppercase">
            Shop By Original
          </h2>
          <span className="w-6 sm:w-12 h-[1.5px] bg-gray-400" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-5 lg:gap-6">
          {brands.map((brand, index) => {
            const isBlack = brand.isBlackCard;
            // Converts "Michael Kors" -> "michael-kors"
            const brandSlug = brand.name.toLowerCase().trim().replace(/\s+/g, "-");

            return (
              <Link
                to={`/brand/${brandSlug}`}
                key={brand.name || index}
                className={`w-[calc(33.33%-0.5rem)] lg:w-[calc(20%-1.25rem)] aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center p-1.5 sm:p-3 transition-transform duration-300 hover:scale-105 ${
                  isBlack ? "bg-black" : "bg-[#f5f5f7]"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="max-h-20 sm:max-h-28 w-auto max-w-[92%] object-contain"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBrands;