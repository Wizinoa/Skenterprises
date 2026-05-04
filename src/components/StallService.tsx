
const images = [
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443712/Rectangle_4573_1_gvff2g.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443712/Rectangle_4576_2_klo2x4.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443468/Rectangle_4573_sxns8a.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443467/Rectangle_4576_rgu4r1.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443712/Rectangle_4573_2_e6xla9.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443466/Rectangle_4576_1_xkknaf.png",
];

const StallService = () => {
  return (
    <div className="pt-20 bg-white text-center">
      <p className="text-primary text-sm uppercase">| Our Event Stall Services</p>
      <h2 className="text-4xl font-body mt-2 font-bold">
        Delight Every <span className="font-affogato text-primary">Occasion</span>
      </h2>
      <p className="text-gray-600 mt-3 max-w-4xl mx-auto">
        From weddings to corporate events, our ice cream stalls bring joy, flavor, and a memorable experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12 px-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-md">
            <img src={img} className="w-full h-56 object-cover hover:scale-105 transition duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StallService;