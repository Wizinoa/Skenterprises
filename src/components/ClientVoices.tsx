import { useState } from "react";


const testimonials = [
  {
    name: "Sarah Jenkins",
    type:"Wedding Client",
    text: "SK Enterprises provided the ice cream stall for my daughter's wedding. The setup was beautiful and the flavors were a massive hit!",
  },
  {
    name: "Rahul Kumar",
    type:"Wedding Client",
    text: "Amazing service and top quality products. Highly recommend for events and bulk supply!",
  },
];

const ClientVoices = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div id="clients" className="py-20 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-primary text-sm uppercase">| Client Voices</p>
          <h2 className="text-4xl font-body font-bold mt-2">
            What Our <span className="text-primary font-affogato">Partners </span>Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by retailers, event organizers, and wholesale buyers across Tamil Nadu.
          </p>

          {/* <div className="flex gap-4 mt-6">
            <button onClick={prev}>
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_6_pupkb5.png" className="w-10" />
            </button>
            <button onClick={next}>
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_5_iry13p.png" className="w-10" />
            </button>
          </div> */}
        </div>

       {/* Right Card */}
<div className="relative w-full max-w-md mx-auto h-[450px]">

  {/* CENTER EMPTY PINK BOX (shifted LEFT) */}
  <div className="absolute top-[45%] left-[40%] w-full h-80 bg-pink-100 rounded-2xl -translate-x-1/2 -translate-y-1/2">
   <img
      src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443982/Button_4_ckpcqx.png"
      className="absolute -top-2 right-0 w-10"
    />
<div className="flex gap-3 mt-4 absolute left-4 bottom-16 xs:bottom-[4rem] md:bottom-6 left-4">
      <button onClick={prev}>
        <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_6_pupkb5.png" className="w-8" />
      </button>
      <button onClick={next}>
        <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_5_iry13p.png" className="w-8" />
      </button>
    </div>
  </div>

  {/* TOP LEFT CARD */}
  <div className="absolute top-0 left-0 bg-white shadow-md rounded-xl p-4 w-64 opacity-80 scale-95">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 bg-green-200 rounded-full"></div>
      <div>
      <p className="text-md font-semibold">
        {testimonials[(index + 1) % testimonials.length].name} <br />
      </p>
      
      <p className="text-xs"> {testimonials[(index + 1) % testimonials.length].type} </p>
      </div>
    </div>
    <p className="text-xs bg-pink-50 rounded-xs text-gray-500 line-clamp-3 px-4 py-1">
      {testimonials[(index + 1) % testimonials.length].text}
    </p>
  </div>

  {/* BOTTOM RIGHT CARD */}
  <div className="absolute bottom-0 right-0 bg-white shadow-md rounded-xl p-4 w-64 opacity-80 scale-95">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 bg-green-200 rounded-full"></div>
      <div>
      <p className="text-md font-semibold">
        {testimonials[(index + 2) % testimonials.length].name} <br />
      </p>
      
      <p className="text-xs"> {testimonials[(index + 2) % testimonials.length].type} </p>
      </div>
    </div>
    <p className="text-xs bg-pink-50 rounded-xs text-gray-500 line-clamp-3 px-4 py-1">
      {testimonials[(index + 2) % testimonials.length].text}
    </p>
  </div>

  {/* MAIN CARD (SHIFTED RIGHT & DOWN) */}
  {/* <div className="absolute top-[55%] left-[60%] w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 -translate-x-1/2 -translate-y-1/2 z-20">

    <img
      src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443982/Button_4_ckpcqx.png"
      className="absolute -top-5 right-2 w-10"
    />

    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-green-400 rounded-full"></div>
      <h4 className="font-semibold">{testimonials[index].name}</h4>
    </div>

    <div className="bg-gray-100 rounded-lg p-3">
      <p className="text-sm text-gray-600">
        {testimonials[index].text}
      </p>
    </div>

    <div className="flex gap-3 mt-4">
      <button onClick={prev}>
        <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_6_pupkb5.png" className="w-8" />
      </button>
      <button onClick={next}>
        <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777443979/Button_5_iry13p.png" className="w-8" />
      </button>
    </div>

  </div> */}

</div>
      </div>
    </div>
  );
};

export default ClientVoices;
