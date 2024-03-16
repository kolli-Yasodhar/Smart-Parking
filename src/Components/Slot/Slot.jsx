import React from 'react'
// import '../Slot/Slot.css'

const Slot = () => {
  return (
    <div>
        <div className='slot w-[4vw] h-[4vw] border bg-green-400 rounded-md flex justify-center items-center
         text-transparent hover:scale-125 hover:text-black  transition-all duration-500  
          hover:bg-white shadow-md '>
            <p className='text-2xl'>13</p>
        </div>
    </div>
  )
}

export default Slot

//  transition-property: all;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms;