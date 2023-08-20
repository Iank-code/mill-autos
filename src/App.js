import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ModelIcons from "./components/ModelIcons";
import WhyBuy from "./components/WhyBuy";

function App() {
  const navItems = [
    {
      label: "Stock",
      link: "/stock",
    },
    {
      label: "About",
      link: "/about",
    },
  ];
  return (
    <div className="App">
      <Navbar links={navItems} />
      <br />
      <Home />
      <br />
      <ModelIcons />
      <WhyBuy />
    </div>
  );
}

export default App;
