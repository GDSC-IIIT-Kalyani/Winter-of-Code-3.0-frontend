import React, { useState } from "react";
import "./timeline.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import data from "./timeline_data";
import { IconContext } from "react-icons";

function Timeline() {
  const [carouselIdx, setIdx] = useState(0);
  const handleprev = () => {
    if (carouselIdx > 2) {
      setIdx(carouselIdx - 1);
    }
  };
  const handlenext = () => {
    if (carouselIdx < data.length - 3) {
      setIdx(carouselIdx + 1);
    }
  };
  return (
    <div id="timeline">
      <div className="timeline-heading">Timeline</div>
      <div className="timeline-carousel">
        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
          <div>
            {" "}
            <GrFormPrevious
              className="timeline-carousel-prev"
              color="white"
              onClick={handleprev}
            />
          </div>
        </IconContext.Provider>
        {data.map((item, idx) =>
          Math.abs(idx - carouselIdx) <= 2 ? (
            <div
              className={"timeline-item itemnum" + Math.abs(idx - carouselIdx)}
            >
              {console.log(idx, carouselIdx)}
              <div className="timeline-item-date">{item.date}</div>
              <div className="timeline-item-title">{item.title}</div>
            </div>
          ) : (
            <></>
          )
        )}
        <GrFormNext className="timeline-carousel-next" onClick={handlenext} />
      </div>
    </div>
  );
}
export default Timeline;
