import React from 'react'
import VehicleDetails from './Infographics/VehicleDetails'
import RevenueDetails from './Infographics/RevenueDetails'
import TotalRevenueDetails from './Infographics/TotalRevenueDetails'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-col'>
          <div className='h-[10vh] w-full border flex items-center justify-center shadow-md' >
              <h1 className='text-2xl'>Dashboard </h1>
          </div>

          <div className='h-[90vh] w-full  flex ' >
                <div className='w-[58%] ml-8'>
                    <VehicleDetails/>
                </div>

                <div className='w-[42%] flex flex-col' >
                    <div className='h-[60%] flex items-center justify-center' >
                      <RevenueDetails/>
                    </div>

                    <div className='h-[40%] flex justify-center items-center  ' >
                        <TotalRevenueDetails/>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Dashboard