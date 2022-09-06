import React, { useContext } from "react";
import tempArt from "../images/tempArt.jpg";
import Context from "../context/Context";

function ArtCard() {
  const { displayArt } = useContext(Context);
  return (
    <button className="art-card" onClick={displayArt}>
      <img src={tempArt} alt="Arte" />
    </button>
  );
}

export default ArtCard;
