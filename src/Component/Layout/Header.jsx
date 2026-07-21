import { Link } from "react-router-dom";
import {
  FaSearch,
  FaRegHeart,
  FaRegUser,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-black border-b border-zinc-800">

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================= */}
        {/* Desktop Header */}
        {/* ========================= */}

        <div className="hidden lg:flex items-center justify-between h-24">

          {/* Logo */}

          <Link to="/" className="flex-shrink-0">

            <h1 className="text-5xl font-light tracking-[10px] text-white leading-none">
              IDEAL
            </h1>

            <p className="text-sm tracking-[6px] text-zinc-400 mt-1">
              WATCHES
            </p>

          </Link>

          {/* Search */}

          <div className="flex-1 max-w-2xl mx-14 relative">

            <input
              type="text"
              placeholder="Search watches, brands & collections..."
              className="w-full h-14 rounded-lg bg-[#111] border border-zinc-700 pl-6 pr-14 text-white placeholder:text-zinc-500 focus:border-[#D4AF37] outline-none duration-300"
            />

            <button className="absolute right-5 top-1/2 -translate-y-1/2">

              <FaSearch className="text-zinc-400 hover:text-[#D4AF37] text-xl duration-300" />

            </button>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-10">

            {/* Wishlist */}

            <Link
              to="/wishlist"
              className="group flex flex-col items-center"
            >

              <div className="relative">

                <FaRegHeart className="text-2xl text-white group-hover:text-[#D4AF37] duration-300" />

                <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] flex items-center justify-center font-semibold">
                  2
                </span>

              </div>

              <span className="text-xs mt-2 text-zinc-400 group-hover:text-[#D4AF37] duration-300">
                Wishlist
              </span>

            </Link>

            {/* Account */}

            <Link
              to="/account"
              className="group flex flex-col items-center"
            >

              <FaRegUser className="text-2xl text-white group-hover:text-[#D4AF37] duration-300" />

              <span className="text-xs mt-2 text-zinc-400 group-hover:text-[#D4AF37] duration-300">
                Account
              </span>

            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              className="group flex flex-col items-center"
            >

              <div className="relative">

                <FaShoppingBag className="text-2xl text-white group-hover:text-[#D4AF37] duration-300" />

                <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] flex items-center justify-center font-semibold">
                  3
                </span>

              </div>

              <span className="text-xs mt-2 text-zinc-400 group-hover:text-[#D4AF37] duration-300">
                Cart
              </span>

            </Link>

          </div>

        </div>

        {/* ========================= */}
        {/* Mobile Header */}
        {/* ========================= */}

        <div className="lg:hidden">

          {/* Top Row */}

          <div className="flex items-center justify-between h-16">

            {/* Menu */}

            <button className="text-white">

              <FaBars className="text-2xl" />

            </button>

            {/* Logo */}

            <Link
              to="/"
              className="text-center"
            >

              <h1 className="text-3xl tracking-[6px] text-white leading-none">
                IDEA
              </h1>

              <p className="text-[10px] tracking-[4px] text-zinc-400 mt-1">
                WATCHES
              </p>

            </Link>

            {/* Icons */}

            <div className="flex items-center gap-5">

              <button className="relative">

                <FaRegHeart className="text-xl text-white" />

              </button>

              <button className="relative">

                <FaShoppingBag className="text-xl text-white" />

                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">
                  3
                </span>

              </button>

            </div>

          </div>

          {/* Mobile Search */}

          <div className="pb-4">

            <div className="relative">

              <input
                type="text"
                placeholder="Search watches..."
                className="w-full h-12 rounded-lg bg-[#111] border border-zinc-700 pl-4 pr-12 text-white placeholder:text-zinc-500 focus:border-[#D4AF37] outline-none duration-300"
              />

              <button className="absolute right-4 top-1/2 -translate-y-1/2">

                <FaSearch className="text-zinc-400" />

              </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;