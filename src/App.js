import React, { useContext } from "react";
import "./styes/global.css";
import Header from "./components/Header";
import About from "./components/About";
import ArtsContainer from "./components/ArtsContainer";
import Footer from "./components/Footer";
import ArtDisplay from "./components/ArtDisplay";
import Context from "./context/Context";
import Contact from "./components/Contact";

function App() {
  const { display } = useContext(Context);
  return (
    <div className="main-content">
      <Header />
      <About />
      <ArtsContainer />
      <Contact />
      <Footer />
      { display && <ArtDisplay /> }
    </div>
  );
} 

export default App;
