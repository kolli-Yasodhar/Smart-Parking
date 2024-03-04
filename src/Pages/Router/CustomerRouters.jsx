import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from '../User/UserPage'
import { Aboutpage } from '../User/Aboutpage'
import Footer from '../User/Footer'
import Login from '../Register/Login'
import Signup from '../Register/Signup'
import Contact from '../User/components/Contact'

const CustomerRouters = () => {
  return (
    <div>
        <Routes> 
           <Route path='/' element={<UserPage/>} />
           <Route path='/about' element={<Aboutpage/>} />
           <Route path='/User' element={<UserPage/>} />
          <Route path='/About' element={<Aboutpage/>} />
          <Route path='/Register' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default CustomerRouters