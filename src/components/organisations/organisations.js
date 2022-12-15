import React, { useEffect } from "react";
import "./organisations.css";
import whale from "../../assets/fish.png";
import whale_bg from "../../assets/fish-bg-leaves.png";
import images from "./images.js";

const Organisations = () => {
    
    useEffect(() => {
        const faqHeading = document.querySelector(".orgs-header");
        const faqHeadingOptions = {
          root: null,
          threshold: 0.5,
        };
        const faqHeadingObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              faqHeading.classList.add("orgs-header-active");
            }
          });
        }, faqHeadingOptions);
        faqHeadingObserver.observe(faqHeading);
      }, []);

    return (
        <section id="organisations">
                <div className="orgs-flex">
                    <div className="orgs-left">
                        <h2 className="orgs-header">ORGANISATIONS</h2>
                        <div className="buttn-container">
                            <h3 className="sponsor-dsc">Our love for Open Source drove us to impact the community through Winter of Code 3.0. </h3>
                            <a href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view" alt="Organizations Brochure" target="_blank" rel="noopener noreferrer" className="org-link">
                                Participate in winter of code 3.0 as a organization?
                            </a>
                        </div>
                        <div className="orgs-image-container">

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["mojaGlobal"]} alt="Moja Global logo"></img>
                                <img className="org-image gdevelop" src={images["GDevelop"]} alt="GDevelop logo"></img>
                                <img className="org-image" src={images["polyaxon"]} alt="Polyaxon logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["gitAInit"]} alt="Gita Init logo"></img>
                                <img className="org-image" src={images["openemr"]} alt="OpenEMR logo"></img>
                                <img className="org-image" src={images["jinaAi"]} alt="Code Digger logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["orgA"]} alt="clueless logo"></img>
                                <img className="org-image" src={images["asyncAPI"]} alt="Async API logo"></img>
                                <img className="org-image" src={images["eduhub"]} alt="Eduhub logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["abc"]} alt="ABC organization logo"></img>
                                <img className="org-image" src={images["llvm"]} alt="LLVM logo"></img>
                                <img className="org-image" src={images["gdsc"]} alt="GDSC logo"></img>
                            </div>
                        </div>
                    </div>

                    <div className="orgs-right">
                        <img className="orgs-whale-bg" src={whale_bg} alt="whale-background"></img>
                        <img className="orgs-whale" src={whale} alt="whale"></img>
                    </div>
                </div>
        </section>
    )
}

export default Organisations;
