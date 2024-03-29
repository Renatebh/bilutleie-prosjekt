import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Cars from "./components/pages/Cars";
import Trucks from "./components/pages/Trucks";
import ContactUs from "./components/pages/ContactUs";
import AboutCar from "./components/pages/AboutCar";
import OrderCar from "./components/pages/OrderCar/OrderCar";
import GradientBg from "./components/ui/background/GradientBG";
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-car/:id" element={<AboutCar />} />
          <Route path="/order-car/:id" element={<OrderCar />} />
        </Routes>
        <Footer />
      </GradientBg>
    </>
  );
}

export default App;
