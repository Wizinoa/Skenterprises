
const brands = [
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443753/Frame_97_dq0knj.png",
  "https://res.cloudinary.com/dkhuwectt/image/upload/v1777443753/WhatsApp_Image_2026-04-25_at_6.35.59_PM_1_bwx42n.png",
];

const TrustedBrands = () => {
  return (
    <div
      className="py-10 text-center bg-cover bg-bottom min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkhuwectt/image/upload/v1777443753/download_1_1_fahvnj.png')",
          marginTop:"30px"
      }}
    >
        <div className="">
      <p className="text-primary text-sm uppercase">| Trusted Products</p>

      <h2 className="text-4xl font-body mt-2 font-bold">
        Premium Ice Cream <span className="font-affogato text-primary">Brands</span> We Use
      </h2>

      <p className="text-gray-700 mt-3 max-w-3xl mx-auto text-xs font-2xl">
        We serve only the finest — Amul & Havmor for guaranteed taste, quality, and freshness.
      </p>

      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        {brands.map((img, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 w-64">
            <img src={img} className="w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrustedBrands;
