import React from "react";
import about from "../images/about.png";
import "../styes/About.css";

function About() {
  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="1100">
      <img src={about} alt="Desenho chibi da artista" />
      <div className="about-info">
        <h1>Sobre mim</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
      </div>
    </section>
  );
} 

export default About;
