import { useState } from 'react'
import { Navbar,Front,History,About,Footer,Contact,Provide,WorldWide } from './Component/Links'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
    return(
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Front/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/provide" element={<Provide/>}/>
            <Route path="/worldwide" element={<WorldWide/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>

      </div>
    )
}

export default App
