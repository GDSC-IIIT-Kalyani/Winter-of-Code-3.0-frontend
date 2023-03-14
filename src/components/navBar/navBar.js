import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import { Link } from "react-router-dom";
import image from "../../assets/logo.png";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
            <Link to="/" className="navBar_link">
              Home
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link to="/about" className="navBar_link">
              About
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link
              // style={{ color: navLinkColor }}
              to="/timeline"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Timeline
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link
              // style={{ color: navLinkColor }}
              to="/organisations"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              organisations
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link
              // style={{ color: navLinkColor }}
              to="/projects"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Projects
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link
              // style={{ color: navLinkColor }}
              to="/sponsors"
              // onClick={handleNavClick}
              className="navBar_link"
            >
              Sponsors
            </Link>
          </li>

          <li className="navBar_link-item">
            <Link
              // style={{ color: navLinkColor }}
              to="/faqs"
              // onClick={handleNavClick}
              className="navBar_link" 
            >
              FAQs
            </Link>
          </li>

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
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
}

export default NavBar;
