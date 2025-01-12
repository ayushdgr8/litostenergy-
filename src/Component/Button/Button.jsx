import React from 'react'
import "../Button/Button.css"

function Button(props) {
  return (
    <div>
        <button style={{backgroundColor:props.color,width:"7rem",borderRadius:"10px",textAlign:"center"}}>
          {props.title}
        </button>
    </div>
  )
}

export default Button