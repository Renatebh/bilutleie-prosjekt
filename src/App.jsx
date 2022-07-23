import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import CardsSection from "./components/cards/CardsSection";
import CarCarousel from "./components/Carousel/carCarousel/CarCarousel";
import GradientBG from "./components/background/GradientBG";
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
        </main>
        <Footer />
      </GradientBG>
    </>
  );
}

export default App;
