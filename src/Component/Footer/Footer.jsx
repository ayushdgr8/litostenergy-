import React from 'react'
import Button from '../Button/Button'
import "../Footer/Footer.css"
import { FaFacebookF,FaInstagram,FaTwitter,FaGoogle } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
        <div>
            <img className="logo" src="./power.png" alt="" />
            <div className="email">
              <input type="email" placeholder='Enter the email' className='join-input'/>
              <Button title="JOIN US" className="button"/>
            </div>
            <div className='Social'>
              <FaFacebookF id="face"/>
              <FaInstagram id="inta"/>
              <FaTwitter id="twit"/>
              <FaGoogle id="goo"/>

            </div>

        </div>
        <div className="subjects">
          <div className="provide">
            <ul>
              <li><h2>PROVIDE</h2></li>
              <li>AIR</li>
              <li>WATER</li>
              <li>SOLAR</li>
              <li>BIOCHEMICAL</li>
            </ul>
          </div>
          <div className="worldwide">
            <ul>
              <li><h2>WORLDWIDE</h2></li>
              <li>EUROPE</li>
              <li>ASIA</li>
              <li>AFRICA</li>
              <li>AUSTRALIA</li>
            </ul>
          </div>
          <div className="connect">
            <ul>
              <li><h2>PROJECT</h2></li>
              <li>VAYU PROJECT</li>
              <li>JAL JEEVAN</li>
              <li>YELLOW DOOR ENERGY</li>
              <li>SPARK ENERGY</li>
            </ul>
          </div>
          <div className="connect">
            <ul>
              <li><h2>JOIN US</h2></li>
              <li>JOIN US</li>
              <li>SIGN IN</li>
              <li>BLOG</li>
              <li>CAREER</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Footer