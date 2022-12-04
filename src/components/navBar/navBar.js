import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import image from "../../assets/logo.png";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <nav>
      <div className="responsive-logo">
        <img className="woc-logo" src={image} alt="woc-logo" />
      </div>

      <div className="navBar_container" ref={navRef} onClick={showNavbar}>
        <div className="woc">WOC.</div>
        <ul className={`navBar_links`}>
          <li className="navBar_link-item">
            <a href="/#home" className="navBar_link">
              Home
            </a>
          </li>

          <li className="navBar_link-item">
            <a href="/#about" className="navBar_link">
              About
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

          <li className="navBar_link-item">
            <a
              // style={{ color: navLinkColor }}
              href="/#organisations"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              organisations
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
              href="/#sponsors"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Sponsors
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

          {/* <button className="navBar_apply-now"><a className="apply-now-link" href="/studentApplication">APPLY NOW</a></button> */}
          <div
            className="apply-button"
            data-hackathon-slug="winter-of-code"
            data-button-theme="light"
            // style="height: 44px; width: 312px"
          ></div>
        </ul>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
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
}

export default NavBar;
