import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import GradientBg from "./components/background/GradientBG";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <GradientBg>
        <Home />
        <Footer />
      </GradientBg>
    </>
  );
}

export default App;
