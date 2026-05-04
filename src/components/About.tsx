
const About = () => {
  return (
    <div id="about"  className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 scroll-mt-32">
      <img
        src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777463071/left_side_djggtp.svg"
        className="table m-auto"
      />

      <div>
        <p className="text-primary uppercase text-sm">| About Us</p>

        <h2 className="text-3xl font-bold mt-2">
          More Than Ice Cream A <span className="font-affogato text-primary">Legacy</span> of Sweetness
        </h2>

        <p className="mt-4 text-gray-600">
          SK Enterprises was born in the heart of Madurai with one simple belief: every person deserves a premium ice cream experience. From our humble beginnings to commanding a network of over 200 outlets, we have grown into Tamil Nadu's most trusted ice cream brand — serving retail customers and wholesale partners with the same passion and precision
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-[#995390] border-l-2 border-s-[#995390] border px-4 py-4 bg-[#f5f5f5] rounded-xl text-center shadow-sm">
            200+ <br/>
            <span>Outlets in Madurai</span>
          </div>
          <div className="text-[#995390] border-l-2 border-s-[#995390] px-4 py-4 bg-[#f5f5f5] rounded-xl text-center shadow-sm">
            TN <br />
            <span>Pan Tamil Nadu Presence</span>
          </div>
          <div className="text-[#995390] border-l-2 border-s-[#995390] px-4 py-4 bg-[#f5f5f5] rounded-xl text-center shadow-sm">
            2 <br />
            <span>Product Lines</span>
          </div>
          <div className="text-[#995390] border-l-2 border-s-[#995390] px-4 py-4 bg-[#f5f5f5] rounded-xl text-center shadow-sm">
           <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777447995/ip2nxeausd6syjqb1bjc.png"  className="w-5 h-5 table m-auto mb-2"/>
            <span className="">Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
