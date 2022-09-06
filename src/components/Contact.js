import React from "react";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import email from "../images/email.svg";
import "../styes/Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <h2>Contato:</h2>
      <div className="contact-link-container">
        <a href="#" target="blank" className="contact-link">
          <img src={ instagram } alt="Ir para Instagram do artista" />
          <h3>Instagram</h3>
        </a>
        <a href="#" target="blank" className="contact-link">
          <img src={ twitter } alt="Ir para Twitter do artista" />
          <h3>Twitter</h3>
        </a>
        <a href="#" target="blank" className="contact-link">
          <img src={ email } alt="Mandar email para o artista" />
          <h3>Email</h3>
        </a>
      </div>
    </section>
  );
} 

export default Contact;
