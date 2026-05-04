import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A1B3D] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <img
            src="https://res.cloudinary.com/dkhuwectt/image/upload/v1777442148/ice-cream-cone_1_im4ayn.png"
            alt="SK Enterprises Logo"
            className="w-16 h-16 object-contain"
          />
          <h2 className="text-2xl font-bold tracking-wider">SK ENTERPRISES</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium mb-12">
          <a href="#services" className="hover:text-pink-400 transition-colors duration-200">Service</a>
          <a href="#support" className="hover:text-pink-400 transition-colors duration-200">Support</a>
          <a href="#company" className="hover:text-pink-400 transition-colors duration-200">Company</a>
          <a href="#legal" className="hover:text-pink-400 transition-colors duration-200">Legal</a>
          <a href="#join" className="hover:text-pink-400 transition-colors duration-200">Join Us</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-2 mb-10">
          <a 
            href="#" 
            className="p-3 bg-[#052957] rounded-full hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook size={16} color="white"/>
          </a>
          
          <a 
            href="#" 
            className="p-3 bg-[#052957] rounded-full hover:bg-white/10 rounded-full transition-all duration-160 hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter size={16} color="white"/>
          </a>
          
          <a 
            href="#" 
            className="p-3 bg-[#052957] rounded-full hover:bg-white/10 rounded-full transition-all duration-160 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={16} color="white"/>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60 tracking-wide">
          © 2026 SK Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;