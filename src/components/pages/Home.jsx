import React from "react";
import CardsSection from "../cards/CardsSection";
import CarCarousel from "../Carousel/carCarousel/CarCarousel";
import FindUs from "../findUs/FindUs";
import HeroSection from "../hero/HeroSection";
import Reviews from "../reviews/Reviews";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <main>
        <CardsSection />
        <CarCarousel />
        <FindUs />
        <About />
        <Reviews />
      </main>
    </div>
  );
};

export default Home;