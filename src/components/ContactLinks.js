import React from "react";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import email from "../images/email.svg";

function ContactLinks() {
  return (
    <div className="contact-link-container">
      <a 
        href="https://www.instagram.com/thepinkyink/" 
        target="_blank" 
        className="contact-link" 
        rel="noreferrer">
        <img src={ instagram } alt="Ir para Instagram do artista" />
      </a>
      <a href="#" target="_blank" className="contact-link">
        <img src={ twitter } alt="Ir para Twitter do artista" />
      </a>
      <a 
        href="mailto:myzenadesenha@gmail.com"
        target="_blank" 
        className="contact-link"
        rel="noreferrer">
        <img src={ email } alt="Mandar email para o artista" />
      </a>
    </div>
  );
} 

export default ContactLinks;
