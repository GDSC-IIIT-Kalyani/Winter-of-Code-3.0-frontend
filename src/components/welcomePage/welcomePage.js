import React from "react";
import NavBar from "../navBar/navBar";
import "./welcomePage.css";
import background from "../../assets/bg images/WOC_Landing-page_back-ground.png";
export default function WelcomePage() {
  return (
    <div id="Home">
      <img
        className="landing-background"
        src={background}
        alt="background"
      ></img>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
}
