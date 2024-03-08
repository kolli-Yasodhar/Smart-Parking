import React from "react";
import { Aboutpage } from "../Aboutpage";

const Navbar = () => {
  return (
    <main className="font-serif border-b-2 shadow-md   h-[70px] z-10 fixed top-0 w-full">
      <div className="h-16 bg-white flex justify-between align-middle mx-3">
        <a href="/" className="flex  h-16 ml-3">
          <img
            src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png"
            alt="location"
          />
        </a>

        <div className="flex items-center space-x-10 text-xl mt-2 ml-2 mr-4 " >
          <a href="about" className="hover:underline transition-all 250ms ease-in  " >About</a>
          <a href="features" className="hover:underline transition-all 250ms ease-in  ">
            Features
          </a>
          <a href="contact" className="contact  flex items-center hover:underline transition-all 250ms ease-in   ">
            Contact-Us
          </a>
          <a href="login" className="login px-5 rounded-lg my-2 ml-2 py-1 " >
            Login
          </a>

          {/* <div className=' flex items-center font-bold  ' >
       
      </div>

      <div className='flex  text-xl mt-2'>
           </div> */}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
