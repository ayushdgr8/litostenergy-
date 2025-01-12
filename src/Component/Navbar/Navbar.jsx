import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"

function Navbar() {
  const [toggle,settoggle]=useState(false);
  const [show,setshow]=useState(true);


// 
  const handleFunction=()=>{
    if(toggle){
      settoggle(false);
    }
    else{
      settoggle(true);
    }
  }

  const CloseFunction=()=>{
    settoggle(false)
  }
 


  const ShowIcons=()=>{
    if(window.innerWidth<=960){
      setshow(false);
    }else{
      setshow(true);
    }
  }

  useEffect(()=>{ShowIcons();},[]);
  
  window.addEventListener('resize',ShowIcons);

  return (
    <nav>
        <div className="icon">
            <Link to="/"><img id="picture" src="power.png" alt="energy" /></Link>
        </div>
        <div className="option">
            <ul className={toggle?"nav-menu list":"nav-menu unlist"}>
                <li className='nav-list-style'><Link to="/history" onClick={CloseFunction}>HISTORY</Link></li>
                <li className='nav-list-style'><Link to="/about" onClick={CloseFunction}>ABOUT US</Link></li>
                <li className='nav-list-style'><Link to="/provide" onClick={CloseFunction}>PROVIDE</Link></li>
                <li className='nav-list-style'><Link to="/worldwide" onClick={CloseFunction}>WORLDWIDE</Link></li>
                <li className='nav-list-style'><Link to="/contact" onClick={CloseFunction}>CONTACT</Link></li>
            </ul>
        </div>
        <div onClick={handleFunction} className='menu-icon'>
          <i className={toggle?'fas fa-times':'fas fa-bars'}/>
      </div>

    </nav>
  )
}

export default Navbar