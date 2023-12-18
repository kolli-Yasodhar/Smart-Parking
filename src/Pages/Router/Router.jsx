import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../Admin/Dashboard'
import UpdateParkingPrice from '../Admin/UpdateParkingPrice'
import AddParkingSlot from '../Admin/AddParkingSlot'
import Login from '../Register/Login'
import Signup from '../Register/Signup'
import UserPage from '../User/UserPage'
import CustomerSupport from '../Customer Support/CustomerSupport'
import ViewParkingSlot from '../Admin/ViewParkingSlot'


const Router = () => {
    const location = useLocation();
  return (
    <div>
        {
            location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/user" && location.pathname !== "/customer/support" && 
            
            <div className='w-full h-full flex'>

                <div className='h-[100vh] w-[18%] border ' >
                    <Sidebar/>
                </div>

                <div className='h-full w-[82%]'>
                        <Routes>
                            <Route path='/' element={<Dashboard/>} />
                            <Route path='/admin/update/prices' element={<UpdateParkingPrice/>} />
                            <Route path='/admin/add/slot' element={<AddParkingSlot/>} />
                            <Route path='/admin/view/slots' element={<ViewParkingSlot/>} />
                        </Routes>
                </div>

            </div>
            
        }

        {
          (  location.pathname === "/login" || location.pathname === "/signup") && 
            <div >
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
            </div>
        }

        {
            location.pathname === "/user" && 
            <div>
            <Routes>
                <Route path='/user' element={<UserPage/>} />
            </Routes>
            </div>
        }

        {
            location.pathname === "/customer/support" && 
            <div>
            <Routes>
                <Route path='/customer/support' element={<CustomerSupport/>} />
            </Routes>
            </div>
        }
    </div>
  )
}

export default Router 