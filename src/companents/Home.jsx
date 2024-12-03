import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="hero-section">
      <div className="content">
        <img className="img-logo" src="./Assets/Iteration-1-assets/logo.svg" />
        <h2>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h2>
        <button className="cta-button">ACIKTIM</button>
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
