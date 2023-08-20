import { CardsCarousel } from "./CardsCarousel";

function Home() {
  

  const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
  };

  return (
    <div>
      <div style={containerStyle}>
        <CardsCarousel />
      </div>
    </div>
  );
}

export default Home;
