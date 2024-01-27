import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from '../User/UserPage'

const CustomerRouters = () => {
  return (
    <div>
        <Routes> 
           <Route path='/' element={<UserPage/>} />
        </Routes>
    </div>
  )
}

export default CustomerRouters