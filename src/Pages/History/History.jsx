import React from "react";
import { data } from "../../Component/Data/Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import "../History/History.css";
function History() {
  return (
    <div className="timeline-div">
      <h1 className="Show">HISTORY</h1>
      <VerticalTimeline lineColor="#02ff2c" animate={true}>
        {data.map((element) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${element.color}`, color: "#fff" }}
              contentArrowStyle={{
                borderRight: "10px solid  red",
              }}
              date={element.date}
              iconStyle={{ background: `${element.color}`}}
            > 
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
              <p>
                {element.text}
              </p>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default History;
