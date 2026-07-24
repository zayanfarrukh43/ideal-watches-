const brands = [
  {
    name: "Rolex",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Rolex_logo.svg",
  },
  {
    name: "Omega",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Omega_Logo.svg",
  },
  {
    name: "TAG Heuer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/TAG_Heuer_Logo.svg",
  },
  {
    name: "Tissot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Tissot_logo.svg",
  },
  {
    name: "Longines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Longines_logo.svg",
  },
  {
    name: "Breitling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Breitling_logo.svg",
  },
  {
    name: "Hublot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Hublot_logo.svg",
  },
  {
    name: "Panerai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Panerai_logo.svg",
  },
];

const LuxuryBrands = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Gold Line */}

        <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto mb-5"></div>

        {/* Heading */}

        <h2
          className="text-center text-5xl lg:text-6xl font-bold text-black"
          style={{
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          Luxury Watch Brands
        </h2>

        <p
          className="text-center mt-5 text-zinc-600 uppercase tracking-[5px] font-semibold"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Official Authorized Collections
        </p>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">

          {brands.map((brand) => (

            <div
              key={brand.name}
              className="group bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:border-[#D4AF37] duration-500 p-10 text-center"
            >

              {/* Logo */}

              <div className="h-24 flex justify-center items-center">

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 duration-500"
                />

              </div>

              {/* Gold Divider */}

              <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto my-6 group-hover:w-20 duration-500"></div>

              {/* Brand Name */}

              <h3
                className="text-2xl font-bold text-black tracking-wide group-hover:text-[#D4AF37] duration-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 700,
                }}
              >
                {brand.name}
              </h3>

              {/* Subtitle */}

              <p
                className="mt-3 text-[12px] uppercase tracking-[3px] text-zinc-500 font-semibold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Swiss Luxury Watches
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Text */}

        <div className="mt-20 text-center">

          <h3
            className="text-4xl font-bold text-black"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Discover Timeless Excellence
          </h3>

          <p
            className="mt-6 max-w-3xl mx-auto text-zinc-600 leading-8 font-medium"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Explore the world's most iconic luxury watch brands, celebrated for
            precision engineering, timeless craftsmanship, and unmatched
            elegance. Every collection is curated to deliver authenticity and
            prestige.
          </p>

        </div>

      </div>

    </section>
  );
};

export default LuxuryBrands;