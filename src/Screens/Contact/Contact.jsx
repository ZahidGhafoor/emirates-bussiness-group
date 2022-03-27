import React from 'react'
import "./Contact.scss"


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
          <LocationOnIcon className='info__icons' />
          <div className="info__text">WEST CORNICHE ROAD, AL SAWARI TOWER (A), FLOOR NO.0 | ABU DHABI - UAE</div>
        </div>


        <div className="info1">
          <LocalPhoneIcon className='info__icons' />
          <div className="info__text"> +971-5-28774900</div>
          
        </div>
        <div className="info1">
          <FaxIcon className='info__icons' />
          <div className="info__text">+971-5-28774900</div>
        </div>
        <div className="info1">
          <EmailIcon className='info__icons' />
          <div className="info__text">info@jazmangroup.com</div>
        </div>
        <div className="info1">
          <AccessTimeIcon className='info__icons' />
          <div className="info__text">8AM to 5PM</div>
        </div>

        <hr className="info__hr"/>
      </div>

      <div className="map">
        <div className="heading">
          Map
        </div>
        <div style={{ height: "70vh" }} className="google-map-code">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.8083639023066!2d74.4158532154682!3d31.087257175509794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b9e4c0b469e5%3A0xe8e1bd8667a7f333!2sShakir%20madical%20store!5e0!3m2!1sen!2sin!4v1644147325324!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
      </div>

    <div className="form">
      <div className="form__header">
      <EmailIcon className='header__icons' />
      <div className="title">Send us a message</div>

      <div className="inputs">
        <div className="input1">
          <div className="input__heading">Full Name<sup>*</sup></div>
          <input type="text" className="form__input"/>
        </div>
        <div className="input1">
          <div className="input__heading">Email<sup>*</sup></div>
          <input type="email" className="form__input"/>
        </div>
        <div className="input1">
          <div className="input__heading">Phone<sup>*</sup></div>
          <input type="number" className="form__input"/>
        </div>
        <div className="input1">
          <div className="input__heading">Subject<sup>*</sup></div>
          <input type="text" className="form__input"/>
        </div>
        <div className="input1">
          <div className="input__heading">Message<sup>*</sup></div>
          <textarea  rows="20" cols="50" type="text" className="form__input"/>
        </div>
      </div>
      <button className="form__btn">
        SEND
      </button>

      </div>

    </div>



    </div>


  );
}

export default Contact