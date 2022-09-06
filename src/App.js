import React, { useContext } from "react";
import "./styes/global.css";
import Header from "./components/Header";
import About from "./components/About";
import ArtsContainer from "./components/ArtsContainer";
import Footer from "./components/Footer";
import ArtDisplay from "./components/ArtDisplay";
import Context from "./context/Context";

function App() {
  const { display } = useContext(Context);
  return (
    <>
      <div className="wrapper" >
        <Header />
        <div className="main-content">
          <About />
          <ArtsContainer />
          <Footer />
        </div>
      </div>
      { display && <ArtDisplay /> }
    </>
  );
} 

export default App;
