import React from 'react'
import Slot from '../../Components/Slot/Slot'
import GroupedSlots from '../../Components/Grouped Slots/GroupedSlots'
import OccuipedAndFreeStatus from '../../Components/OccupiedAndFreeStatus/OccuipedAndFreeStatus'

const ViewParkingSlot = () => {
  return (
    <div className='w-full h-full p-5 space-y-10 '>



      <div className='h-[67vh] w-full border'>

        <div className='h-[10vh] flex items-center justify-center border'>
          <h1 className='text-2xl font-serif '>Two Wheeler Slots</h1>
        </div>

        <div className=''>
          <GroupedSlots />
        </div>

        <div>
          <OccuipedAndFreeStatus/>
        </div>


      </div>

      <div className='h-[67vh] w-full border'>

        <div className='h-[10vh] flex items-center justify-center border'>
          <h1 className='text-2xl font-serif'>Three Wheeler Slots</h1>
        </div>

        <div>
          <GroupedSlots />
        </div>

        <div>
            <OccuipedAndFreeStatus/>
        </div>

      </div>

      <div className='h-[67vh] w-full border   '>

        <div className='h-[10vh] flex items-center justify-center border'>
          <h1 className='text-2xl font-serif'>Four Wheeler Slots</h1>
        </div>

        <div>
          <GroupedSlots />
        </div>

        <div>
          <OccuipedAndFreeStatus/>
        </div>

      </div>

      

    </div>
  )
}

export default ViewParkingSlot