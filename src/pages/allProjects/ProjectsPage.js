import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./Projects.css";
import SlideData from "./SlideData";
import NavBar from "../../components/navBar/navBar";
import ProjectCard from "./ProjectCard";
import "./grid.css";
import "react-icons/fi";

const ProjectsPage = () => {
  let [proj_type, setproj_type] = useState("all");
  let [proj_org, setproj_org] = useState("all");
  const [empty, setEmpty] = useState(false);
  const handleChange = (e) => {
    let empty = true;
    for (let i = 0; i < SlideData.length; i++) {
      if (
        SlideData[i].tags.includes(e.target.value) &&
        SlideData[i].org_tag.includes(proj_org)
      ) {
        empty = false;
        break;
      }
    }
    setEmpty(empty);

    setproj_type(e.target.value);
  };
  const handleOrg = (e) => {
    let empty = true;
    for (let i = 0; i < SlideData.length; i++) {
      if (
        SlideData[i].tags.includes(proj_type) &&
        SlideData[i].org_tag.includes(e.target.value)
      ) {
        empty = false;
        break;
      }
    }
    setEmpty(empty);

    setproj_org(e.target.value);
  };
  useEffect(() => {
    const proj_form = document.querySelectorAll(".main_item");
    proj_form.forEach((item) => {
      item.addEventListener("click", () => {
        item.children[1].classList.toggle("proj-active");
        item.children[1].children[2].classList.toggle("ideas-active");
        item.children[0].classList.toggle("proj-active-left");
        item.children[0].children[0].children[0].children[0].classList.toggle(
          "idea-hide"
        );
        item.children[0].classList.toggle("back-img");
      });
    });
  }, []);

  return (
    <div className="projects">
      <div className="background">
        <NavBar navLinkColor="white" />
      </div>
      <div className="projects-page-header">Available Projects</div>
      <div className="filter_option">
        <form className="proj_form">
          <select className="proj_slt" onChange={handleChange}>
            <option value="all">All Categories</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="ml">Machine Learning</option>
            <option value="cloud">Cloud</option>
            <option value="doc">Documentation</option>
            {/* <option value="compiler">Compiler</option> */}
            <option value="python">Python</option>
            <option value="flutter">Flutter</option>
          </select>
        </form>
        <form className="proj_form">
          <select className="proj_slt" onChange={handleOrg}>
            <option value="all">All organizations</option>
            <option value="async">AsyncAPI</option>
            <option value="GDevelop">GDevelop</option>
            <option value="openEMR">OpenEMR</option>
            <option value="styava">Styava</option>
            <option value="moja">Moja Global</option>
            <option value="gita">The Gita Initiative</option>
            <option value="clueless">Clueless</option>
            <option value="openCodeyard">Open Codeyard</option>
            <option value="alpha">Alpha.Dev</option>
            <option value="SamagraX">SamagraX</option>
            <option value="polyaxon">Polyaxon</option>
            <option value="hackForCode">HackForCode</option>
            <option value="terraforge">TerraForge3D</option>
            <option value="shorto">Shorto</option>
            {/* <option value="c4gt">Code4GovTech</option> */}
            <option value="devscript">DevScript</option>
            <option value="codeFamily">CodeFamily</option>
            <option value="gdsc">GDSC</option>
          </select>
        </form>
      </div>
      {!empty ? (
        <>
          <div className="container1">
            <div className="proj_slides">
              {SlideData.map((slide, idx) => {
                if (
                  slide.tags.includes(proj_type) &&
                  slide.org_tag.includes(proj_org)
                ) {
                  return <ProjectCard key={idx} data={slide} />;
                } else {
                  return null;
                }
              })}
            </div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                float: "right",
                marginRight: "20px",
                borderRadius: "100px",
                border: "none",
                padding: "8px",
              }}
            >
              <FaAngleDown
                style={{
                  transition: "all ease-in-out 0.3s",
                  fontSize: "30px",
                  color: "blue",
                  transform: `rotateZ(180deg)`,
                }}
              />
            </button>
          </div>
        </>
      ) : (
        <div className="empty_text">
          <h1>No Result Found &#128542;</h1>
        </div>
      )}
    </div>
  );
};
export default ProjectsPage;
