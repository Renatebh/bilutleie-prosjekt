import GlobalStyle from "./globalStyles";
import Theme from "./Theme";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header>Heading</Header>
      <HeroSection />
    </Theme>
  );
}

export default App;
