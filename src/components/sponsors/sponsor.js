import React, {useEffect} from "react";
import "./sponsor.css";
import sponsorsData from "./sponsorData";
// import backgroundAssets from "../../assets/sponsors-bg-image.png";
// import background2 from "../../assets/bg images/WOC_LIS_07.gif";
// import background1 from "../../assets/bg images/WOC_LIS_06.gif";

const Sponsor = () => {
  useEffect(() => {
    const faqHeading = document.querySelector(".header");
    const faqHeadingOptions = {
      root: null,
      threshold: 0.5,
    };
    const faqHeadingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqHeading.classList.add("header-active");
        }
      });
    }, faqHeadingOptions);
    faqHeadingObserver.observe(faqHeading);
  }, []);

  return (
    <div id="sponsors">
        {/* <div className="sponsors-background-container">
          <img className="sponser-background" src={background1} alt="background" />
          <img className="sponser-background" src={background2} alt="background"/>
        </div>
      <div className="solids-background">
        <img
          // className="solids-background"
          src={backgroundAssets}
          alt="background"
        ></img>
      </div> */}
      <div className="sponsors-content">
        <div className="header">PAST SPONSORS</div>
        <div className="sponsorsGrid">
          <div className="diamond-sponsors">
            <h5>DIAMOND-SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.diamond.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="platinum-sponsors">
            <h5>PLATINUM SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.platinum.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="gold-sponsors">
            <h5>GOLD SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.gold.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="silver-sponsors">
            <h5>SILVER SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.silver.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="ivory-sponsors">
            <h5>IVORY SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.ivory.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="media-sponsors">
            <h5>MEDIA SPONSORS</h5>
            <div className="sponsor-icon-container">
              {sponsorsData.media.map((sIcon, k) => {
                return (
                  <img
                    className="sponsor-icon"
                    src={sIcon.image}
                    alt={sIcon.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
