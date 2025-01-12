import React from 'react'
import "../Long/Long.css"
import Button from '../Button/Button'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Long(props) {
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);
  return (
    <div className='long_main' style={{backgroundColor:props.color}} data-aos="fade-up">
        <div className="right_img">
            <img src={props.image} alt="" className='image-style'/>
        </div>
        <div className="left_text">
            <p>{props.text}</p>
            <Button title="EXPLORE"/>
        </div>
    </div>
  )
}

export default Long