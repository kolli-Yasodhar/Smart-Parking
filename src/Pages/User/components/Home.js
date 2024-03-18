import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
import ParkingImg from '../Assets/ParkingImg.svg';
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (

    <div className="home-container mt-10">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section ml-8 ">
          <h1 className="primary-heading h-[450px]">
           
            {/* <TypeAnimation 
              sequence={
                [` Your Can Choose\nFor Your Best Spot\nAmong The\nVacancies !..`,
                  100,
                  "",
                ]
              }
              speed={10}
              deletionSpeed={5}
              style={{whiteSpace: 'pre-line'}}
              repeat={Infinity}
            />  */}

            <ReactTyped 
              strings={[` You Can Choose\nThe Best Spot\nAmong The\nVacancies !..`] }
              typeSpeed={100}
              loop
              backSpeed={100}
              
            />

          </h1>
          <p className="primary-text">
          It mainly focuses on reducing the time in finding the parking lots in the parking area. It also lessens fuel consumption, which in turn reduces the carbon footprints in the atmosphere.

          we hope, you enjoy your day ..
          </p>
          <button className="secondary-button ml-12" onClick={() => navigate('/booking')} >
            Select Slot Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={ParkingImg} height={800} width={800} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
