import React from "react";
import about from "../images/about.png";
import "../styes/Contact.css";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <section className="contact-section" data-aos="fade-up" data-aos-duration="1100">
      <img src={about} alt="Desenho chibi da artista" className="contact-art" />
      <div className="contact-info">
        <h1>Contato</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem </p>
        <ContactLinks />
      </div>
    </section>
  );
} 

export default Contact;
