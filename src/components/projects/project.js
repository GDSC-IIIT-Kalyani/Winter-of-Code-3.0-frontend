import React, { useEffect } from "react";
import "./project.css"
import image from "../../assets/projects_section_bg.png"

const Project = () => {

  useEffect(() => {
    const faqHeading = document.querySelector(".projects-header");
    const faqHeadingOptions = {
      root: null,
      threshold: 0.5,
    };
    const faqHeadingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqHeading.classList.add("projects-header-active");
        }
      });
    }, faqHeadingOptions);
    faqHeadingObserver.observe(faqHeading);
  }, []);

  return (
    <section id="projects">
      <div className="projects-image-grid">
        <img className="projects-image image-1" src={image} alt="projects"></img>
        <img className="projects-image image-2" src={image} alt="projects"></img>
        <img className="projects-image image-3" src={image} alt="projects"></img>
        <img className="projects-image image-4" src={image} alt="projects"></img>
        <img className="projects-image image-5" src={image} alt="projects"></img>
        <img className="projects-image image-6" src={image} alt="projects"></img>
        <img className="projects-image image-7" src={image} alt="projects"></img>
        <img className="projects-image image-8" src={image} alt="projects"></img>
        <img className="projects-image image-9" src={image} alt="projects"></img>
      </div>
      <div className="projects-textual-content">
        <h2 className="projects-header">PROJECTS</h2>
        <p className="projects-text">
          WoC is primarily a mentoring initiative. The Projects on offer have excellent mentors associated with them. The mentors are devoted, enthusiastic individuals who want to assist WoC Contributors in becoming excellent open source contributors by teaching them about their communities. It can only make you a better, more confident open source developer to have the chance to learn from others who have been at this for several years and who are knowledgeable about the techniques.
        </p>
        <a href="/projects" alt="Projects page">
          <button className="projects-button" type="button"><span>PROJECTS</span></button>
        </a>
      </div>
    </section>
  )
}

export default Project;
