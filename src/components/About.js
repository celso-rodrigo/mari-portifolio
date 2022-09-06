import React from "react";
import tempAbout from "../images/tempAbout.png";
import "../styes/About.css";

function About() {
  return (
    <section className="about-section">
      <img src={tempAbout} alt="Desenho chibi da artista"/>
      <div className="about-info">
        <h1>About the artist</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
      </div>
    </section>
  );
} 

export default About;
