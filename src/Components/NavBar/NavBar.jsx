import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.scss"


import logo from "../../Assets/Jazman.png"
import Mobile from './Mobile'
import { useState } from 'react'

const NavBar = () => {

   const [colorChange, setColorchange] = useState(false);
   const changeNavbarColor = () => {
     if (window.scrollY >= 80) {
       setColorchange(true);
     } else {
       setColorchange(false);
     }
   };
   window.addEventListener("scroll", changeNavbarColor);


  return (
    <>
      <div className={colorChange ? "scrool" : "navbar__container"}>
        <div className="logo">
          <img src={logo} alt="" className="main__logo" />
        </div>

        <div className="tabs">
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink className="links" to="/about">
            About Us
          </NavLink>
          <NavLink className="links" to="/business">
            Our Businesses
          </NavLink>
          <NavLink className="links" to="/gallery">
            Media
          </NavLink>
          <NavLink className="links" to="/careers">
            Careers
          </NavLink>
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="mobile__nav">
        <Mobile colorChange={colorChange} />
      </div>
    </>
  );
}

export default NavBar