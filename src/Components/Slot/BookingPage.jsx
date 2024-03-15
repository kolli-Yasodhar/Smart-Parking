import React from 'react'
import Modal from '../Slot/Modal'
import GroupedSlots from '../Grouped Slots/GroupedSlots'
import { useState } from 'react'

function BookingPage()  {
    const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  return (
    <div>
        <h1 className='text-center text-4xl bg-yellow-300 py-4 ' >
            Book Your Slots Here !
        </h1>

        <div className='bg-blue-100 h-full'>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Two Wheeler </h1>
                <GroupedSlots/>
            </div>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Three Wheeler </h1>
                <GroupedSlots/>
            </div>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Four Wheeler </h1>
                <GroupedSlots/>
            </div>
        </div>
        {modalOpen &&
       <Modal
       setOpenModal={setModalOpen}
        onClose = {handleClose}
       />}
    </div>
  )
} 

export default BookingPage
// className='p-4 space-y-2 shadow-sm'