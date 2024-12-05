import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/order");
  };
  return (
    <div className="hero-section">
      <div className="content">
        <img className="img-logo" src="./Assets/Iteration-1-assets/logo.svg" />

        <h2> fırsatı kaçırma</h2>
        <h1>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button className="cta-button" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
      <img
        src="Assets\Iteration-1-assets\home-banner.png"
        alt="Pizza"
        className="hero-image"
      />
    </div>
  );
}

export default Home;
