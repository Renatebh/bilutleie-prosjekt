<<<<<<< HEAD
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
=======
import Theme from './Theme';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';

function App() {
  return (
    <Theme>
      <Header>Heading</Header>
      <HeroSection />
    </Theme>
>>>>>>> 298e0a2f6dde5ea4a93fdc6c000f1046390f9576
  );
}

export default App;
