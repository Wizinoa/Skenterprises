import { useState } from "react";

type FormType = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormType>({
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
});

const [errors, setErrors] = useState<Partial<FormType>>({});

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

 const validate = (): Partial<FormType> => {
  let newErrors: Partial<FormType> = {};

  if (!form.name.trim()) newErrors.name = "Name is required";

  if (!form.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!/^[0-9]{10}$/.test(form.phone)) {
    newErrors.phone = "Enter valid 10-digit phone";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Invalid email";
  }

  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  }

  return newErrors;
};

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Submitted:", form);

    // reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div id="contact" className="py-20 bg-white scroll-mt-32">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-[#2b001a] text-white p-10">

          <p className="text-pink-400 text-sm uppercase">| Our Reach</p>

          <h2 className="text-3xl font-body font-bold mt-2">
            Let’s Start a Conversation
          </h2>

          <p className="mt-4 text-gray-300 text-sm">
            Whether you're interested in wholesale partnerships or events.
          </p>

          <div className="mt-6 space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777457179/Icon_1_kt0n0z.png" className="w-5"/>
             <div>
              <p>Headquarters & Parlor</p>
              <p>No: 7-1-138, Near Siva Matters & Paravai Market, Auto Nagar Main Road, Paravai, Madurai-625402</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777457176/Phone_call_oragps.png" className="w-5"/>
            <div>
              <p>Phone</p>
              <p>+91 82208 83187</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777457173/Mail_s1roni.png" className="w-5"/>
             <div>
              <p>Email</p>
              <p>selva87.ece@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777457170/Icon_2_vmfm22.png" className="w-5"/>
              <div>
              <p>Working Hours</p>
              <p>Daily: 9:00 AM – 9:00 PM</p>
              </div>
            </div>

          </div>

          <button
  onClick={() => {
    const address = "1-138, 7th St, AIBEA A Colony, Paravai, Tamil Nadu 625402";
    const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  }}
  className="mt-8 bg-[#EB007B] px-6 py-3 rounded-full flex items-center gap-2"
>
  <img
    src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777457169/Container_klyjut.png"
    className="w-4"
  />
  Get Directions
</button>
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 bg-gray-50">

  {/* ROW 1 */}
<form onSubmit={handleSubmit}>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="flex flex-col text-left">
      <label className="text-xs text-gray-500 mb-1">Your Name</label>
      <input  value={form.name}
       onChange={handleChange}
        className="border border-gray-200 bg-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="e.g. John Doe"
      />
      {errors.name && (
  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
)}
    </div>

    <div className="flex flex-col text-left">
      <label className="text-xs text-gray-500 mb-1">Phone Number</label>
      <input
       value={form.phone}
        onChange={handleChange}
        className="border border-gray-200 bg-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="+91 555 000 0000"
      />
      {errors.phone && (
  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}
    </div>

  </div>

  {/* EMAIL */}
  <div className="flex flex-col text-left mt-4">
    <label className="text-xs text-gray-500 mb-1">Email Address</label>
    <input
     value={form.email}
  onChange={handleChange}
      className="border border-gray-200 bg-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
      placeholder="example@email.com"
    />
    {errors.email && (
  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
)}
  </div>

  {/* INTEREST */}
  <div className="flex flex-col text-left mt-4">
    <label className="text-xs text-gray-500 mb-1">Interested In</label>
    <input
     value={form.interest}
  onChange={handleChange}
      className="border border-gray-200 bg-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
      placeholder="Event / Wholesale / Retail"
    />
    {errors.interest && (
  <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
)}
  </div>

  {/* MESSAGE */}
  <div className="flex flex-col text-left mt-4">
    <label className="text-xs text-gray-500 mb-1">Your Message</label>
    <textarea
     value={form.message}
  onChange={handleChange}
      rows={4}
      className="border border-gray-200 bg-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400"
      placeholder="Tell us more about your requirement..."
    />
    {errors.message && (
  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
)}
  </div>

  {/* BUTTON */}
  <button className="mt-6 bg-gradient-to-r from-[#EB007B] to-[#EB007B] text-white px-6 py-3 rounded-full w-full font-medium shadow-md hover:scale-[1.02] transition">
    Send Message
  </button>
</form>
</div>
      </div>
    </div>
  );
};

export default Contact;