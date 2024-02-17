import React from 'react'
import Footer from './Footer'

export const Aboutpage = () => {
  return (
    
    <main className='font-serif'>

    <div className='flex justify-center mt-24 '>
      <div>
      <img src="https://www.parkspot.in/img/about.1901ddea.svg" alt="mobile-location" className='h-96'/>
      </div>
      <div>
      <h className='text-5xl mr-3 '>Why choose us?</h>
      <p className='mt-3'>Comfortable parking experience. Brokerage free. Genuine Owners. Ensured <br />
      security of your vehicle. Available for residents and visitors. Surveillance <br />
      parking. Simple steps to list property. Earn money on the go. Available on <br />
      app and website.</p>
      <p className='mt-3'>ParkSpot is part of this new initiative and incorporates various features aimed at improving<br/> 
      the parking experience for residents and visitors. These will include removing <br />
      the need for entry barriers at car park entrances and exits for a seamless flow <br />
      of traffic, as vehicle plates will be registered via cameras.</p>
      <p className='mt-16 flex '>Get ParkSpot App 
      <img src="https://www.parkspot.in/img/google-play-badge.15f23d4c.svg" alt="playStore" className='h-9 ml-5'/>
      <img src="https://www.parkspot.in/img/apple-store.8983136c.svg" alt="apple" className='h-9 ml-5'/></p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </main>
  )
}                      