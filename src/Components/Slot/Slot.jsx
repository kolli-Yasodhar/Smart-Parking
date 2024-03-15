import React from 'react'
// import '../Slot/Slot.css'

const Slot = () => {
  return (
    <div>
        <div className='slot w-[4vw] h-[4vw] border bg-green-400 rounded-md flex justify-center items-center
         text-transparent  hover:text-black  transition-all duration-500  
          hover:bg-white shadow-md cursor-pointer '>
            <p className='text-2xl'>13</p>
        </div>
    </div>
  )
}

export default Slot

//  transition-property: all;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms;  hover:scale-125
// import React, { useState } from 'react';
// import Modal from './Modal'; // Import your Modal component
// import { useDisclosure } from '@chakra-ui/react';

// const Slot = () => {
//   // const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

//     const { isOpen, onOpen, onClose } = useDisclosure()

//   const handleSlotClick = () => {
//     onOpen();
//   };

//   // const handleCloseModal = () => {
//   //   setModalOpen(false); // Close the modal
//   // };

//   return (
//     <div>
//       <div
//         className='slot w-[4vw] h-[4vw] border bg-green-400 rounded-md flex justify-center items-center
//          text-transparent  hover:text-black  transition-all duration-500  
//           hover:bg-white shadow-md cursor-pointer '
//         onClick={handleSlotClick} // Handle click event to open modal
//       >
//         <p className='text-2xl'>13</p>
//       </div>
      
//       {/* {modalOpen && <Modal onClose={handleCloseModal} />} Render the modal if modalOpen is true */}
//       <Modal isOpen={isOpen} onClose={onClose} />
//     </div>
//   );
// };

// export default Slot;
