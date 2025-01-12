import React from 'react'
import "../Contact/Contact.css"
import Button from "../../Component/Button/Button";

function Contact() {
    return (
    <div className='contact'>
        <div className="form">
          <h1 className="h1">CONNECT</h1>
            <label className='label-style'>USERNAME</label>
            <input className="input-style" type="text" placeholder='Enter the name'/>
            <label className='label-style'>EMAIL</label>
            <input className="input-style" type="email" placeholder='Enter the email'/>

            <label className='label-style'>PHONE</label>
            <input className="input-style" type="phone" placeholder='Enter the phone'/>

            
            <label className='label-style'>SEND MESSAGE</label>
            <textarea id="textarea" cols="100" rows="5" placeholder='Send Message'></textarea>
            
            <Button title="SUMBIT"  color="#2dcf00"/>
            
        </div>
    </div>
  )
}

export default Contact