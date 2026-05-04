
const products = [
  {
    title: "Frozen Ice Creams",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442359/Frame_zjp5ab.png",
    desc: "Bold, refreshing frozen treats that deliver an intense burst of flavour crafted to stay crisp and delightful in every bite.",
    tag: "Best Seller",
    btn: "Frozen Line",
  },
  {
    title: "Milk & Creamy",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442355/Frame_1_s9ymmj.png",
    desc: "Rich, indulgent ice creams made with premium milk blends smooth textures and deep flavours for a luxurious experience.",
    tag: "Best Seller",
    btn: "Creamy Line",
  },
  {
    title: "Retail Packs",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442354/Frame_2_ecwuc2.png",
    desc: "Ready-to-enjoy individual and family packs, perfectly portioned for retail shelves and walk-in customers.",
    tag: "Best Seller",
    btn: "Retail",
  },
  {
    title: "Wholesale Supply",
    img: "https://res.cloudinary.com/dkhuwectt/image/upload/v1777442353/Frame_3_nll9fm.png",
    desc: "Bulk supply solutions for distributors, retailers, and institutional buyers consistent quality, reliable delivery.",
    tag: "Best Seller",
    btn: "Wholesale",
  },
];

const Products = () => {
  return (
    <div id="products" className="py-20 bg-[#f7f3f6] text-center scroll-mt-32">
      <p className="text-primary text-sm uppercase">| Our Products</p>

      {/* FIXED FONT */}
      <h2 className="text-4xl font-body mt-2 font-bold">
        Crafted for Every Craving
      </h2>

      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Two distinct product lines each perfected over years available for retail and wholesale.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12 px-6 max-w-7xl mx-auto">
        {products.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition flex flex-col justify-between"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
              {item.tag}
            </span>

            {/* Icon */}
            <div className="flex justify-center mb-4 mt-4">
              <img src={item.img} className="w-16 h-16 object-contain" />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3">
              {item.desc}
            </p>

            {/* Button */}
            <div className="mt-6">
            <button className="w-full border border-pink-300 text-pink-500 py-2 rounded-full text-sm hover:bg-pink-500 hover:text-white transition">
            {item.btn}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;