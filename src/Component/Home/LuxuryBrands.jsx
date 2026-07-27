import React from "react";

const brands = [
  { name: "Just Cavalli", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Just_Cavalli_logo.svg" },
  { name: "Tory Burch", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tory_Burch_logo.svg" },
  { name: "TAG Heuer", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/TAG_Heuer_Logo.svg" },
  { name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Versace_logo.svg" },
  { name: "Movado", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Movado_logo.svg" },
  { name: "Tissot", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Tissot_logo.svg" },
  { name: "Salvatore Ferragamo", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Salvatore_Ferragamo_logo.svg" },
  { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gucci_logo.svg" },
  { name: "Maurice Lacroix", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Maurice_Lacroix_logo.svg" },
  { name: "Burberry", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Burberry_logo.svg" },
  { name: "Emporio Armani", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Emporio_Armani_logo.svg" },
  { name: "Guess", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Guess_logo.svg" },
  { name: "Boss", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Hugo_Boss_logo.svg" },
  { name: "Michael Kors", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Michael_Kors_logo.svg" },
  { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tommy_Hilfiger_logo.svg" },
  { name: "Fossil", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Fossil_Group_logo.svg" },
  { name: "Armani Exchange", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Armani_Exchange_logo.svg" },
  { name: "Daniel Wellington", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Daniel_Wellington_logo.svg" },
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

        {/* Brand Grid: 5 columns on desktop, responsive for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 justify-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name || index}
              className={`aspect-square bg-[#ececec] flex items-center justify-center p-6 cursor-pointer hover:bg-[#e2e2e2] transition-colors duration-200 ${
                index >= 15 ? "col-span-1" : ""
              }`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain filter grayscale contrast-200 opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBrands;