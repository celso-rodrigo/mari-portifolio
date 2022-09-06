import React from "react";
import "../styes/ArtsContainer.css";
import ArtCard from "./ArtCard";

function ArtsContainer() {
  return (
    <section className="arts-main-container">
      <h2>Artes</h2>
      <div className="arts-container">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>
    </section>
  );
} 

export default ArtsContainer;
