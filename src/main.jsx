
import { createRoot } from "react-dom/client";

import '@styles/accueil.css';
import '@styles/but1.css';
import '@styles/but2.css';
import '@styles/but3.css';
import Page404 from '@pages/Page404';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Accueil from '@pages/Accueil';
import But1 from "@pages/but1/but1";
import But2 from "@pages/but2/but2";
import But3 from "@pages/but3/but3";
import Condition from "@pages/Condition";
function App() {
  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);


const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen);

};
  return (
    

    <Router>

<div className='header' >

        <NavLink to='/Accueil' className='logo' >
            <div className='titre' >Mon Portfolio
        
            </div>
          </NavLink>
        <div className='header-right'>

        <div className='nav-links'>
          <NavLink to='/Accueil' className='b1' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    fontSize: isActive ? '1.2em' : '1em',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

            Accueil

          </NavLink>


          <NavLink to='/But1' className='b2' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    fontSize: isActive ? '1.2em' : '1em',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

          BUT1

          </NavLink>

          <NavLink to='/But2' className='b3' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    fontSize: isActive ? '1.2em' : '1em',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

BUT2

          </NavLink>


          <NavLink to='/But3' className='b3' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    fontSize: isActive ? '1.2em' : '1em',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

BUT3

          </NavLink>
          {/* <NavLink to='/APropos' className='bouttons' style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })}>
            À Propos
          </NavLink> */}

           


          </div>
      

          <div className='burger-button' onClick={toggleHamburger}>
              <a className='burger-button_menu'>menu</a>


        <div className='burger-button__line line1'style= {hamburgerOpen ? {rotate:"-33deg",  transform: `translate(-0.05em, -0.15em)` } : {rotate:"0deg" }} ></div>
        <div className='burger-button__line line2' style= {hamburgerOpen ? {rotate:"+47deg",  transform: `translate(0.25em, -1.1em)` } : {rotate:"0deg"}}></div>
        <div className='burger-button__line line3' style= {hamburgerOpen ? {rotate:"-90deg",  transform: `translate(+1.5em, -0.5em)` } : {rotate:"0deg" }}></div>

      </div>

      
        </div>
      </div>
      <div 
  className='burger-menu' 
  style={{ 
    display: hamburgerOpen ? 'block' : 'none', 

  }}
>

        <div className='burger-nav-links'>

          <NavLink to='/But1' onClick={toggleHamburger} className='burger-b1' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

            Accueil

          </NavLink>
          <NavLink to='/But2' onClick={toggleHamburger} className='burger-b2' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

              Zinguerie

          </NavLink>
          <NavLink to='/But3' onClick={toggleHamburger} className='burger-b3' style={({ isActive }) => ({
    color: isActive ? '#F4F4F5' : '#2f343d',
    background: isActive ? 'brown' : '#f0f0f0',
  })}>

          Couverture

          </NavLink>


          
          </div>
          </div>
      <Routes>
        <Route path='/' element={<Navigate to='/Accueil' />} />
        <Route path='/Accueil' element={<Accueil />} />
        <Route path='/But1' element={<But1 />} />
        <Route path='/But2' element={<But2 />} />
        <Route path='/But3' element={<But3 />} />
        <Route path='/Condition' element={<Condition />} />


        <Route path='*' element={<Page404 />} />
      </Routes>

      <footer className='footer'>
      <p>Site  © 2023</p>
      
      <NavLink to='/Condition' >
      Condition légales

      </NavLink>

        

      </footer>
    </Router>

    


 )
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);