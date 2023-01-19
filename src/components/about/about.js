import React, { useEffect } from "react";
import "./about.css";
// import { clarity } from 'clarity-js';

const About = (props) => {
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

  // clarity();

  return (
    <div id="about">
      {/* <img className="about-background" src={background} alt="background" /> */}
      <div
        className="about-content"
        style={{ marginTop: props.pageTop ? "20vh" : "0px" }}
      >
        <div className="about-title">ABOUT WOC</div>
        <div className="about-desc">
          GDSC IIIT Kalyani brings to you, yet again, its open-source program
          Winter of Code 3.0 with collaborative efforts from 30+ Google
          Developer Student Clubs. The program will last for a period of 45 days
          and is based on the lines of GSoC. Student applicants are required to
          send their proposals to organizations to work on their open-source
          projects while their mentor evaluate them over a course of the event.
          If you dont have a resume here is a template that you may use:
          <a
            href="https://docs.google.com/document/d/1AsopS8xBI1QAAjJpsdConQvZSLT62ZfrqhIGcPgxAUw/edit?usp=sharing"
            className="resume_link"
          >
            {" "}
            Resume Template
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
