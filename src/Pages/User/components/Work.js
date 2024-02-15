import React from "react";
import save_money from "../Assets/pick-meals-image.jpg";
import save_time from "../Assets/choose-image.jpg";
import saftey_security from "../Assets/delivery-image.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: save_money,
      title: "Save Money",
      text: "Save up to 20% on our site compared to the cost of other parking platform.",
    },
    {
      image: save_time,
      title: "Save Time",
      text: "It's easy to compare parking spot. Booking a reservation is quick and simple. ",
    },
    {
      image: saftey_security,
      title: "Saftey And Security",
      text: "Don't worry, we got you covered. Choose the safety features like CCTV, Securtiy guard etc. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Comming To Its Working </p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Machine vision systems or VANETs can be used instead of using sensors. Usage of multiple systems is supported in this architecture. These systems are suitable for both open and closed parking lots. The expenditure would be dependent on the usage of technology to identify occupancy status of parking spaces.

        <h1>In case of sensors</h1>
        <p>Sensors are used to detect and track the location of vehicles in the parking lot. They collect occupancy data which is then relayed to a control unit. The system requires sensors to detect and monitor the availability of parking spaces.</p>
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
