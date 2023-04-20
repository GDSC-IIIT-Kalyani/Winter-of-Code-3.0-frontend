import "./ProjectCard.css";
import React, { useState } from "react";


const ProjectCard = (props) => {
  const [showIdeas, setShow] = useState(false);

  const handleClick = async () => {
    const currentPopCardInfo = {
      org_name: props.data.org_name,
      title: props.data.title,
      ideas_array: props.data.Ideas,
      mentors_array: props.data.mentors,
      repo_link: props.data.repo_link,
    }
    props.slideFunction(currentPopCardInfo)

  }
  return (
    <>


      <div className="Card" onClick={handleClick}>
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
          className="Organizer_img"
          style={{
            height: `${showIdeas ? "0" : "50"}%`,
            backgroundImage: `url(${props.data.org_img})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default ProjectCard;
