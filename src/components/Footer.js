import React from "react";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import email from "../images/email.svg";
import "../styes/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-link-container">
        <a href="#" target="blank" className="contact-link">
          <img src={ instagram } alt="Ir para Instagram do artista" />
        </a>
        <a href="#" target="blank" className="contact-link">
          <img src={ twitter } alt="Ir para Twitter do artista" />
        </a>
        <a href="#" target="blank" className="contact-link">
          <img src={ email } alt="Mandar email para o artista" />
        </a>
      </div>
      <footer>
        <p>
          {"Feito por "}
          <a href="https://github.com/celso-rodrigo" target="blank">Celso Rodrigo</a>
        </p>
      </footer>
    </footer>
  );
} 

export default Footer;
