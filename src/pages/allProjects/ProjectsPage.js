import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./Projects.css";
import SlideData from "./SlideData";
import ProjectCard from "./ProjectCard";
import "./grid.css";
import "react-icons/fi";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FiMail } from "react-icons/fi";


const ProjectsPage = (props) => {
  let [proj_type, setproj_type] = useState("all");
  let [proj_org, setproj_org] = useState("all");
  const [empty, setEmpty] = useState(false);
  const [slide, setSlide] = useState(true);
  const [popUpCardInfo, setpopUpCardInfo] = useState({ ideas_array: [], mentors_array: [{}] });


  const handleCardChange = (childData) => {

    setpopUpCardInfo(childData)
    setSlide(false);
    console.log(childData)
    console.log(childData.ideas_array)

  }

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
      <div class="snowflakes" aria-hidden="true" >

        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❄
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❄
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❄
        </div>
      </div>


      <div
        className="projects-page-header"
        style={{ marginTop: props.pageTop ? "20vh" : "0px" }}
      >
        Available Projects
      </div>
      <div className="filter_option">
        <form className="proj_form">
          <select className="proj_slt" onChange={handleChange}>
            <option value="all">All Categories</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="ml">Machine Learning</option>
            <option value="doc">Documentation</option>
            <option value="python">Python</option>
            <option value="testing">Testing</option>
            <option value="php">SQL</option>
            <option value="javascript">JavaScript</option>
            <option value="gui">GUI</option>
            <option value="ethhack">Ethical Hacking</option>
            <option value="cloud">Cloud</option>
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
            <option value="eduhub">Eduhub</option>
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
          <div className="container1" >
            <div className="proj_slides_parent" style={{ display: "flex", justifyContent: "Center", }}>
              <div className="proj_slides" style={{ padding: "15px", maxWidth: "1285px", position: "relative", right: `${slide ? "10px" : "0px"}`, animation: `${slide ? " " : ""}` }} >
                {SlideData.map((slide, idx) => {
                  if (
                    slide.tags.includes(proj_type) &&
                    slide.org_tag.includes(proj_org)
                  ) {
                    return <ProjectCard key={idx} data={slide} slideFunction={handleCardChange} />
                  } else {
                    return null;
                  }
                })}
              </div>
              <div className='PopUpcard' style={{ visibility: `${slide ? "hidden" : " visible "}`, maxWidth: `${slide ? "0px" : "270px"}` }}>
                <div className="Organization_name">
                  {popUpCardInfo.org_name}
                </div>
                <div
                  className="Project_name"
                  style={{
                    visibility: `${slide ? "hidden" : "visible"}`,
                    height: `${slide ? "0" : "30"}%`,
                    fontSize: "1rem",
                    height: "4.5rem"
                  }}
                >
                  {popUpCardInfo.title}
                </div>
                {popUpCardInfo.ideas_array.map(function (idea) {
                  return (
                    <li
                      style={{
                        textAlign: "center",
                        overflowX: "hidden",
                        // wordBreak: "break-word",
                        padding: "5px 10px",
                        color: "#ffff",
                      }}
                    >
                      {idea}
                    </li>
                  );
                })}
                <p style={{ color: "#fff", textAlign: "center", marginTop: "15px", textDecoration: "bold" }}>Mentors</p>
                {popUpCardInfo.mentors_array.map((mentor, idx) => {
                  return (
                    <a className="mentors-flex text-center" href={mentor.link}>
                      <FiMail
                        style={{
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          top: "2px",
                        }}
                        key={idx}
                      ></FiMail>
                      <div
                        style={{
                          color: "white",
                          display: "inline",
                          cursor: "pointer",
                          borderBottom: "1px solid #fff",
                          paddingLeft: "5px",
                          width: "100%",
                        }}
                      >
                        {mentor.name}
                      </div>
                    </a>
                  );
                })}
                <div className="flex-container">
                  <a
                    href={popUpCardInfo.repo_link}
                    className={
                      "git_hub"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon style={{ color: "White", fontSize: "larger", margin: "15px" }} />
                  </a>
                </div>
              </div>
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
