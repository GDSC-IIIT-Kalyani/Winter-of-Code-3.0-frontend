import "./welcomePage.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import NavBar from "../../components/navBar/navBar";
import WelcomePageMobile from "../../components/welcomePage/welcomePageMobile";

import moonImg from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0019_moon.png";
import birdsRight from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0010_3-Birds.png";
import birdsLeft from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0015_Color-Lookup-1.png";
import iceberg from "../../assets/firstpage/iceburg.png";
import leftIceburg from "../../assets/firstpage/left_berg.png";
import rightIceburg from "../../assets/firstpage/right_berg.png";
import wave from "../../assets/firstpage/wave.png";
import cloud1 from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0012_Color-Lookup-1.png";
import cloud3 from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0014_lower-left-cloud.png";
import cloud4 from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0018_top-left-cloud.png";
import cloud6 from "../../assets/firstpage/WOC_Landing-page_01-Recovered.psd_0011_top-right-cloud.png";
import title from "../../assets/firstpage/winterofcode.png";

const WelcomePage = () => {
  const [width, setWidth] = useState(window.screen.width);
  const [scrollPosition, setScrollPosition] = useState(0);

  const moonRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const handleResize = (event) => {
    setWidth(event.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return window.innerWidth > 1024 ? (
    <>
      <div className="wrapper" id="home">
        <NavBar />
        <img
          src={moonImg}
          className="moon"
          ref={moonRef}
          style={{
            transform: `translateY(-${scrollPosition / 40}%)`,
          }}
          alt=""
        />

        <img
          src={cloud6}
          className="cloud-right"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

        <img
          src={cloud3}
          className="cloud-left"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

        <img
          src={cloud4}
          className="cloud-4"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

        <img
          src={cloud1}
          className="cloud-1"
          alt=""
        />

        <img
          src={birdsRight}
          className="birds-right"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

        <img
          src={birdsLeft}
          className="birds-left"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

        <img
          src={title}
          className="img-title"
          style={{
            transform: `translateY(-${scrollPosition / 37}%)`,
          }}
          alt=""
        />

      </div>
      <div className="wrapper-2">
        <img
          src={iceberg}
          className="iceberg"
          style={{
            transform: `translate(0, -${
              scrollPosition / 80 + (width < 950 ? 10 : 0)
            }%)`,
          }}
          alt=""
        />

        <img
          src={rightIceburg}
          className="right-iceburg"
          style={{
            transform: `translate(0, -${
              scrollPosition / 45 + (width < 821 ? 0 : 0)
            }%)`,
          }}
          alt=""
        />

        <img
          src={leftIceburg}
          className="left-iceberg"
          style={{
            transform: `translate(0, -${
              scrollPosition / 40 + (width < 821 ? 0 : 0)
            }%)`,
          }}
          alt=""
        />

        <img
          src={wave}
          className="wave"
          style={{
            height: `${160 + scrollPosition / 10 + (width < 950 ? 50 : 0)}%`,
            transform: `translate(0, -${
              scrollPosition / 70 + (width < 950 ? (width < 500 ? 20 : 16) : 0)
            }%)`,
          }}
          alt=""
        />

        <div
          id="about"
          style={{
            transform: `translate(0, -${
              scrollPosition / 40 + (width < 821 ? 0 : 0)
            }%)`,
          }}
        >
          <div className="about-content">
            <div className="about-title">ABOUT WOC</div>
            <div className="about-desc">
              GDSC IIIT Kalyani brings to you, yet again, its open-source
              program Winter of Code 3.0 with collaborative efforts from 30+
              Google Developer Student Clubs. The program will last for a period
              of 45 days and is based on the lines of GSoC. Student applicants
              are required to send their proposals to organizations to work on
              their open-source projects while their mentor evaluate them over a
              course of the event. If you dont have a resume here is a template
              that you may use:
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
      </div>
    </>
  ) : (
    <WelcomePageMobile />
  );
};

export default WelcomePage;
