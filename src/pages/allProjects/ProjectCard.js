import "./ProjectCard.css";
import React, { useState } from "react";
import { FaAngleDown, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// import { Hidden } from "@material-ui/core";

const ProjectCard = (props) => {
  const [showIdeas, setShow] = useState(false);
  return (
    <div className="Card">
      <div
        className="Project_name"
        style={{
          visibility: `${showIdeas ? "hidden" : "visible"}`,
          height: `${showIdeas ? "0" : "30"}%`,
        }}
      >
        {props.data.title}
      </div>
      <div
        className="Project_ideas fa-arial"
        onClick={() => {
          setShow(showIdeas ? false : true);
        }}
      >
        <span style={{ fontFamily:'Vanilla', }}>
          Check Ideas
        </span>
        <FaAngleDown
          style={{
            transition: "all ease-in-out 0.3s",
            marginLeft: "5px",
            transform: `rotateZ(${showIdeas ? "0" : "180"}deg)`,
          }}
        />
      </div>
      <div
        className="Organizer_img"
        style={{
          height: `${showIdeas ? "0" : "50"}%`,
          backgroundImage: `url(${props.data.org_img})`,
        }}
      ></div>
      <div
        className="Ideas"
        style={{
          visibility: `${showIdeas ? "visible" : "hidden"}`,
          height: `${showIdeas ? "290" : "0"}%`,
        }}
      >
        <div className="flex-container">
          <a
            href={props.data.repo_link}
            className={
              "git_hub"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <p style={{ color: "#fff" }}>Mentors</p>
          {props.data.mentors.map((mentor, idx) => {
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
        </div>

        {props.data.Ideas.map((idea, idx) => {
          return (
            <li
              style={{
                textAlign: "left",
                overflowX: "hidden",
                // wordBreak: "break-word",
                padding: "5px 10px",
                color: "#e1e2e3",
              }}
            >
              {idea}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
