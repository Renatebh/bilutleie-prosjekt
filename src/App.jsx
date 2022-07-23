import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import CardsSection from "./components/cards/CardsSection";
import CarCarousel from "./components/Carousel/carCarousel/CarCarousel";
import GradientBG from "./components/background/GradientBG";
import FindUs from "./components/findUs/FindUs";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <GradientBG>
        <main>
          <CardsSection />
          <CarCarousel />
          <FindUs />
          <Reviews />
        </main>
        <Footer />
      </GradientBG>
    </>
  );
}

export default App;
