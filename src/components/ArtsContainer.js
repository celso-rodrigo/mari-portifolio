import React from "react";
import "../styes/ArtsContainer.css";
import ArtCard from "./ArtCard";

function ArtsContainer() {

  const artUrl = (artName) => (
    `https://raw.githubusercontent.com/celso-rodrigo/mari-portifolio/main/src/images/${artName}`
  );

  const allArts = [
    "tempArt.jpg",
    "bg.png",
    "arrow.svg",
    "wave1.svg",
    "tempAbout.png",
  ] ;

  return (
    <section className="arts-main-container">
      <h2>Artes</h2>
      <div className="arts-container">
        { allArts.map((art, index) => (
          <ArtCard url={artUrl(art)} key={index} />
        ))}
      </div>
    </section>
  );
} 

export default ArtsContainer;
