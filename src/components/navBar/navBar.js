import React, { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navBar.css";
import image from "../../assets/logo.png";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  // const [isMobView, setIsMobView] = useState(false);
  // const [isCrossBurger, setIsCrossBurger] = useState(false);
  // const [isScrollDown, setIsScrollDown] = useState(false);

  // const handleHamburgerClick = (event) => {
  //   setIsMobView(!isMobView);
  //   setIsCrossBurger(!isCrossBurger);
  //   const nav_links = document.querySelectorAll(".navBar_link-item");
  //   nav_links.forEach((link, number, event) => {
  //     if (link.style.animation) link.style.animation = "";
  //     else
  //       link.style.animation = `fade 0.5s ease forwards ${number / 7 + 0.2}s`;
  //   });
  //   handleHamburgerClick(event);
  // };

  // const handleScrollDown = () => {
  //   if (window.scrollY >= 80) {
  //     setIsScrollDown(true);
  //   } else {
  //     setIsScrollDown(false);
  //   }
  // };

  // const handleNavClick = (event) => {
  //   handleHamburgerClick(event);
  // };

  // window.addEventListener("scroll", handleScrollDown);

  return (
    <nav 
      // className={`navBar ${isScrollDown ? "navBar_scroll" : "navbar_top"}`}
      // onScroll={handleScrollDown}
    >
      <div className="responsive-logo"><img className="woc-logo" src={image} alt="woc-logo" /></div>

      <div className="navBar_container" ref={navRef} >
        <div className="woc">WOC.</div>
        <ul className="navBar_links" onClick={showNavbar}>
          <li className="navBar_link-item home_comp">
          </li>
          <li className="navBar_link-item home_mob">
          </li>
          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/#About"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              About
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/projects"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Projects
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/#timeline"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Timeline
            </a>
          </li>
          <li className="navBar_link-item" onClick={showNavbar}>
            <a
              // style={{ color: navLinkColor }}
              href="/#sponsors"
              onClick={showNavbar}
              className="navBar_link"
            >
              Sponsors
            </a>
          </li>

          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/#developer"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Our Team
            </a>
          </li>

          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/#faq"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              FAQs
            </a>
          </li>

          <button className="navBar_apply-now"><a className="apply-now-link" href="/studentApplication" target="_blank">APPLY NOW</a></button>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
        {/* <div className="hamburger_container">
          <div
            className={`navBar_hamburger ${
              isCrossBurger ? "cross-burger" : null
            }`}
            onClick={handleHamburgerClick}
          >
            <div className="navBar_line1"></div>
            <div className="navBar_line2"></div>
            <div className="navBar_line3"></div>
          </div>
        </div> */}
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
