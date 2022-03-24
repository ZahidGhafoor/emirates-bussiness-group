import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.scss"


import logo from "../../Assets/main.png"
import Mobile from './Mobile'

const NavBar = () => {
  return (
    <>
      <div className="navbar__container">
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
          <NavLink className="links" to="/">
            Our Businesses
          </NavLink>
          <NavLink className="links" to="/">
            Media
          </NavLink>
          <NavLink className="links" to="/">
            Careers
          </NavLink>
          <NavLink className="links" to="/">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="mobile__nav">
        <Mobile />
      </div>
    </>
  );
}

export default NavBar