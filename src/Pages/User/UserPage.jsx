import "./Style.css";
import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./Components2/Navbar";
function UserPage(){
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default UserPage