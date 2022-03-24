import React from 'react'
import "./Header.scss"

import mainImg from "../../../Assets/headerImg.jpg"
import NavBar from '../../../Components/NavBar/NavBar'

const Header = () => {
  return (
    <div className="header__container">
        <div className="main__img">
            <img src={mainImg} alt="" className="img" />
        </div>
    </div>
  )
}

export default Header