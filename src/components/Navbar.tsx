import { useState } from "react";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
    setDesktopOpen(false);
    setMobileOpen(false);
  };

  return (
    <div className="font-body absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 mt-6">

      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/95 backdrop-blur-xl text-white rounded-full py-2 px-6 shadow-lg">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777442148/ice-cream-cone_1_im4ayn.png"
            className="w-10 h-10"
          />
          <h1 className="text-sm md:text-lg font-semibold">
            SK <br />
            ENTERPRISES
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-sm">

          <button onClick={() => scrollTo("about")}>About</button>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => setDesktopOpen(!desktopOpen)}
              className="flex items-center gap-2"
            >
              Services <IoChevronDownOutline size={14} />
            </button>

            {desktopOpen && (
              <div className="absolute top-10 bg-white text-black rounded-xl shadow-lg w-44 py-2">
                <p onClick={() => scrollTo("services")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Retail</p>
                <p onClick={() => scrollTo("services")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wholesale</p>
                <p onClick={() => scrollTo("services")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Catering</p>
              </div>
            )}
          </div>

          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("outlets")}>Outlets</button>
          <button onClick={() => scrollTo("clients")}>Clients</button>
          <button onClick={() => scrollTo("events")}>Events</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden lg:block bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 rounded-full text-sm"
        >
          Get In Touch
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileMenu && (
        <div className="lg:hidden mt-4 bg-black text-white rounded-2xl p-6 space-y-4 shadow-xl">

          <button onClick={() => scrollTo("about")} className="block w-full text-left">About</button>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileMenu(!mobileOpen)}
              className="flex justify-between w-full"
            >
              Services <IoChevronDownOutline />
            </button>

            {mobileOpen && (
              <div className="mt-2 pl-4 space-y-2 text-gray-300">
                <p onClick={() => scrollTo("services")} className="cursor-pointer">Retail</p>
                <p onClick={() => scrollTo("services")} className="cursor-pointer">Wholesale</p>
                <p onClick={() => scrollTo("services")} className="cursor-pointer">Catering</p>
              </div>
            )}
          </div>

          <button onClick={() => scrollTo("products")} className="block w-full text-left">Products</button>
          <button onClick={() => scrollTo("outlets")} className="block w-full text-left">Outlets</button>
          <button onClick={() => scrollTo("clients")} className="block w-full text-left">Clients</button>
          <button onClick={() => scrollTo("events")} className="block w-full text-left">Events</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left">Contact</button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full bg-pink-500 py-3 rounded-full mt-4"
          >
            Get In Touch
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;