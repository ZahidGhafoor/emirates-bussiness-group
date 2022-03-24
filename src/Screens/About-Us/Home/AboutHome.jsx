import React from 'react'
import "./AboutHome.scss";

import about from "../../../Assets/about.mp4"

const AboutHome = () => {
  return (
    <div className="about__home__container">
      <video src={about} className="aboutHome__video" autoPlay loop muted />
    </div>
  );
};

export default AboutHome;