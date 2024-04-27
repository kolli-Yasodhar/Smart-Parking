import React, { useEffect } from 'react'
import GroupedSlots from '../Grouped Slots/GroupedSlots'
import { useDispatch, useSelector } from 'react-redux';
import { getPrices } from '../../Redux/Admin/Action';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';

function BookingPage()  {
    
    const dispatch = useDispatch();

    const prices = useSelector(store => store?.admin?.prices);
    const location = useLocation();
    // console.log("Location = ", location.pathname.split("/")[1] );
    // const path = location.pathname.split("/")[1];

    

    
    
    
    useEffect(()=>{
        if(localStorage.getItem("slotBooked")) {
            toast.success("Slot Booked Successfully ..!", {
                toastId : "1"
            });
        }
        dispatch(getPrices());
      },[])



  return (
    <div>
        <h1 className='text-center text-4xl bg-yellow-300 py-4 ' >
            Book Your Slots Here !
        </h1>

        <div className='bg-blue-100 h-full pb-10'>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Two Wheeler </h1>
                <GroupedSlots type={'two'} prices={prices} />
            </div>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Three Wheeler </h1>
                <GroupedSlots type={'three'} prices={prices} />
            </div>
            <div className='p-4 space-y-2 shadow-sm'>
                <h1 className='text-2xl text-center'>Four Wheeler </h1>
                <GroupedSlots type={'four'} prices={prices} />
            </div>
        </div>
       
       <ToastContainer/>
     
    </div>
  )
} 

export default BookingPage
// className='p-4 space-y-2 shadow-sm'