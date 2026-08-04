import React from "react";

const brands = [
  { name: "Just Cavalli", logo: "https://api.iconify.design/simple-icons:justcavalli.svg" },
  { name: "Tory Burch", logo: "https://api.iconify.design/simple-icons:toryburch.svg" },
  { name: "TAG Heuer", logo: "https://api.iconify.design/simple-icons:tagheuer.svg" },
  { name: "Versace", logo: "https://api.iconify.design/simple-icons:versace.svg" },
  { name: "Movado", logo: "https://api.iconify.design/simple-icons:movado.svg" },
  { name: "Tissot", logo: "https://api.iconify.design/simple-icons:tissot.svg" },
  { name: "Salvatore Ferragamo", logo: "https://api.iconify.design/simple-icons:ferragamo.svg" },
  { name: "Gucci", logo: "https://api.iconify.design/simple-icons:gucci.svg" },
  { name: "Maurice Lacroix", logo: "https://api.iconify.design/simple-icons:mauricelacroix.svg" },
  { name: "Burberry", logo: "https://api.iconify.design/simple-icons:burberry.svg" },
  { name: "Emporio Armani", logo: "https://api.iconify.design/simple-icons:emporioarmani.svg" },
  { name: "Guess", logo: "https://api.iconify.design/simple-icons:guess.svg" },
  { name: "Boss", logo: "https://api.iconify.design/simple-icons:hugoboss.svg" },
  { name: "Michael Kors", logo: "https://api.iconify.design/simple-icons:michaelkors.svg" },
  { name: "Tommy Hilfiger", logo: "https://api.iconify.design/simple-icons:tommyhilfiger.svg" },
  { name: "Fossil", logo: "https://api.iconify.design/simple-icons:fossil.svg" },
  { name: "Armani Exchange", logo: "https://api.iconify.design/simple-icons:armaniexchange.svg" },
  { name: "Daniel Wellington", logo: "https://api.iconify.design/simple-icons:danielwellington.svg" },
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
              className="aspect-square bg-[#ececec] flex items-center justify-center p-3 sm:p-6 cursor-pointer hover:bg-[#e2e2e2] transition-colors duration-200"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} icon logo`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "block";
                }}
                className="max-h-12 max-w-full object-contain filter grayscale contrast-200 opacity-90"
              />
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