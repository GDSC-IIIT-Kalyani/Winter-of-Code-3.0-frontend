import React from "react";
import NavBar from "../navBar/navBar";
import "./welcomePageMobile.css";
import Aboutus from "../about/about";
import "../navBar/navBar.css";

export default function WelcomePage() {
  return (
    <div id="Home">
      <div className="navigation">
        <NavBar />
      </div>
      <div style={{paddingTop:'60vw'}}><Aboutus />
      
            <div className="apply-button"
            data-hackathon-slug="winter-of-code"
            data-button-theme="light"></div>

            
      </div>
    </div>
  );
}
