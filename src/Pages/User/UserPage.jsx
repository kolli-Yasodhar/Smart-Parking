import "./Style.css";
import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Navbarr from "./components/Navbarr";
function UserPage(){
  return (
    <div>
      {/* <Navbarr/> */}
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