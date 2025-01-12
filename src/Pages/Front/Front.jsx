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
        name="LENTO" 
      
        image="person6.png" 
        info="Lento is driven by research and development but with a difference. Here at Lento the focus is on harnessing power of R&D to develop innovative, future-proof products that are aligned with markets and requirements of end users. A group of young technocrats with this common ideology got together and thus was born Lento, a company specializing in Power Electronics & Energy Efficiency. Today Lento has come a long way from its modest beginnings and our R&D powers manufacturing of advance technologies base product that includes Inverters, Online UPS & static UPS, Automatic Lift Backup System, (ALBS), Solar Power Equipments, LED lights and BLDC motor application-based products."/>
        <h1 id="front-h1">LITOST'S PRODUCTS</h1>
        <div className='about-box'>

            <Box 
              image="https://lentoindia.com/assets/admin/uploads/Solar_Hybrid_domestic_Inverter_(1).png" 
              width="400px" 
              text="SOLAR HYBRID DOMESTIC INVERTER" 
              height="500px"
              img_height="200px"
              img_width="400px"
              color=" rgb(189, 60, 28)"/>

            <Box 
              text="STREET LIGHT SOLUTION " 
              width="400px" 
              height="500px"
              image="https://lentoindia.com/assets/admin/uploads/edit61.jpg"
              img_height="200px"
              img_width="400px"
              color="#0b005c"
              required_but="true"
              />
            <Box 
              text=" ONLINE UPS" 
              height="500px"
              image="https://lentoindia.com/assets/admin/uploads/Online_UPS1.png"
              img_height="200px"
              img_width="400px"
              color="rgb(189, 60, 28)"/>
        </div>
            
        <div className='provide-box'>
            <Long
            image="https://lentoindia.com/assets/admin/uploads/kowledge-3.jpg"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor"
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