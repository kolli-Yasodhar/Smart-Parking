import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/Dashboard'
import UpdateParkingPrice from '../Admin/UpdateParkingPrice'
import AddParkingSlot from '../Admin/AddParkingSlot'
import ViewParkingSlot from '../Admin/ViewParkingSlot'

const AdminRouters = () => {
  return (
    <div className='flex h-[100vh]'>
       
        <div className='w-[11%] h-full fixed'>
             <Sidebar/>
        </div>

        <div className='w-[82%] ml-[18%]'>
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/update' element={<UpdateParkingPrice/>} />
                <Route path='/add/slot' element={<AddParkingSlot/>} />
                <Route path='/view/slot' element={<ViewParkingSlot/>} />
                
            </Routes>
        </div>
    
    </div>
  )
}

export default AdminRouters