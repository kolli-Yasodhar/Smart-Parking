import React from 'react'
import { Aboutpage } from '../Aboutpage'

const Navbar = () => {
  return (
    
    <main className='font-serif'>
    <div className='h-16 bg-white flex justify-start align-middle'>
      <a href="UserPage" className='flex justify-start h-16 ml-3'>
          <img src="https://tse4.mm.bing.net/th?id=OIP.xSoWcIe7q7ErhRqM57xU-QHaHa&pid=Api&P=0&h=180" alt="location" />
          <p className='font-bold text-2xl -ml-1 mt-9 text-red-500'>ParkNow</p>
      </a>

      <div>
        <a href="Aboutpage">Go</a>
      </div>

      <div className='flex justify-start'>
      <button className='contact mr-3'>contact-us</button>
      <button className='login'>Log-in</button>
      </div>
    </div>
    </main>
  )
}

export default Navbar