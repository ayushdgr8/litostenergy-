import React from "react";
import "../Icons_Box/Icon_box.css"

export default function Icon_Box(props) {
  return (
      <div className="icon-div"
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.bgcolor,
          margin:props.margin,
          display:props.display,
        }}>
          <img
            style={{ width: props.img_width, height: props.img_height }}
            src={props.image}
          />
          <h2 id="icon-title" style={{color:props.color}}>{props.title}</h2>
          <h2 id="icon-text" style={{color:props.text_color}}>{props.text}</h2>
      </div>

  );
}
