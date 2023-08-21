import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import ModelIcons from "./components/ModelIcons";
import WhyBuy from "./components/WhyBuy";
import Footer from "./components/footer/Footer";
import { links } from "./helpers/links.helpers";

function App() {
  // Footer data
  const data = {
    data: [
      {
        title: "About",
        links: [
          {
            label: "Features",
            link: "#",
          },
          {
            label: "Pricing",
            link: "#",
          },
          {
            label: "Support",
            link: "#",
          },
          {
            label: "Forums",
            link: "#",
          },
        ],
      },
      {
        title: "Project",
        links: [
          {
            label: "Contribute",
            link: "#",
          },
          {
            label: "Media assets",
            link: "#",
          },
          {
            label: "Changelog",
            link: "#",
          },
          {
            label: "Releases",
            link: "#",
          },
        ],
      },
      {
        title: "Community",
        links: [
          {
            label: "Join Discord",
            link: "#",
          },
          {
            label: "Follow on Twitter",
            link: "#",
          },
          {
            label: "Email newsletter",
            link: "#",
          },
          {
            label: "GitHub discussions",
            link: "#",
          },
        ],
      },
    ],
  };
  return (
    <div className="App">
      <Navbar links={links} />
      <br />
      <Home />
      <br />
      <br />
      <br />
      <ModelIcons />
      {/* <WhyBuy /> */}
      <Footer data={data} />
    </div>
  );
}

export default App;
