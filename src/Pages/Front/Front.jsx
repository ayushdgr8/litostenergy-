import React from 'react'
import Box from '../../Component/Box/Box'
import Long from '../../Component/Long/Long'
import Video from '../../Component/Video/Video'
import About_Box from "../../Component/About_Box/About_box"
import "../Front/Front.css"

import { useEffect } from 'react'

function Front() {

  return (
    <div className="front-main">
        <Video video="energy.mp4"/>
        <About_Box 
        className="front"
        width="95%" 
        name="Dan Thomas" 
        position="CEO"
        image="person6.png" 
        info="We are a top 10 global independent energy company by hydrocarbon production, set to play a larger role in providing energy the world needs now and into the future. We have a number of growth projects underway and, through our increased scale and resilience, opportunities to continue building a diverse and valuable portfolio."/>
        <h1 id="front-h1">LITOST'S CONTRIBUTION TO THE WORLD</h1>
        <div className='about-box'>

            <Box 
              image="solar.jpg" 
              width="450px" 
              text="Solar Energy Corporation of India Limited (SECI) is a Schedule-A CPSE under the Ministry of New and Renewable Energy (MNRE) for implementation of schemes and development of Renewable Energy projects (Solar, Wind, Hybrid, Round the Clock RE, H2 etc.) etc. in India and abroad. Being a trading license holder, SECI also acts as an intermediary between the project developers and Distribution Companies (DISCOMs)." 
              height="500px"
              img_height="200px"
              img_width="400px"
              color=" rgb(189, 60, 28)"/>

            <Box 
              text="Seven Cowboy Wind Project, LLC submitted filings to the Federal Energy Regulatory Commission for the proposed Seven Cowboy Wind project in March 2022. The project is a 300-megawatt (MW) wind farm in Kiowa and Washita Counties, Oklahoma. It comprises 107 turbines that generate approximately 1.3 terawatt-hours (TWh) of energy annually. The construction started on March 30, 2022, and is expected to be operational by the end of 2022. " 
              width="450px" 
              height="500px"
              image="wind-turbine.jpg"
              img_height="200px"
              img_width="400px"
              color="#0b005c"
              required_but="true"
              />
            <Box 
              text="Small hydel projects normally do not encounter the problems associated with large hydel
              projects of deforestation and resettlement. The projects have potential to meet power
              requirements of remote and isolated areas. These factors make small hydel as one of the
              most attractive renewable source of grid quality power generation. 24 States of the country
              have policies in place towards private sector participation to set up SHP projects. " 
              width="450px" 
              height="500px"
              image="power-plant.jpg"
              img_height="200px"
              img_width="400px"
              color="rgb(189, 60, 28)"/>
        </div>
            
        <div className='provide-box'>
            <Long
            image="wind_mill2.jpg"
            text="Wind energy harnesses the kinetic energy of moving air by using large wind turbines located on land (onshore) or in sea- or freshwater (offshore).
            Wind energy has been used for millennia, but onshore and offshore wind energy technologies have evolved over the last few years to maximize the electricity produced - with taller turbines and larger rotor diameters.
            Though average wind speeds vary considerably by location, the world’s technical potential for wind energy exceeds global electricity production, and ample potential exists in most regions of the world to enable significant wind energy deployment.
            Many parts of the world have strong wind speeds, but the best locations for generating wind power are sometimes remote ones. Offshore wind power offers tremendous potential.
            "
            button="EXPLORE"
            color="#a5fa92e4"
            />
            <Long
            image="water_plant.jpg"
            text="Hydropower harnesses the energy of water moving from higher to lower elevations. 
            It can be generated from reservoirs and rivers. Reservoir hydropower plants rely on stored water in a reservoir, while run-of-river hydropower plants harness energy from the available flow of the river.
            Hydropower reservoirs often have multiple uses - providing drinking water, water for irrigation, flood and drought control, navigation services, as well as energy supply.
            Hydropower currently is the largest source of renewable energy in the electricity sector.
            It relies on generally stable rainfall patterns, and can be negatively impacted by climate-induced droughts or changes to ecosystems which impact rainfall patterns.
            "
            button="EXPLORE"
            color="#9bddf7e9"
            />
            <Long
            image="city.jpg"
            text="Geothermal energy utilizes the accessible thermal energy from the Earth’s interior. Heat is extracted from geothermal reservoirs using wells or other means.
            Reservoirs that are naturally sufficiently hot and permeable are called hydrothermal reservoirs, whereas reservoirs that are sufficiently hot but that are improved with hydraulic stimulation are called enhanced geothermal systems.
            Once at the surface, fluids of various temperatures can be used to generate electricity. The technology for electricity generation from hydrothermal reservoirs is mature and reliable, and has been operating for more than 100 years."
            button="EXPLORE"
            color="#a5fa92e4"
            />
            <Long
            image="solar1.jpg"
            text="Solar energy is the most abundant of all energy resources and can even be harnessed in cloudy weather. The rate at which solar energy is intercepted by the Earth is about 10,000 times greater than the rate at which humankind consumes energy.
            Solar technologies can deliver heat, cooling, natural lighting, electricity, and fuels for a host of applications. Solar technologies convert sunlight into electrical energy either through photovoltaic panels or through mirrors that concentrate solar radiation.
            The cost of manufacturing solar panels has plummeted dramatically in the last decade, making them not only affordable but often the cheapest form of electricity. Solar panels have a lifespan of roughly 30 years, and come in variety of shades depending on the type of material used in manufacturing."
            button="EXPLORE"
            color="#9bddf7e9"
            />
        </div>
        <div className="patner">
          
        </div>
    </div>
  )
}

export default Front