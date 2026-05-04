import  { useState } from "react";

const cities = [
  { name: "Madurai", desc: "200+ Outlets - Headquarter City" },
  { name: "Chennai", desc: "Expanding Presence" },
  { name: "Coimbatore", desc: "Growing Network" },
  { name: "Trichy", desc: "Active Distribution" },
  { name: "Salem & Beyond", desc: "Pan Tamil Nadu Coverage" },
];

const Outlets = () => {
  const [active, setActive] = useState(0);

  return (
    <div id="outlets"
      className="py-20 bg-cover bg-center scroll-mt-32"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkhuwectt/image/upload/v1777443892/Rectangle_9_lsj4a0.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-primary text-sm uppercase">| Our Outlets</p>
          <h2 className="text-5xl font-body font-bold mt-2">
            Sweetness Served <span className="text-primary font-affogato">Everywhere</span>
          </h2>
          <p className="text-gray-600 mt-3">
            With over 200 outlets in Madurai alone and a growing presence across Tamil Nadu, SK Enterprises is never far from you.
          </p>

          <div className="mt-8 space-y-3">
            {cities.map((city, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`p-4 rounded-xs cursor-pointer border transition ${
                  active === i
                    ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-l-4 border-pink-500"
                    : "bg-white/70 hover:bg-white"
                }`}
              >
                <h4 className="font-semibold">{city.name}</h4>
                <p className="text-sm text-pink-500">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443891/10_AI_SEO_Tactics_to_Dominate_Google_Maps_in_2026_1_ut40ji.png"
            className="rounded-xs shadow-lg"
          />
            <div className="absolute inset-0 grid place-content-center text-white text-2xl">
            <h1 className="text-center text-5xl">Tamil Nadu </h1>
            <p className="text-center text-xs">200+ Outlets & Counting</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
