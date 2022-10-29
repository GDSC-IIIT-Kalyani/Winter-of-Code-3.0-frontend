import React, { useState } from "react";
import "./timeline.css";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import data from "./timeline_data";

function Timeline() {
  const [carouselIdx, setIdx] = useState(0);
  const handleprev = () => {
    if (carouselIdx > 0) {
      setIdx(carouselIdx - 1);
    }
  };
  const handlenext = () => {
    if (carouselIdx < data.length - 1) {
      setIdx(carouselIdx + 1);
    }
  };
  return (
    <div id="timeline">
      <div className="timeline-heading">Timeline</div>
      <div className="timeline-carousel">
        <GrPrevious className="timeline-carousel-prev" onClick={handleprev} />
        {data.map((item, idx) =>
          Math.abs(idx - carouselIdx) >= 2 ? <></> : <></>
        )}
        <GrFormNext className="timeline-carousel-next" onClick={handlenext} />
      </div>
      {/* <ul className="timeline-list">
        <li className="timeline-item">
          <div className="timeline-dates">1st - 31st Nov'22</div>
          <div className="timeline-content">Student Application Open</div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">1st -5th Dec'22 </div>
          <div className="timeline-content">Internal Screening</div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">5th Dec'22</div>
          <div className="timeline-content">Inaurgral Ceremony </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">6th - 31st Dec'22 </div>
          <div className="timeline-content">
            Proposal Writing session + Organization Session
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">1st-15th Jan'23</div>
          <div className="timeline-content">Community bonding phase</div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">15th Jan - 28th Feb'23 </div>
          <div className="timeline-content">Coding phase</div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dates">1st - 15th FEB'23 </div>
          <div className="timeline-content">Mentor Feedback phase</div>
        </li>
      </ul> */}
    </div>
  );
}
export default Timeline;
