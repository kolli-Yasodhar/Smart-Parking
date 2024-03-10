import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { useState } from "react";



const ReviewCard = () => {



  return (
    // <div>
     
    //   <div className="Services-section-bottom border">
    //     <img src={ProfilePic} alt="" />
    //     <p>
    //       " I am new to Mumbai and it was very ddifficult for me to find
    //       parking.A friend suggested me this app and it really helped me finding
    //       nearby parking with real time feeds like parking
    //       availability,rates,etc."
    //     </p>
    //     <div className="Services-stars-container">
    //      {/* <Rating name="read-only" defaultValue={4.5} readOnly precision={0.5} /> */}
    //      {/* <Rating name="read-only" value={value} readOnly /> */}
    //     </div>
    //     <h2>John Doe</h2>
    //   </div>
   
    // </div>

    <div className="bg-white h-[430px] text-black rounded-xl border mx-3 shadow-lg">
        
        <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center" >
            <img src={ProfilePic} alt="" className="h-44 w-44 rounded-full" />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-4" >
            <p className="text-xl font-semibold" >John Doe</p>
            <p>This is the best place to park your next vehicle here,,,</p>
            {/* <Rating name="read-only" value={2} readOnly /> */}
        </div>
   
    </div>
  );
};

export default ReviewCard;
