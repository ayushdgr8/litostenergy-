import React from 'react'
import '../Video/Video.css'
import video from '../../assets/energy.mp4'
function Video() {
  return (
    <div className='video-div'>
        <video className="video-display" type="video/mp4" autoPlay loop muted style={{height:"100%",width:"100%",borderRadius:"10px",margin:"20px"}}>
          <source src="https://lentoindia.com/assets/Lento-Film.mp4"/>
        </video>
    </div>
  )
}

export default Video