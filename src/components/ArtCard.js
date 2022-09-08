import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";

function ArtCard({url}) {
  const { displayArt } = useContext(Context);
  return (
    <div  className="art-card">
      <button onClick={() => displayArt(url)}>
        <img src={url} alt="Arte" />
      </button>
    </div>
  );
}

ArtCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ArtCard;
