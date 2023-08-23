import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import ModelIcons from "./components/ModelIcons";
import WhyBuy from "./components/WhyBuy";
import CarSlide from "./pages/car-category/CarSlide";
import Footer from "./components/footer/Footer";
import { navbar_links, footer_links } from "./helpers/links.helpers";
import { FaqSimple } from "./components/faq/Faq";

function App() {
  return (
    <div className="App">
      <Navbar links={navbar_links} />
      <br />
      <Home />
      <br />
      <br />
      <br />
      <ModelIcons />
      <CarSlide />
      <FaqSimple/>
      {/* <WhyBuy /> */}
      <Footer data={footer_links} />
    </div>
  );
}

export default App;
