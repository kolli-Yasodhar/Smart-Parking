import React from 'react'
import { Aboutpage } from '../Aboutpage'

const Navbar = () => {
  return (
    
    <main className='font-serif'>
    <div className='h-16 bg-white flex justify-start align-middle'>
      <a href="User" className='flex justify-start h-16 ml-3'>
          <img src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png" alt="location" />
      </a>

      <div className='ml-11 flex items-center font-bold'>
        <a href="About">About</a>
        <a href="Features" className='ml-9'>Features</a>
      </div>

      <div className='flex justify-start'>
      <a href="Contact" className='contact mr-3 flex items-center'>Contact-Us</a>
      <a href="Register" className='login'>Login</a>
      </div>
    </div>
    </main>
  )
}

export default Navbar