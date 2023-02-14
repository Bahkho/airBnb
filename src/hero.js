import React from "react";
import photo_grid from "./img/photo-grid.png";

const Hero = () => {
  return (
    <section className="hero">
        <img src={photo_grid} className="photoGrid" alt="" />
        <h1 className="hero_header">Online Experience</h1>
        <p className="hero_text">
          Join unique interactive activities led by one-of-a-kind
          hosts—all without leaving home.
        </p>
    </section>
  );
};
export default Hero;

