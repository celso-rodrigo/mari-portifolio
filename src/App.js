import React from "react";
import "./styes/global.css";
import Header from "./components/Header";
import About from "./components/About";
import ArtsContainer from "./components/ArtsContainer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">
        <About />
        <ArtsContainer />
        <Contact />
        <footer>
          <p>
            {"Feito por "}
            <a href="https://github.com/celso-rodrigo" target="blank">Celso Rodrigo</a>
          </p>
        </footer>
      </div>
    </div>
  );
} 

export default App;
