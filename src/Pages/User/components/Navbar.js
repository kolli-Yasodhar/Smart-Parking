import React from 'react'

const Navbar = () => {
  return (
    
    <main className='font-serif'>
    <div className='h-16 bg-white flex justify-start align-middle'>
      <a href="UserPage" className='flex justify-start h-16'>
          <img src="https://www.parkspot.in/img/psfooterlogo.71c15c61.png" alt="location" />
      </a>
      <select className='company font-medium rounded-md mt-3 mb-3'>
        <option value="COMPANY" className='flex justify-start p-0 ml-28'>COMPANY</option>
        <option value="Aboutpage.jsx" className='flex justify-start'>Go To About</option>
        <option value="Features" className='flex justify-start'>Features</option>
      </select>
      
      <div className='flex justify-start'>
      <button className='contact mr-3'>contact-us</button>
      <button className='login'>Log-in</button>
      </div>
    </div>
    </main>
  )
}

export default Navbar