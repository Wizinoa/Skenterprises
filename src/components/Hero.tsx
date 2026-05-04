
const Hero = () => {

     const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkhuwectt/image/upload/v1777442224/download_26_1_j5e7fo.png')",
      }}
    >
      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative max-w-3xl w-full mx-auto">
        <p className="inline-block text-xs tracking-[3px] bg-[#f3e4e4] border rounded-full px-3 py-2 text-[#78555E] uppercase">
          Established in Madurai - Tamil Nadu's Finest
        </p>

        <h1 className="font-affogato text-3xl font-bold md:text-7xl mt-6 leading-tight">
          Where every scoop tells a{" "}
          <span className="text-primary italic">story</span>
        </h1>

        <p className="mt-6 text-[#610030] text-xs md:text-xl font-bold">
          Premium ice cream crafted for the discerning palate. From frozen
          delights to creamy indulgences — SK Enterprises serves the finest,
          one outlet at a time, across all of Tamil Nadu.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button onClick={() => scrollTo("services")} className="bg-primary text-white px-6 py-3 rounded-full shadow-md">
            Explore Our Range
          </button>

          <button onClick={() => scrollTo("outlets")} className="border border-black/20 px-6 py-3 rounded-full flex gap-2 items-center text-black bg-white">
            <img
              src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777442223/svg_uyna3v.png"
              className="w-4 h-4"
            />
            Find an Outlet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;