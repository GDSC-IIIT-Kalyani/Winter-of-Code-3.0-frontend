import React, { useEffect } from "react";
import "./organisations.css";
import whale from "../../assets/fish.png";
import whale_bg from "../../assets/fish-bg-leaves.png";
import alphadot from "../../assets/Community Partners/alpha.jpeg";
import images from "./images.js";

const Organisations = (props) => {
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
        <div
          className="orgs-left"
          style={{
            marginTop: props.pageTop ? "20vh" : "0px",
            minHeight: props.pageTop && "100vh",
          }}
        >
          <h2 className="orgs-header">ORGANISATIONS</h2>
          <div className="buttn-container">
            <h3 className="sponsor-dsc">
              Our love for Open Source drove us to impact the community through
              Winter of Code 3.0.{" "}
            </h3>
            <a
              href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view"
              alt="Organizations Brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="org-link"
            >
              Participate in Winter of Code 3.0 as an organisation?
            </a>
          </div>
          <div className="orgs-image-container">
            <div className="orgs-image-rows row-stretch">
              <div className="CardItem">
              <a
                href="https://moja.global/"
                alt="Moja Global"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["mojaGlobal"]}
                  alt="Moja Global logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://gdevelop.io/"
                alt="GDevelop"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image gdevelop"
                  src={images["GDevelop"]}
                  alt="GDevelop logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://polyaxon.com/"
                alt="Polyaxon"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["polyaxon"]}
                  alt="Polyaxon logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              </div>
              <div className="CardItem">
              <a
                href="https://opencodeyard.tech/"
                alt="openCY"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["openCY"]}
                  alt="openCY logo"
                ></img>
              </a>
              </div>
            </div>

            <div className="orgs-image-rows row-stagger">
              <div className="CardItem">
              <a
                href="https://www.clueless.tech/"
                alt=""
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["orgA"]}
                  alt="clueless logo"
                ></img>
              </a>
              </div>
              <div className="CardItem"> 
              <a
                href="https://github.com/orgs/asyncapi/discussions/556"
                alt="ASyncAPI"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["asyncAPI"]}
                  alt="Async API logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://eduhub.technology/"
                alt="EduHub"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["eduhub"]}
                  alt="Eduhub logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://hackforcode.hashnode.dev/"
                alt="HackForCode"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["hfc"]}
                  alt="HackForCode logo"
                ></img>
              </a>
              </div>
            </div>

            <div className="orgs-image-rows row-stretch">
              <div className="CardItem">
              <a
                href="https://vedvyas.org/"
                alt="GitaInit"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["gitAInit"]}
                  alt="Gita Init logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://www.open-emr.org/winter-of-code/"
                alt="OpenEMR"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["openemr"]}
                  alt="OpenEMR logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://github.com/Code4GovTech/C4GT/wiki/Samagra-:-WoC-3.0-Project-Ideas"
                alt="SamagraX"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["samagraX"]}
                  alt="samagraX logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://devscript.org/"
                alt="DevScript"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["devscript"]}
                  alt="devscript logo"
                ></img>
              </a>
              </div>
            </div>

            <div className="orgs-image-rows row-stagger">
              <div className="CardItem">
              <a
                href="http://www.styava.com/"
                alt="styava"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["styava"]}
                  alt="styavaDev logo"
                ></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://www.alpha-dot.co.uk/"
                alt="alpha dot"
                rel="noopener noreferrer"
              >
                <img className="org-image" src={alphadot} alt="alpha dot"></img>
              </a>
              </div>
              <div className="CardItem">
              <a
                href="https://developers.google.com/community/gdsc"
                alt="GDSC"
                rel="noopener noreferrer"
              >
                <img
                  className="org-image"
                  src={images["gdsc"]}
                  alt="GDSC logo"
                ></img>
              </a>
              </div>   
            </div>

            <div className="orgs-image-rows"></div>
          </div>
        </div>

        <div className="orgs-right">
          <img
            className="orgs-whale-bg"
            src={whale_bg}
            alt="whale-background"
          ></img>
          <img className="orgs-whale" src={whale} alt="whale"></img>
        </div>
      </div>
    </section>
  );
};

export default Organisations;
