import React, { useState } from "react";
import "./navBar.css";

const NavBar = ({ navLinkColor }) => {
  const [isMobView, setIsMobView] = useState(false);
  const [isCrossBurger, setIsCrossBurger] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleHamburgerClick = (event) => {
    setIsMobView(!isMobView);
    setIsCrossBurger(!isCrossBurger);
    const nav_links = document.querySelectorAll(".navBar_link-item");
    nav_links.forEach((link, number, event) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `fade 0.5s ease forwards ${number / 7 + 0.2}s`;
    });
    handleHamburgerClick(event);
  };

  const handleScrollDown = () => {
    if (window.scrollY >= 80) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  const handleNavClick = (event) => {
    handleHamburgerClick(event);
  };

  window.addEventListener("scroll", handleScrollDown);

  return (
    <nav
      className={`navBar ${isScrollDown ? "navBar_scroll" : "navbar_top"}`}
      onScroll={handleScrollDown}
    >
      <div className="navBar_container">
        <div className="woc">WOC.</div>
        <ul className={`navBar_links ${isMobView ? "mob-view" : "md-4"}`}>
          <li className="navBar_link-item home_comp">
          </li>
          <li className="navBar_link-item home_mob">
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#About"
              onClick={handleNavClick}
              className="navBar_link"
            >
              About
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/projects"
              onClick={handleNavClick}
              className="navBar_link"
            >
              Projects
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#timeline"
              onClick={handleNavClick}
              className="navBar_link"
            >
              Timeline
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#sponsors"
              onClick={handleNavClick}
              className="navBar_link"
            >
              Sponsors
            </a>
          </li>

          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#developer"
              onClick={handleNavClick}
              className="navBar_link"
            >
              Our Team
            </a>
          </li>

          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#faq"
              onClick={handleNavClick}
              className="navBar_link"
            >
              FAQs
            </a>
          </li>

          <button className="navBar_apply-now"><a className="apply-now-link" href="/studentApplication" target="_blank">APPLY NOW</a></button>
        </ul>

        <div className="hamburger_container">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
