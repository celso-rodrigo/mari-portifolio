import React, { useState, useEffect } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [display, setDisplay] = useState(false);
  const [artToDisplay, setArtToDisplay] = useState("");
  const [allImgsUrl, setAllImgsUrl] = useState([]);

  const changeDisplayedArt = (change) => {
    const currentArtIndex = allImgsUrl.indexOf(artToDisplay);
    if (currentArtIndex === 0 && change === -1) {
      setArtToDisplay(allImgsUrl[allImgsUrl.length - 1]);
    } else {
      const newIndex = (currentArtIndex + change) % allImgsUrl.length;
      setArtToDisplay(allImgsUrl[newIndex]);
    }
  };

  const artUrl = (artName) => (
    `https://raw.githubusercontent.com/celso-rodrigo/mari-portifolio/main/src/images/${artName}`
  );

  const displayArt = (artUrl) => {
    setArtToDisplay(artUrl);
    setDisplay((prevState) => (!prevState));
  };

  useEffect(() => {
    const saveImgsUrl = () => {
      let numberOfArts = 11;
      let allUrls = [];
      for(let index = 1; index <= numberOfArts; index++) {
        allUrls.push(artUrl(`art${index}.png`));
      }
      setAllImgsUrl(allUrls);
    };
    saveImgsUrl();
  }, []);

  const providerValue = {
    allImgsUrl,
    display,
    artToDisplay,
    changeDisplayedArt,
    displayArt,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;