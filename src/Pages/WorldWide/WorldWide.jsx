import React from 'react'
import "../WorldWide/WorldWide.css"
import Boxes from '../../Component/Box/Box'
import Icon_Box from '../../Component/Icons_Box/Icon_Box'
function WorldWide() {
  return (
    <div>
        <div className="upper">
            <h1 id="heading-1">EXPLORATION</h1>
            <h1 id="heading-2">Global Exploration Locations</h1>
            <p id="info-para">We continue to build and maintain an exploration portfolio of high-quality prospects to deliver value and resource growth.</p>
        </div>
        <img src="map.png" alt="" id='map' />

        <h2 id="heading-down">Sustainable Business Impact</h2>
        <h4 id="heading2-down">Witness our journey of building a cleaner and greener India harnessing the power of sun and the strength of the wind</h4>

        <div className="lower">
          <Icon_Box 
          width="300px" 
          height="300px" 
          margin="60px 10px 20px 10px"
          image="Energy-Generation.png"
          img_width="200px"
          img_height="150px"
          title="20,434"
          color="black"
          text="MW Renewable Energy Portfolio"
           />
          <Icon_Box 
          width="300px"
          height="300px"
          margin="60px 10px 20px 10px"
          image="Projects.png"
          img_width="200px"
          img_height="150px"
          title="170"
          color="black"
          text="Location"/>
          <Icon_Box
          width="300px"
          height="300px"
          margin="60px 10px 20px 10px"
          image="Units-Generated.png"
          img_width="200px"
          img_height="150px"
          title="5,711"
          color="black"
          text="Million Units generated"/>
          <Icon_Box 
          width="300px" 
          height="300px"
          img_width="200px"
          img_height="150px"
          image="CO2.png"
          color="black"
          title="5.2"
          margin="60px 10px 20px 10px"
          text="Million Tonnes Equivalent CO2 saved"/>
        </div>
        <img src="connection.png" alt="" id="connection" />

    </div>
  )
}

export default WorldWide