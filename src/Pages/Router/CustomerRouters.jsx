import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from '../User/UserPage'
import { Aboutpage } from '../User/Aboutpage'
import Footer from '../User/Footer'
import Login from '../Register/Login'
import Signup from '../Register/Signup'
import Contact from '../User/components/Contact'
import FeaturePage from '../User/FeaturePage'
import BookingPage from '../../Components/Slot/BookingPage'

const CustomerRouters = () => {
  return (
    <div>
        <Routes> 
           <Route path='/' element={<UserPage/>} />
           <Route path='/about' element={<Aboutpage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/features' element={<FeaturePage/>} />
          <Route path='/booking/*' element={<BookingPage/>} /> 
        </Routes>
    </div>
  )
}

export default CustomerRouters