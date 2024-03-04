import React from "react";
//import Logo from "./Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./Style.css";

const Footer = () => {
  return (
    
    <div className="footerCon">
      <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container ml-2">
          <img src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png" alt="not found" />
        </div>
        <div className="footer-icons ml-2">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF /> 
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Services</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>2101011202</span>
          <span>hello@Parking.com</span>
          <span>press@Parking.com</span>
          <span>contact@Parking.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;