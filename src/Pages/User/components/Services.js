import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Services = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        We provide the cheap and best parking spot. You can't find any better and low priced slot's any whwer ! 
        </p>
      </div>
      <div className="Services-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          " i am new to Bangalore and it was very ddifficult for me to find parking.A friend suggested me this app and it really helped me finding nearby parking with real time feeds like parking availability,rates,etc."
        </p>
        <div className="Services-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Siva Ji..</h2>
      </div>
    </div>
  );
};

export default Services;
