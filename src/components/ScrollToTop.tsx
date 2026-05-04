import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="backdrop-blur-lg bg-white/20 bg-gradient-to-r from-pink-500 to-pink-600 fixed bottom-6 right-6 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <IoArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;