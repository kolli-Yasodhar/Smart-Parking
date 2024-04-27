import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextPage = () => {

    const navigate = useNavigate();
    
    function handlePracticePage() {
        navigate(-1);
    }


  return (
    <div className='text-center'>
     You are in  NextPage <br />

     <button onClick={handlePracticePage} >
       Go to Practice Page 
     </button>
    </div>
  )
}

export default NextPage