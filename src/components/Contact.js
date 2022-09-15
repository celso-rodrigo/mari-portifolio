import React from "react";
import contact from "../images/contact.png";
import "../styes/Contact.css";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <section className="contact-section" data-aos="fade-up" data-aos-duration="1100">
      <img src={contact} alt="Desenho chibi da artista" className="contact-art" />
      <div className="contact-info">
        <h1>Contato</h1>
        <p>Quer um orçamento ou deseja conversar mais sobre o meu trabalho? Entra em contato aqui!</p>
        <ContactLinks />
      </div>
    </section>
  );
} 

export default Contact;
