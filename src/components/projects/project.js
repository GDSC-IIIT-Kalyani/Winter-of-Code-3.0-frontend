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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="/projects" alt="Projects page">
                    <button className="projects-button" type="button"><span>PROJECTS</span></button>
                </a>
            </div>
        </section>
    )
}

export default Project;