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
      <div style={{paddingTop:'80vw'}}><Aboutus /></div>
    </div>
  );
}
