import React, { useContext, useEffect } from "react";
import close from "../images/close.svg";
import arrow from "../images/arrow.svg";
import "../styes/ArtDisplay.css";
import Context from "../context/Context";

function ArtDisplay() {
  const { displayArt, artToDisplay, changeDisplayedArt } = useContext(Context);

  useEffect(() => {
    const handleKeyPress = ({key}) => {
      if (key === "Escape") displayArt();
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="art-display">
      <button
        className="close-btn" 
        onClick={displayArt}
      >
        <img src={close} alt="Close button" />
      </button>

      <div className="art-container">
        <button className="prev-btn" onClick={() => changeDisplayedArt(-1)}>
          <img src={arrow} alt="Arte anterior" />
        </button>

        <img src={artToDisplay} alt="Arte" className="displayed-art" />

        <button className="next-btn" onClick={() => changeDisplayedArt(1)}>
          <img src={arrow} alt="Próxima arte" />
        </button>
      </div>
    </div>
  );
} 

export default ArtDisplay;
