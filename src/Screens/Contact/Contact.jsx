import React from 'react'


import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FaxIcon from "@mui/icons-material/Fax";

const Contact = () => {
  return (
    <div className="contact__header">
      <div className="heading">Contact Us</div>

      <div className="para">
        If you have any questions, suggestion or feedback please do not hesitate
        to contact us.
      </div>

      <div className="info">
        <div className="info1">
          <LocationOnIcon className='info__icons'/>
          
        </div>
      </div>
    </div>
  );
}

export default Contact