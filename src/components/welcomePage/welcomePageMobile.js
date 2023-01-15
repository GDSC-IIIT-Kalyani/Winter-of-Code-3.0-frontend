import React from "react";
import NavBar from "../navBar/navBar";
import "./welcomePageMobile.css";
import Aboutus from "../about/about";

export default function WelcomePage() {
  return (
    <div id="Home">
      <div className="navigation">
        <NavBar />
      </div>
      <div style={{paddingTop:'60vw'}}><Aboutus />
      <div className = "applyButton">
                  <a href="https://winter-of-code.devfolio.co/">Apply with Devfolio</a></div></div>
    </div>
  );
}
