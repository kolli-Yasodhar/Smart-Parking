import React from "react";
import AboutBackground from "../Assets2/about-background.png";
import AboutBackgroundImage from "../Assets2/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container ">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
        Why Parking With ParkNow Is <span className="good ml-3">GOOD</span>
        </h1>
        <p className="primary-text ml-10">
        Finding cheap and best parking space with ease. Providing a lot of features that no other parking platforms provide.

Navigation, Booking, Searching, Safety & Security and many others services at ParkNow which makes your parking experience better than ever'"
        </p>
        


      </div>
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="relative bottom-20 left-20 h-[600px] w-[650px]"  />
      </div>
    </div>
  );
};

export default About;