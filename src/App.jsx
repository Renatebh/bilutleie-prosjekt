import Theme from "./Theme";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Cards from "./components/cards/Cards";
import CardsSection from "./components/cards/CardsSection";

function App() {
  return (
    <Theme>
      <Header>Heading</Header>
      <HeroSection />
      <CardsSection />
    </Theme>
  );
}

export default App;
