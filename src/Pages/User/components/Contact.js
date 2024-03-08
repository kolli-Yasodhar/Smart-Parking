import React from "react";
import Navbar from "./Navbar";
import mail from '../Assets/mail.png'
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>

        <Navbar/>

        <div className="contact-page-wrapper">
          <h1 className="primary-heading">Have Question In Mind?</h1>
          <h1 className="primary-heading">Let Us Help You</h1>
          <div className="contact-form-container">
            <div className="flex border py-2 px-3 rounded-2xl mr-5">
              <img src={mail} alt="" height={45} width={45} />
            <input type="text" placeholder="Enter your email " className="border" />
            </div>
            <button className="secondary-button">Submit</button>
          </div>
        </div>

        <Footer/>
    </div>
  );
};

export default Contact;
