import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from 'react-scroll'
import { useState } from 'react';

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [hamBurger, setHamBurger] = useState(false)
  return (
    <>
      <div className="header">
        <img src={Logo} className='logo' alt="" />
        {(hamBurger === false && mobile === true) ? (
          <div style={{padding:"0.5rem",background:"var(--appColor)",borderRadius:"5px"}} ><img style={{width:'1.5rem',height:'1.5rem'}} onClick={()=> setHamBurger(true)} src={Bars} alt="" /></div>
        ) : <ul className='header-menu'>
          <li >
            <Link 
            onClick={()=> setHamBurger(false)}
            to='hero'
            spy='true'
            smooth='true' >Home</Link></li>
          <li onClick={()=> setHamBurger(false)}><Link 
          onClick={()=> setHamBurger(false)}
          to='program'
          spy='true'
          smooth='true'
          >
          
          Programs</Link></li>
          <li onClick={()=> setHamBurger(false)}><Link 
          onClick={()=> setHamBurger(false)}
          to='re asons'
          spy='true'
          smooth='true'
          >
          
          join Us</Link></li>
          <li onClick={()=> setHamBurger(false)}><Link 
          onClick={()=> setHamBurger(false)}
          to='plans'
          spy='true'
          smooth='true'
          >
          
          Plans</Link></li>
          <li ><Link 
          onClick={()=> setHamBurger(false)}
          to='testimonials'
          spy='true'
          smooth='true'
          >
          
          Testimonials</Link></li>
        </ul>}

      </div>
    </>
  )
}

export default Header