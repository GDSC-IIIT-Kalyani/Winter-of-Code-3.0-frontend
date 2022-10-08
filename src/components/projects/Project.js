import React from "react";
import "./Project.css";
import Orgs from "./organizations";
import leftLogo from "../../assets/projectAssests/winter_about.png";
import "../header/NavBar.css";

const Project = () => {
  return (
    <section id="projects">
      <div id="flex-container">
        <div class="left">
          <img src={leftLogo} alt="" />
        </div>
        <div className="right">
          <ul className="list">
            <li className="items">
              <h2>30+</h2>
              <br />
              GDSCs <br />
              Collab
            </li>
            <li className="items">
              <h2>1500+</h2>
              <br />
              Hackers <br /> All Around
            </li>
            <li className="items">
              <h2>60+</h2>
              <br />
              Day Event <br />
            </li>
          </ul>
          <Orgs />
          <button className="proj-button">
            <a href="/projects">PAST PROJECTS</a>
            {/* <div className="cmg_sn">Coming Soon</div> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
