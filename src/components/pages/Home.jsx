import React from "react";
import CardsSection from "../cards/CardsSection";
import CarCarousel from "../Carousel/carCarousel/CarCarousel";
import FindUs from "../findUs/FindUs";
import HeroSection from "../hero/HeroSection";
import Reviews from "../reviews/Reviews";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <main>
        <CardsSection />
        <CarCarousel />
        <FindUs />
        <Reviews />
      </main>
    </div>
  );
};

export default Home;
