import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Cars from "./components/pages/Cars";
import Trucks from "./components/pages/Trucks";
import Prices from "./components/pages/Prices";
import ContactUs from "./components/pages/ContactUs";
import GradientBg from "./components/background/GradientBG";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <GradientBg>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </GradientBg>
    </>
  );
}

export default App;
