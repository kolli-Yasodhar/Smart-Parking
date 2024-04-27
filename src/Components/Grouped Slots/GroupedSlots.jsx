import React, { useEffect } from 'react'
import Slot from '../Slot/Slot'
import { useDispatch, useSelector } from 'react-redux'
import { findAllSlots } from '../../Redux/Admin/Action';

const GroupedSlots = ({type, dontOpen, prices}) => {
  const dispatch = useDispatch();
  const {admin} = useSelector(store => store);
  const user = useSelector(store => store?.user);
  // const statusChanged = useSelector(store => store?.user?.occupancyStatus);
  
  useEffect(()=>{

    dispatch(findAllSlots())
    
  },[])
  
  
  setInterval(() => {
    dispatch(findAllSlots())
    console.log("Slots are fetched at every 5 minutes interval")
  }, 5 * 60 * 1000);
  
  // console.log("Find all slots --> ", admin.slots);
  // if(admin.slots) {
    // console.log("Type of slots in GroupedSlots.jsx file ", type)
    const slotsByType = admin?.slots?.filter(slot => slot.slotType === type);
  // }
  // console.log( type, " Wheeler slots ---->" ,slots)

 
  return (
  
  <div className='h-full w-full flex flex-wrap gap-1 p-1'>
      

           {slotsByType?.map((item) => <Slot slotId={item.id} dontOPen={dontOpen} vehicleType={item.slotType} prices={prices} status={item.occupancyStatus} />)}



    </div>

  )
}

export default GroupedSlots
