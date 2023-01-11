import React, { useEffect } from "react";
import "./about.css";
import { clarity } from 'clarity-js';

const About = () => {
  useEffect(() => {
    const faqHeading = document.querySelector(".about-title");
    const faqHeadingOptions = {
      root: null,
      threshold: 0.5,
    };
    const faqHeadingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqHeading.classList.add("about-title-active");
        }
      });
    }, faqHeadingOptions);
    faqHeadingObserver.observe(faqHeading);
  }, []);

  clarity();

  return (
    <div id="about">
      {/* <img className="about-background" src={background} alt="background" /> */}
      <div className="about-content">
        <div className="about-title">ABOUT WOC</div>
        <div className="about-desc">

          GDSC IIIT Kalyani brings to you, yet again, its open-source program 
          Winter of Code 3.0 with collaborative efforts from 30+ Google
          Developer Student Clubs. The program will last for a period of 45 days
          and is based on the lines of GSoC. Student applicants are required to
          send their proposals to organizations to work on their open-source
          projects while their mentor evaluate them over a course of the event.

          {/* <div className="button-container">
            <a href="https://drive.google.com/file/d/1XTh4_kt9-sxeD1b2NMJYY1Izpi6gzIXP/view" alt="Sponsorship Brochure" target="_blank" rel="noopener noreferrer">
              <button className="brochure-button" type="button"><span>SPONSORSHIP BROCHURE</span></button>
            </a>
            <a href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view" alt="Organizations Brochure" target="_blank" rel="noopener noreferrer">
              <button className="brochure-button" type="button"><span>ORGANISATION BROCHURE</span></button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
