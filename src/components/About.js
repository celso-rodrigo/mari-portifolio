import React from "react";
import about from "../images/about.png";
import "../styes/About.css";

function About() {
  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="1100">
      <img src={about} alt="Desenho chibi da artista" />
      <div className="about-info">
        <h1>Sobre mim</h1>
        <p>Olá, sou a Mariana. Muito prazer!</p>
        <p>Sou piauiense, da capital, e atualmente trabalho com desenho digital e com design de postagens em redes sociais. Comecei com o desenho digital há 2 anos e com o design há 1 ano. Em ambas as áreas, no momento, trabalho por encomenda. </p>
        <p>Para mim, desenhar e produzir designs é muito gratificante. Do branco da tela produzir cor e muito sentimento foi o que fez me apaixonar pela área.</p>
        <p>Se for do seu interesse, estarei à disposição para fazer uma arte bem bonita ou design do zero pra você!</p>
        <p>Obrigada por ter lido até aqui! Espero que goste do site, que foi feito com todo o carinho pelo meu namorado, Celso, e que goste também das minhas artes. 🙂</p>
      </div>
    </section>
  );
} 

export default About;
