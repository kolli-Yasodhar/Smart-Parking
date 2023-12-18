import React, { useState } from 'react'

const UpdateParkingPrice = () => {
  const [newTwoWheelerPrice, setNewTwoWheelerPrice] = useState();
  const [newThreeWheelerPrice, setNewThreeWheelerPrice] = useState();
  const [newFourWheelerPrice, setNewFourWheelerPrice] = useState();

  function handleTwoWheelerPriceChange(e) {
      setNewTwoWheelerPrice(e.target.value);
  }

  function handleThreeWheelerPriceChange(e) {
    setNewThreeWheelerPrice(e.target.value);
  }

  function handleFourWheelerPriceChange(e) {
    setNewFourWheelerPrice(e.target.value);
  }

  function handleUpdatePrice() {
    console.log("Parking prices updated ..!");
  }


  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>

      <div className=' w-[70%] h-[45%] mb-10 flex flex-col items-center gap-8 '>
        <h1 className='text-3xl font-serif'>Update the Parking Prices</h1>

        <table className='table-auto text-center   '>

          <thead>
            <tr className='text-2xl'>
              <th></th>
              <th >Existing Price</th>
              <th>New Price</th>
            </tr>
          </thead>

          <tbody className='text-2xl'>
            <tr > 
              <td>Two Wheeler</td>
              <td>50$</td>
              <td><input type="number"  onChange={(e) => handleTwoWheelerPriceChange(e)} placeholder='Enter New Value' /></td>
            </tr>

            <tr>
              <td>Three Wheeler</td>
              <td>50$</td>
              <td><input type="number" onChange={(e) => handleThreeWheelerPriceChange(e)}  placeholder='Enter New Value'/></td>
            </tr>

            <tr>
              <td>Four Wheeler</td>
              <td>50$</td>
              <td><input type="number" onChange={(e) => handleFourWheelerPriceChange(e)} placeholder='Enter New Value' /></td>
            </tr>
          </tbody>
        </table>

        <button className='py-2 px-8 bg-green-400 rounded-md' onClick={handleUpdatePrice}>Update</button>
      </div>

    </div>
  )
}

export default UpdateParkingPrice