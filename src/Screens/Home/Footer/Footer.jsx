import React from 'react'
import "./Footer.scss"

import { NavLink } from 'react-router-dom'

import footerImg from "../../../Assets/footerImg.png"



import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="upper">
                    <div className="navlinks">
                        <div className="first">
                            <NavLink className="links" to="/">Home</NavLink>
                            <NavLink className="links" to="/">About Us</NavLink>
                            <NavLink className="links" to="/">Our Businesses</NavLink>
                        </div>
                        <div className="first">
                            <NavLink className="links" to="/">Media</NavLink>
                            <NavLink className="links" to="/">Careers</NavLink>
                            <NavLink className="links" to="/">Contact</NavLink>
                        </div>
                    </div>

                    <div className="local__info">

                        <div className="first">
                            <LocationOnIcon className='first__icon' />
                            <div className="text">
                                WEST CORNICHE ROAD, AL SAWARI TOWER (A), FLOOR NO.0 | ABU DHABI - UAE
                            </div>
                        </div>
                        <div className="first">
                            <LocalPhoneIcon className='first__icon' />
                            <div className="text">
                            +971-5-28774900
                            </div>
                        </div>
                        <div className="first">
                            <EmailIcon className='first__icon' />
                            <div className="text">
                            info@jazmangroup.com
                            </div>
                        </div>
                    </div>
                    <div className="social__icons">
                        <FacebookIcon className="social__links"/>
                        <YouTubeIcon className="social__links"/>
                        <LinkedInIcon className="social__links"/>
                    </div>

                </div>
                <div className="bottom">
                    <img src={footerImg} alt="" className="footer__img" />

                    <div className="footer__text">
                    COPYRIGHT © 2022 JAZMAN BUSINESS GROUP. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer