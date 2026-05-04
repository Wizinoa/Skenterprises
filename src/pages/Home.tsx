import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HighlightStrip from "../components/HighlightStrip"; // fix import after split if needed
import About from "../components/About";
import Products from "../components/Products";
import WeOffer from "../components/WeOffer";
import StallService from "../components/StallService";
import TrustedBrands from "../components/TrustedBrands";
import Outlets from "../components/Outlets";
import ClientVoices from "../components/ClientVoices";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";     // ← Add this
import ScrollToTop from "../components/ScrollToTop";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HighlightStrip />
      <About />
       <Products />
      <WeOffer />
      <StallService />
      <TrustedBrands />
      <Outlets />
      <ClientVoices />
      <Events />
      <Contact />
      <Footer />
      <ScrollToTop /> 
    </div>
  );
};

export default Home;
