import React from "react";
import About_box from "../../Component/About_Box/About_box";
import Icon_Box from "../../Component/Icons_Box/Icon_Box";
import "../About/About.css"
import {about_data,about_data2} from "../../Component/Data/Data";

function About() {
  return (
    <div style={{backgroundColor:"#051025fd"}}>
      <h1 id="about">OUR TEAM</h1>
      {about_data.map((element)=>{
        return(
          <About_box
          name={element.name}
          position={element.position}
          image={element.image}
          info={element.info}
          />
        )
      })}

      <div className="content-about">
        <p id="about-1">OUR FOCUS</p>
        <p id="about-2">Provide low-cost, lower-carbon energy the world needs</p>
        <p id="about-3">Our resilient and diversified portfolio will help us thrive through the global energy transition.</p>
        <div className="lower">
          {about_data2.map((ele=>{
            return(
              <Icon_Box
              width={ele.width}
              height={ele.height}
              margin={ele.margin}
              img_width={ele.img_width}
              img_height={ele.img_height}
              image={ele.image}
              title={ele.title}
              color={ele.color}
              text={ele.text}
              />
            )
          }))}
        </div>
      </div>
    </div>
  );
}

export default About;
