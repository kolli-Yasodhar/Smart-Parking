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
      <div className="about-section-image-container w-full">
        <img
        className="h-[600px] w-[800px]"
          src="https://img.freepik.com/free-vector/street-paid-parking-concept-illustration_114360-9974.jpg?t=st=1709809609~exp=1709813209~hmac=7b733feba4a5117614cecf69fe54de28a994f7a4265f2839f4a6c029e0b106ba&w=740"
          alt=""
        />
        {/* <video autoPlay  height="450" width="450" muted>
          <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/parking-cars-isometric-4148351-3437896.mp4"  type="video/mp4" />
        </video> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Why You Choose Us ? </p>
        <h1 className="primary-heading">
          Smart Parking Became An Important Part Of Smart City...
        </h1>
        <p className="primary-text">
          Comfortable parking experience. Brokerage free. Genuine Owners.
          Ensured security of your vehicle. Available for residents and
          visitors. Surveillance parking.
        </p>
        {/* <p className="primary-text">
        ParkNow is part of this new initiative and incorporates various features aimed at improving the parking experience for residents and visitors. These will include removing the need for entry barriers at car park entrances and exits for a seamless flow of traffic, as vehicle plates will be registered via cameras.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Demo Parking 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
