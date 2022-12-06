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
                        <div className="orgs-image-container">

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["abc"]} alt="ABC organization logo"></img>
                                <img className="org-image" src={images["autodl"]} alt="Auto-DL logo"></img>
                                <img className="org-image" src={images["supabase"]} alt="Supabase logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["gitAInit"]} alt="Gita Init logo"></img>
                                <img className="org-image" src={images["llvm"]} alt="LLVM logo"></img>
                                <img className="org-image" src={images["codeDigger"]} alt="Code Digger logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["orgA"]} alt=" logo"></img>
                                <img className="org-image" src={images["gdsc"]} alt="GDSC logo"></img>
                                <img className="org-image" src={images["dezenix"]} alt="Dezenix logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["mojaGlobal"]} alt="Moja Global logo"></img>
                                <img className="org-image" src={images["asyncAPI"]} alt="Async API logo"></img>
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
