import React from 'react'
import {useSelector } from 'react-redux';

function OccuipedAndFreeStatus({type}) {
    // const dispatch = useDispatch();
    const admin = useSelector(store => store.admin);

    const slots = admin?.slots?.filter(slot => slot.slotType === type);

    const occupiedSlots = slots?.reduce((accumulator, slot) => {
                                            if(slot.occupancyStatus === "free")
                                              return  accumulator + 0;
                                            else    
                                              return  accumulator + 1;
                                         },0)
  
    return (
        <div className=' flex items-center justify-center space-x-5 m-5'>
            <p className='h-[5vh] '>Total - </p> <span className=' bg-orange-400 text-white p-1 px-2 rounded-full animate-bounce'>{slots?.length}</span>
            <p className='h-[5vh] '>Occupied - </p> <span className=' bg-green-400 text-white p-1 px-2 rounded-full animate-bounce'>{occupiedSlots}</span>
            <p className='h-[5vh]'>Free - </p><span className=' bg-slate-400 text-white p-1 px-2 rounded-full animate-bounce'>{slots?.length - occupiedSlots}</span>
        </div>
    )
}

export default OccuipedAndFreeStatus