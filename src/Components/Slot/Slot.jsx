import React, {  useState } from 'react'
import { useDisclosure } from '@chakra-ui/react';
import BookSlotModel from './BookSlotModel';
// import '../Slot/Slot.css'
import { TiTick } from "react-icons/ti";
import { useLocation } from 'react-router-dom';



const Slot = ({dontOPen, slotId, vehicleType, prices, status}) => {


    const location = useLocation();
    const path = location.pathname.split('/').at(-2);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [visible, setVisible] = useState(false); 
    const [selected, setSelected] = useState(false);
    var [slotIdsSelected, setSlotIdsSelected] = useState([]);

    function handleClick() {
      onOpen()
    }

    function handleVisibility() {
      if(!selected) {
        setVisible(!visible);
      }
    }

    function handleSelect() {
      setSelected(!selected);
      if(selected) {
        setSlotIdsSelected((Slots) => [
          ...Slots,
          slotId
        ])
    }
    console.log(slotIdsSelected)
    //  console.log("Slots id SELECTED - ", slotId);
    }

    // console.log("Vehicle Type in slot.jsx file - ", vehicleType);

    // useEffect(()=>{
      
   
    // },[selected])


  return (
    <div>
        <div onClick={handleClick}
         className={`slot w-[4vw] h-[4vw] border ${status === "free" ?  "bg-green-400 cursor-pointer" : "bg-gray-400"} rounded-md flex justify-center items-center
             transition-all duration-100
          shadow-md  relative ${selected ? "scale-90" : ""} `} 
          onMouseEnter={handleVisibility}
          onMouseLeave={handleVisibility}
        >
            {visible && path === 'view' &&  <div  onClick={handleSelect}
             className={`w-5 h-5 rounded-full  flex items-center justify-center 
              absolute top-1 left-1 ${selected ? "bg-blue-600 text-white opacity-100 " : "bg-white"}`}><TiTick  /></div>}
        </div>



       { !dontOPen && <BookSlotModel Open={isOpen} Close={onClose} slotId={slotId} vehicleType={vehicleType} prices={prices} status={status} />}


        
    </div>
  )
}

export default Slot

//  transition-property: all;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms; hover:scale-125  hover:bg-white hover:text-black