import React from "react";
import { AiFillStar } from "react-icons/ai";
import ReviewCard from "./ReviewCard";

const Services = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Reviews</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        We provide the cheap and best parking spot. You can't find any better and low priced slot's any whwer ! 
        </p>
      </div>

        {/* Reviews */}
        <div className="flex" >

          {[1,1,1,1].map(item => <ReviewCard/>)}

        </div>

    </div>
  );
};

export default Services;
