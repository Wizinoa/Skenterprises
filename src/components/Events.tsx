
const events = [
  {
    title: "Weddings",
    desc: "Elegant ice cream stations for your special day, staffed and beautifully presented.",
    bg: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777456872/Background_vniiaf.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777444108/Button_pqvvyx.png",
  },
  {
    title: "Corporate Events",
    desc: "Premium branded ice cream experiences for conferences, launches, and team events.",
    bg: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777456871/Background_1_yy6u2h.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777444106/Button_1_wxlnkh.png",
  },
  {
    title: "Festivals & Fairs",
    desc: "Large-scale event supply for festivals, fairs, and community gatherings.",
    bg: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777456871/Background_1_yy6u2h.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777444104/Button_2_lfv80h.png",
  },
  {
    title: "Birthday Parties",
    desc: "Fun, colourful setups that make every birthday celebration extra special.",
    bg: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777456872/Background_vniiaf.png",
    icon: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777444103/Button_3_ytdxro.png",
  },
];

const Events = () => {
  return (
    <div id="events" className="py-20 bg-[#f4eef2] text-center scroll-mt-32">
      <p className="text-primary text-sm uppercase">| Events & Occasions</p>

      <h2 className="text-4xl font-body font-bold mt-2">
        Making Your{" "}
        <span className="font-affogato text-primary">Moments</span> Sweeter
      </h2>

      <p className="text-gray-600 mt-3 max-w-7xl mx-auto">
        We bring the joy of premium ice cream to every celebration. Our event services are tailored to make your occasion truly memorable.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto px-6">
        {events.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-8 text-left text-white bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${item.bg})` , borderRadius: "30px"}}
          >
            <img src={item.icon} className="w-10 mb-4" />

            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="text-sm mt-2 text-white/90">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;