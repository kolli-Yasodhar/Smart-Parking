import React from "react";
import AboutBackground from "../Assets2/about-background.png";
import AboutBackgroundImage from "../Assets2/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
        Why Parking With ParkSpot Is <span className="good">GOOD</span>
        </h1>
        <p className="primary-text">
        Finding cheap and best parking space with ease. Providing a lot of features that no other parking platforms provide.

Navigation, Booking, Searching, Safety & Security and many others services at ParkSpot which makes your parking experience better than ever'"
        </p>
        


      </div>
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
    </div>
  );
};

export default About;