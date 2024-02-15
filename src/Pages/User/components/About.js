import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Why You Choose Us ? </p>
        <h1 className="primary-heading">
          Smart Parking Became An Important Part Of Smart City...
        </h1>
        <p className="primary-text">
        Comfortable parking experience. Brokerage free. Genuine Owners. Ensured security of your vehicle. Available for residents and visitors. Surveillance parking. Simple steps to list property. Earn money on the go. Available on app and website.
        </p>
        <p className="primary-text">
        ParkSpot is part of this new initiative and incorporates various features aimed at improving the parking experience for residents and visitors. These will include removing the need for entry barriers at car park entrances and exits for a seamless flow of traffic, as vehicle plates will be registered via cameras.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Demo Parking 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
