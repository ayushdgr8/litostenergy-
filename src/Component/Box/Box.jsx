import React from 'react'
import Button from '../Button/Button'
import '../Box/Box.css'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Boxes(props) {
  useEffect(()=>{
    Aos.init({
      duration:2000
    },[]);
  })
  return (
    <div className='box-div' style={{width:props.width,height:props.height,backgroundColor:props.color}}>
        <div className="box-image">
            <img style={{width:props.img_width,height:props.img_height}} src={props.image}/>
        </div>
        <div className="text">
            {props.text}
        </div>
        <Button title="READ" color="#00e013"/>
    </div>
  )
}

export default Boxes