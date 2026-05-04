
const items = [
  "Frozen Delights",
  "Creamy Classics",
  "Wholesale & Retail",
  "Outlet Freezer Supply",
  "Event Catering",
  "200+ Outlets in Madurai",
  "Pan Tamil Nadu Distribution",
];

const HighlightStrip = () => {
  return (
    <div className="hidden md:block bg-black text-white py-4 overflow-x-auto px-6">
      <div className="flex gap-10 whitespace-nowrap">
        {items.map((text, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777442252/Icon_lig5sx.png"
              alt="icon"
              className="w-4 h-4 object-contain"
            />
            <span className="text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightStrip;