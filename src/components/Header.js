import React from "react";
import wave1 from "../images/wave1.svg";
import wave2 from "../images/wave2.svg";
import logoTemp from  "../images/logoTemp.svg";

function Header() {
  return (
    <header className="main-header">
      <img src={ wave2 } alt="Wave effect" className="background"/>
      <img src={ wave1 } alt="Wave effect" className="foreground"/>
      <img src={ logoTemp } alt="Page logo" className="logo"/>
    </header>
  );
} 

export default Header;
