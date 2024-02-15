import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Can Choose For Your Best Spot Among The Vacancies !..

          </h1>
          <p className="primary-text">
          It mainly focuses on reducing the time in finding the parking lots in the parking area. It also lessens fuel consumption, which in turn reduces the carbon footprints in the atmosphere.

          we hope, you enjoy your day ..
          </p>
          <button className="secondary-button">
            Select Slot Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
