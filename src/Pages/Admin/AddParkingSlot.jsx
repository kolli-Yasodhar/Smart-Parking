import React, { useState } from 'react'

const AddParkingSlot = () => {
  const [numberOfSlots, setNumberOfSlots] = useState();
  function handleSelectVehicle(e) {
    console.log("Selected Vehicle - ", e.target.value);
  }

  function handleAddSlot() {
    console.log("Slots Added successfully ..!")
  }
  
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
        <div className='w-[70%] h-[50%]  flex flex-col items-center text-2xl space-y-8' >
                <h1 className='font-serif text-3xl'>Add a New Slot</h1>
                <div className='flex flex-col space-y-2' >
                    <div className='flex space-x-4 '>
                      <p>Select Vehicle Type  </p>
                       <select name="" id="" onChange={(e) => handleSelectVehicle(e)}> 
                            <option value="twoWheeler">Two Wheeler</option>
                            <option value="threeWheeler">Three Wheeler</option>
                            <option value="fourWheeler">Four Wheeler</option>
                      </select>
                   </div>

                   <div className='flex space-x-10'>
                      <p>Number of Slots  </p>
                      <input type="number" onChange={(e) => setNumberOfSlots(e.target.value)} placeholder='Enter n.o of slots' className='border  outline-green-400' />
                   </div>
                </div>
                <button className='py-2 px-5 bg-green-400 rounded-md' onClick={handleAddSlot}>Add Slot</button>
        </div>
    </div>
  )
}

export default AddParkingSlot