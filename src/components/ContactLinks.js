import React from "react";
import instagram from "../images/instagram.svg";
import email from "../images/email.svg";
import whatsapp from "../images/whatsapp.svg";

function ContactLinks() {
  return (
    <div className="contact-link-container">
      <a 
        href="mailto:myzenadesenha@gmail.com"
        target="_blank" 
        className="contact-link"
        rel="noreferrer">
        <img src={ email } alt="Mandar email para o artista" />
      </a>
      <a 
        href="https://www.instagram.com/thepinkyink/" 
        target="_blank" 
        className="contact-link" 
        rel="noreferrer">
        <img src={ instagram } alt="Ir para Instagram do artista" />
      </a>
      <a href="https://contate.me/thepinkyink" target="_blank" className="contact-link" rel="noreferrer">
        <img src={ whatsapp } alt="Ir para whatsapp do artista" />
      </a>
    </div>
  );
} 

export default ContactLinks;
