import GlobalStyle from "./globalStyles";
import Theme from "./Theme";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />

        <Header>Heading</Header>

        <HeroSection />
      </Theme>
    </Router>
  );
}

export default App;
