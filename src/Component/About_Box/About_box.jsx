import React from "react";
import "../About_Box/About_Box.css"
import { FaFacebookF,FaInstagram,FaTwitter,FaGoogle } from 'react-icons/fa'


function About_box(props) {
  return (
    <div className="CARD">
        <div className="card" style={{width:props.width}}>
          <div className="content">
            <h2 className="name">{props.name}</h2>
            <span className="post">{props.position}</span>
            <h3 className="detail">"{props.info}"</h3>
            <div className="social">
              <span className="face"><FaFacebookF /></span>
              <span className="inta"><FaInstagram/></span>
              <span className="twit"><FaTwitter/></span>
              <span className="goo"><FaGoogle/></span>
            </div>
            
          </div>
            <img src={props.image} alt="" className="person_img"/>
        </div>
    </div>
  );
}

export default About_box;
