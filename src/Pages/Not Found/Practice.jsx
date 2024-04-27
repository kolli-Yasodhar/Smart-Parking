import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Practice = () => {

  const [message, setMessage] = useState("Vehicle Slot Booked successfully ..!");
  const navigate = useNavigate();
  const delay = 0.05 * 60 * 60 * 1000;

  
  function navigateHandler() {
   
    setTimeout(() => {
      setMessage("Time up for the vehicle to go ...!");
    }, delay);

    navigate("/next")
  }

  return (
    <div className='text-center'>
      <h1 className='text-4xl  flex items-center ' >{message}</h1>
      <button onClick={navigateHandler} >
          Go to Next Page
      </button>
    </div>
  )
}

export default Practice