import React, { useState } from "react";
import "./timeline.css";
// import { GrNext, GrPrevious } from "react-icons/gr";
import data from "./timeline_data";
import { Diamond } from "react-awesome-shapes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Timeline() {
  const [carouselIdx, setIdx] = useState(0);
  const active = 0;
  const DiamondColor = (idx) => {
    if (idx === active) {
      return "#ffffff";
    } else if (idx > active) {
      return "#cf0404";
    } else return "#018a0f";
  };

  return (
    <div id="timeline">
      <div className="timeline-heading">Timeline</div>
      <div className="timeline-carousel">
        <Carousel
          centerMode={true}
          dynamicHeight={true}
          showThumbs={false}
          useKeyboardArrows={true}
          centerSlidePercentage={
            carouselIdx === 1 || carouselIdx === data.length - 2 ? 33 : 20
          }
          showStatus={false}
          onChange={(e) => setIdx(e)}
        >
          {data.map((item, idx) => (
            <div
              className={"timeline-item itemnum" + Math.abs(idx - carouselIdx)}
            >
              <div className="timeline-item-date">{item.date}</div>
              <div className="timeline-item-shape">
                <Diamond
                  color={DiamondColor(idx)}
                  className="timeline-item-shape-diamond"
                  size={["15px", "15px", "20px", "20px"]}
                  zIndex={1}
                />
              </div>
              <div className="timeline-item-title">{item.title}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Timeline;
