import React from "react";
import PickMeals from "../Assets2/tick.svg";
import ChooseMeals from "../Assets2/tick.svg";
import DeliveryMeals from "../Assets2/tick.svg";
 

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Navigation",
      text: "It is easy to find places like malls, hospitals, and much more popular sites, but when it comes to finding a specific location like a house, ParkSpot stores the exact location of the parking location and gives a navigation feature that will direct the ParkSpot user to navigate to the desired parking space.This easy-finding feature helps let users experience a hassle-free parking experience",
    },
    {
      image: ChooseMeals,
      title: "Booking",
      text: "Our platform provides short term booking as well as long term rental booking. So if people want to go out of the station for a few days & people who do not have a parking area in their apartment & do not have a parking spot to keep their vehicle, they may not be able to afford airport parking rates & malls do not allow longtime booking. Cheap & secure parking space for the long term at a very reasonable price.",
    },
    {
      image: DeliveryMeals,
      title: "Searching",
      text: "People love their cars & hence they would want to keep their vehicles in a safe & secure parking area. They would want a parking area where there will be security guards, CCTV cameras, etc. ParkSpot provides a genuine and authentic parking space for its users so that no mishappening will be done to the user’s property. ParkSpot provides security to private property,so that users don’t need to worry about the place where they are keeping their vehicles.",
    },
    {
      image: DeliveryMeals,
      title: "Safety & Security",
      text: "People go to places like shopping malls, hospitals, and many local areas with their cars, without thinking that there may not be available car parking spaces. Maps can help you search popular sites but ParkSpot along with search provides additional information like current availability, rates, distance, etc. ParkSpot also helps users to search apartment parking areas.",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Smart parking is an efficient and cost-effective system to monitor the availability of parking spaces in real-time. Technologies such as sensors and cameras detect free parking spaces and direct drivers to the most convenient spot via digital signage such as LED-displays. By leveraging the power of artificial intelligence, edge computing, and interconnectivity, the complexity of driving in a complicated environment is simplified.


        </p>
      </div>
      
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
          
          
        ))}
      </div>
    </div>
  );
};

export default Work;