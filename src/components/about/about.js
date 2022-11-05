import React from "react";
import "./about.css";
import background from "../../assets/bg images/WOC_LIS_02.gif";
const About = () => {
  return (
    <div id="about">
      <img className="about-background" src={background} alt="background" />
      <div className="about-content">
        <div className="about-title">ABOUT WOC</div>
        <div className="about-desc">
          GDSC IIIT Kalyani brings to you, yet again, its open-source program
          Winter of Code 3.0 with collaborative efforts from 10+ Google
          Developer Student Clubs. The program will last for a period of two
          months and will be based on the lines of GSoC. Student applicants will
          be required to send their proposals to organizations to work on their
          open-source projects while their mentor evaluate them over a course of
          2 months.
        </div>
      </div>
    </div>
  );
};

export default About;
