import React from "react";
import NavBar from "../navBar/navBar";
import "./welcomePage.css";
import background from "../../assets/bg images/WOC_Landing-page_back-ground.png";

const icebergUpper = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/iceberg_upper.png?alt=media&token=d2f89fe5-7e43-4c5e-88fc-08630b63156b";

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
