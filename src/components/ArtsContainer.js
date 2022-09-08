import React, { useContext } from "react";
import Context from "../context/Context";
import "../styes/ArtsContainer.css";
import ArtCard from "./ArtCard";

function ArtsContainer() {
  const { allImgsUrl } = useContext(Context);

  return (
    <section className="arts-main-container" data-aos="fade-up" data-aos-duration="1100">
      <h1>Artes</h1>
      <div className="arts-container">
        { allImgsUrl.map((art, index) => (
          <ArtCard url={art} key={index} />
        ))}
      </div>
    </section>
  );
} 

export default ArtsContainer;
