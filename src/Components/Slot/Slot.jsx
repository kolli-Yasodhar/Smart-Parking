import React from 'react'
import { useDisclosure } from '@chakra-ui/react';
import BookSlotModel from './BookSlotModel';
// import '../Slot/Slot.css'


const Slot = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    function handleClick() {
      onOpen()
    }

  return (
    <div>
        <div onClick={handleClick}
         className='slot w-[4vw] h-[4vw] border bg-green-400 rounded-md flex justify-center items-center
         text-transparent    transition-all duration-500  
          shadow-md cursor-pointer '>
            {/* <p className='text-2xl'>13</p> */}
        </div>


        <BookSlotModel isOpen={isOpen} onClose={onClose} />

        
    </div>
  )
}

export default Slot

//  transition-property: all;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms; hover:scale-125  hover:bg-white hover:text-black