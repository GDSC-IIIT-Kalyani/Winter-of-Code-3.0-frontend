import "./welcomePage.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import NavBar from "../../components/navBar/navBar";
import WelcomePageMobile from "../../components/welcomePage/welcomePageMobile";

const moonImg =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/moon.png?alt=media&token=e1ce274d-0efa-4bf9-a6c7-ee8e45d4c8d3";

const birdsRight =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0010_3-Birds.png?alt=media&token=655b0c70-5eac-40f0-9855-a2a68102c9bf";
const birdsLeft =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0015_Color-Lookup-1.png?alt=media&token=766254c3-cf60-4525-8c4a-2da0c991a03e";
// const bird1 =
//   "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0016_2-birds.png?alt=media&token=fc68d3bb-6431-4b32-830f-ed1e5f7dce1b";

const iceberg =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/iceburg.png?alt=media&token=937c3661-d932-44b9-88e0-6614c992ddd7";
const leftIceburg =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/left_berg.png?alt=media&token=5257f050-0971-4d95-b2f4-69b9975c0895";
const rightIceburg =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/right_berg.png?alt=media&token=dab3c416-789b-4b89-a0ec-1746287f5ff5";

const wave =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/wave.png?alt=media&token=c6fdd09a-77cd-49d4-aa07-88925498349e";

const cloud1 =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0012_Color-Lookup-1.png?alt=media&token=741566f5-df35-4a41-85ca-0e64fa6325bf";
// const cloud2 =
//   "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0013_lower-right-cloud.png?alt=media&token=5955a083-69aa-4872-be98-f0b03f4f2a2b";
const cloud3 =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0014_lower-left-cloud.png?alt=media&token=96c848e5-e047-40f6-9e93-78af2568d389";
// const cloud4 =
//   "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0017_Color-Lookup-1.png?alt=media&token=a798b053-a7bf-4386-88f5-31b9a5eb2b9f";
const cloud4 =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0018_top-left-cloud.png?alt=media&token=eba0c638-a381-4ab0-ba18-1f7291184828";
const cloud6 =
  "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/cloud-right.png?alt=media&token=fd12c187-6e37-4d32-a623-7361bb83aee4";

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


  return (
    window.innerWidth > 768 ?
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
            style={{
              transform: `translateY(-${scrollPosition / 37}%)`,
            }}
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

          <div className="title">Winter Of Code</div>
        </div>
        <div className="wrapper-2">
          <img
            src={iceberg}
            className="iceberg"
            style={{
              transform: `translate(0, -${scrollPosition / 80 + (width < 950 ? 10 : 0)
                }%)`,
            }}
            alt=""
          />

          <img
            src={rightIceburg}
            className="right-iceburg"
            style={{
              transform: `translate(0, -${scrollPosition / 45 + (width < 821 ? 0 : 0)
                }%)`,
            }}
            alt=""
          />

          <img
            src={leftIceburg}
            className="left-iceberg"
            style={{
              transform: `translate(0, -${scrollPosition / 40 + (width < 821 ? 0 : 0)
                }%)`,
            }}
            alt=""
          />

          <img
            src={wave}
            className="wave"
            style={{
              height: `${160 +
                scrollPosition / 10 +
                (width < 950 ? 50 : 0)
                }%`,
              transform: `translate(0, -${scrollPosition / 70 + (width < 950 ? (width < 500 ? 20 : 16) : 0)
                }%)`,
            }}
            alt=""
          />
          <div
            id="about"
            style={{
              // height:"300vh",
              transform: `translate(0, -${scrollPosition / 40 + (width < 821 ? 0 : 0)
                }%)`,
            }}
          >
            {/* <img className="about-background" src={background} alt="background" /> */}
            <div className="about-content">
              <div className="about-title">ABOUT WOC</div>
              <div className="about-desc">
                GDSC IIIT Kalyani brings to you, yet again, its open-source
                program Winter of Code 3.0 with collaborative efforts from 10+
                Google Developer Student Clubs. The program will last for a period
                of two months and will be based on the lines of GSoC. Student
                applicants will be required to send their proposals to
                organizations to work on their open-source projects while their
                mentor evaluate them over a course of 2 months.

                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1XTh4_kt9-sxeD1b2NMJYY1Izpi6gzIXP/view" alt="Sponsorship Brochure" target="_blank" rel="noopener noreferrer">
                    <button className="brochure-button" type="button"><span>SPONSORSHIP BROCHURE</span></button>
                  </a>
                  <a href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view" alt="Organizations Brochure" target="_blank" rel="noopener noreferrer">
                    <button className="brochure-button" type="button"><span>ORGANISATION BROCHURE</span></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> : <WelcomePageMobile />
  )

};

export default WelcomePage;
