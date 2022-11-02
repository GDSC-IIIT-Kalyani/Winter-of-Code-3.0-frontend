import React, { useState } from "react";
import "./timeline.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from "./timeline_data";
import { Diamond } from "react-awesome-shapes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import green from "../../assets/timeline/green.png";
import greenEdge from "../../assets/timeline/greenEdge.png";
import white from "../../assets/timeline/white.png";
import red from "../../assets/timeline/red.png";
import redEdge from "../../assets/timeline/redEdge.png";
function Timeline() {
  const [carouselIdx, setIdx] = useState(0);
  const active = 3;
  const DiamondColor = (idx) => {
    if (idx === active) {
      return "#ffffff";
    } else if (idx > active) {
      return "#cf0404";
    } else return "#4fff87";
  };
  const handleprev = () => {
    if (carouselIdx > 0) {
      setIdx(carouselIdx - 1);
    }
  };
  const handlenext = () => {
    if (carouselIdx < data.length) {
      setIdx(carouselIdx + 1);
    }
    console.log(carouselIdx);
  };
  // const [st, setst] = useState(1);
  const line = (idx) => {
    return idx === 0
      ? 1
      : idx === data.length - 1
      ? 5
      : idx === active
      ? 3
      : idx > active
      ? 4
      : 2;
  };

  return (
    <div id="timeline">
      <div className="timeline-heading">Timeline</div>
      <div className="timeline-carousel">
        <div className="timeline-prev" onClick={handleprev}>
          <FaAngleLeft
            color="#01193d"
            size={25}
            className="timeline-icon"
            onClick={handleprev}
          />
        </div>
        <Carousel
          centerMode={true}
          dynamicHeight={true}
          showThumbs={false}
          selectedItem={carouselIdx}
          showStatus={false}
          useKeyboardArrows={true}
          showIndicators={false}
          centerSlidePercentage={20}
          onChange={(e) => setIdx(e)}
        >
          {data.map((item, idx) => (
            <div
              className={"timeline-item itemnum" + Math.abs(idx - carouselIdx)}
            >
              <div className="timeline-item-date">{item.date}</div>
              <div className="timeline-item-shape">
                <div className="timeline-item-shape-diamond">
                  <Diamond
                    color={DiamondColor(idx)}
                    className="timeline-item-shape-diamond"
                    size={["15px", "15px", "20px", "20px"]}
                    zIndex={1}
                  />
                </div>
                <div
                  style={{
                    backgroundImage: `url(${
                      idx === 0
                        ? greenEdge
                        : idx === data.length - 1
                        ? redEdge
                        : idx === active
                        ? white
                        : idx > active
                        ? red
                        : green
                    })`,
                  }}
                  className={
                    "timeline-item-shape-line timeline-line" + line(idx)
                  }
                />
              </div>
              <div className="timeline-item-title">{item.title}</div>
            </div>
          ))}
        </Carousel>
        <div className="timeline-prev" onClick={handlenext}>
          <FaAngleRight
            className="timeline-icon"
            color="#01193d"
            size={25}
            onClick={handlenext}
          />
        </div>
      </div>
    </div>
  );
}
export default Timeline;
