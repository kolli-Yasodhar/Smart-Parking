import React, { useEffect } from 'react'
import Slot from '../Slot/Slot'
import { useDispatch, useSelector } from 'react-redux'
import { findAllSlots } from '../../Redux/Admin/Action';

const GroupedSlots = ({type, dontOpen}) => {
  const dispatch = useDispatch();
  const {admin} = useSelector(store => store);
  
  useEffect(()=>{
      dispatch(findAllSlots())
  },[])

  // console.log("Find all slots --> ", admin.slots);
  // if(admin.slots) {
    const slotsByType = admin?.slots?.filter(slot => slot.slotType === type);
  // }
  // console.log( type, " Wheeler slots ---->" ,slots)
  return (
  
  <div className='h-full w-full flex flex-wrap gap-1 p-1'>
      
           {slotsByType?.map((item) => <Slot slotId={item.id} dontOPen={dontOpen} vehicleType={item.slotType} />)}

    </div>

  )
}

export default GroupedSlots