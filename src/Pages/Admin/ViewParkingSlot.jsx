import React from 'react'
import Slot from '../../Components/Slot/Slot'
import GroupedSlots from '../../Components/Grouped Slots/GroupedSlots'
import OccuipedAndFreeStatus from '../../Components/OccupiedAndFreeStatus/OccuipedAndFreeStatus'

const ViewParkingSlot = () => {
  return (
    <div className='w-full h-full p-5 space-y-10 '>



      <div className=' w-full border'>

        <div className='h-[10vh] flex items-center justify-center border bg-yellow-300'>
          <h1 className='text-2xl font-serif '>Two Wheeler Slots</h1>
        </div>

        <div className=''>
          <GroupedSlots type={'two'} dontOpen={true} />
        </div>

        <div className=''>
          <OccuipedAndFreeStatus type={'two'} />
        </div>


      </div>

      <div className=' w-full border'>

        <div className='h-[10vh] flex items-center justify-center border bg-yellow-300'>
          <h1 className='text-2xl font-serif'>Three Wheeler Slots</h1>
        </div>

        <div>
          <GroupedSlots type={'three'} dontOpen={true} />
        </div>

        <div>
            <OccuipedAndFreeStatus type={'three'} />
        </div>

      </div>

      <div className=' w-full border   '>

        <div className='h-[10vh] flex items-center justify-center border bg-yellow-300'>
          <h1 className='text-2xl font-serif'>Four Wheeler Slots</h1>
        </div>

        <div>
          <GroupedSlots type={'four'} dontOpen={true}/>
        </div>

        <div>
          <OccuipedAndFreeStatus type={'four'}/>
        </div>

      </div>

      

    </div>
  )
}

export default ViewParkingSlot