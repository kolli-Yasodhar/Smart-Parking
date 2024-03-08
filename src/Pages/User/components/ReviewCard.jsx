import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { useState } from "react";



const ReviewCard = () => {
  const {value, setValue} = useState(4);
  return (
    <div>
      <div className="Services-section-bottom border">
        <img src={ProfilePic} alt="" />
        <p>
          " I am new to Mumbai and it was very ddifficult for me to find
          parking.A friend suggested me this app and it really helped me finding
          nearby parking with real time feeds like parking
          availability,rates,etc."
        </p>
        <div className="Services-stars-container">
         {/* <Rating name="read-only" defaultValue={4.5} readOnly precision={0.5} /> */}
         {/* <Rating name="read-only" value={value} readOnly /> */}
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
