import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Reviews = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
           
  return (
    <div className='w-3/4 m-auto'>
         <Slider {...settings}>
                {[1,1,1,1,1,1,1,11,1,1,1,1,,1,1].map((item) => <ReviewCard/>)}
         </Slider>
    </div>
  )
}

export default Reviews