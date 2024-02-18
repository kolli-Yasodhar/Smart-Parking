import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from '../User/UserPage'
import { Aboutpage } from '../User/Aboutpage'
import Footer from '../User/Footer'

const CustomerRouters = () => {
  return (
    <div>
        <Routes> 
           <Route path='/' element={<UserPage/>} />
           <Route path='/about' element={<Aboutpage/>} />
        </Routes>
    </div>
  )
}

export default CustomerRouters