import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPrices, updateParkingPrices } from '../../Redux/Admin/Action';
import { ToastContainer, toast } from 'react-toastify';

const UpdateParkingPrice = () => {

  const dispatch = useDispatch();
  var [newTwoWheelerPrice, setNewTwoWheelerPrice] = useState();
  var [newThreeWheelerPrice, setNewThreeWheelerPrice] = useState();
  var [newFourWheelerPrice, setNewFourWheelerPrice] = useState();

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
    const data = {
        twoWheelerPrice : Number(newTwoWheelerPrice),
        threeWheelerPrice : Number(newThreeWheelerPrice),
        fourWheelerPrice : Number(newFourWheelerPrice)
    }
    // console.log("Parking prices updated ..!", data);
    dispatch(updateParkingPrices(data))
    toast.success("Parking prices updated successfully !");
    newTwoWheelerPrice = "";
    
  }

  const prices = useSelector(store => store?.admin?.prices);
  const updatedPrices = useSelector(store => store?.admin?.updatedPrices)
  // console.log("Prices ----> ", prices)

  useEffect(()=>{
    dispatch(getPrices());
  }, [updatedPrices])


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
              <td><span>₹   </span>{prices?.twoWheelerPrice}</td>
              <td><input type="number" className='text-center'  onChange={(e) => handleTwoWheelerPriceChange(e)} placeholder='Enter New Value' /></td>
            </tr>

            <tr>
              <td>Three Wheeler</td>
              <td><span>₹ </span>{prices?.threeWheelerPrice}</td>
              <td><input type="number" className='text-center' onChange={(e) => handleThreeWheelerPriceChange(e)}  placeholder='Enter New Value'/></td>
            </tr>

            <tr>
              <td>Four Wheeler</td>
              <td className='ml-2'><span>₹ </span>{prices?.fourWheelerPrice}</td>
              <td ><input type="number" className='text-center'  onChange={(e) => handleFourWheelerPriceChange(e)} placeholder='Enter New Value' /></td>
            </tr>
          </tbody>
        </table>

        <button className='py-2 px-8 bg-green-400 rounded-md' onClick={handleUpdatePrice}>Update</button>
        <ToastContainer/>
      </div>

    </div>
  )
}

export default UpdateParkingPrice