
const offers = [
  {
    title: "Retail Distribution",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442428/img_fs2miv.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448882/Frame_11_ltq7gp.png",
    desc: "Live serving counters with professional staff for weddings, birthdays, and corporate events.",
    tag: "Popular",
  },
  {
    title: "Wholesale Supply",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448615/Frame_9_jvznuj.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448879/Frame_12_r1qwky.png",
    desc: "Reliable wholesale distribution for supermarkets, cafes, and retail shops at competitive prices.",
  },
  {
    title: "Event Catering",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442422/Frame_4_mzkvdk.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448877/Frame_13_i1dpjg.png",
    desc: "Daily, weekly, or monthly rentals. Multiple sizes available for events or temporary shop setups.",
  },
   {
    title: "Outlet Freezer Supply",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448698/Frame_10_g120bk.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448875/Frame_14_o8ns8k.png",
    desc: "Daily, weekly, or monthly rentals. Multiple sizes available for events or temporary shop setups.",
  },
  {
    title: "Franchise & Dealership",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442419/Frame_6_ejxx3w.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448873/Frame_15_js1d0j.png",
    desc: "Reliable wholesale distribution for supermarkets, cafes, and retail shops at competitive prices.",
  },
  {
    title: "Custom Gifting",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442422/Frame_4_mzkvdk.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777448871/Frame_16_iuqg9i.png",
    desc: "Live serving counters with professional staff for weddings, birthdays, and corporate events.",
  }
];

const WeOffer = () => {
  return (
    <div id="services" className="py-20 bg-gradient-to-b from-[#2b001a] to-[#3a0025] text-white text-center scroll-mt-32">
      
      <p className="text-pink-400 text-sm uppercase">| What We Offer</p>

      {/* FIXED FONT */}
      <h2 className="text-4xl font-body mt-2 font-bold">
        End-to-End Ice Cream{" "}
        <span className="font-affogato text-pink-400">Solutions</span>
      </h2>

      <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
        From production to your doorstep we handle every aspect of the ice cream supply chain.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12 px-6 max-w-5xl mx-auto">
        {offers.map((item, i) => (
          <div
            key={i}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img src={item.img} className="w-full h-48 object-cover" />

              {/* Popular Tag */}
              {item.tag && (
                <span className="absolute top-3 right-3 bg-white text-pink-500 text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              
              {/* Icon + Title (same row) */}
              <div className="flex items-center gap-3 mb-3">
                <img src={item.icon} className="w-5 h-5" />
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeOffer;