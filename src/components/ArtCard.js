import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";

function ArtCard({url}) {
  const { displayArt } = useContext(Context);
  return (
    <button className="art-card" onClick={displayArt}>
      <img src={url} alt="Arte" />
    </button>
  );
}

ArtCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ArtCard;
