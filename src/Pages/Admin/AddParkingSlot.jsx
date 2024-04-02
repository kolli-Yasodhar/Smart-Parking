import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSlots } from "../../Redux/Admin/Action";
import { ToastContainer, toast } from "react-toastify";

const AddParkingSlot = () => {

  var [numberOfSlots, setNumberOfSlots] = useState(0);
  var [selectedVehicle, setSelectedVehicle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedVehicle(event.target.value);
   
  };

  function handleAddSlot() {
    const data = {
      wheelerType: selectedVehicle,
      noOfSlots: numberOfSlots,
    };
    dispatch(addSlots(data));
    console.log("Slots Added successfully ..!", data);
    // numberOfSlots = null;
    // selectedVehicle = null;
    toast.success("Slots added successfully ! ");
  }

  function handleNumberOfSlots(event) {
    setNumberOfSlots(Number(event.target.value))
    // console.log(typeof(numberOfSlots));
    
  }

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="w-[70%] h-[50%]  flex flex-col items-center text-2xl space-y-8">
        <h1 className="font-serif text-3xl">Add a New Slot</h1>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4 ">


            <label htmlFor="vehicleType">Select Vehicle Type </label>
            <select name="" id="vehicleType" onChange={handleChange}>
                <option value="">Select</option>
                <option value="two">Two Wheeler</option>
                <option value="three">Three Wheeler</option>
                <option value="four">Four Wheeler</option>
            </select>

          </div>

          <div className="flex space-x-10">
            <p>Number of Slots </p>
            <input
              type="number"
             onChange={handleNumberOfSlots}
              placeholder="Enter n.o of slots"
              className="border  outline-green-400"
            />
          </div>
        </div>
        <button
          className="py-2 px-5 bg-green-400 rounded-md"
          onClick={handleAddSlot}
        >
          Add Slots
        </button>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default AddParkingSlot;
