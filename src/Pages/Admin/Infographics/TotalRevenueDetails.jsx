import React from 'react'
import CountUp from 'react-countup'

const TotalRevenueDetails = () => {
  return (
    <div className='flex flex-col px-12 py-8  bg-slate-200 rounded-md space-y-4 '>
        <h1 className='font-serif text-2xl'>Total Earnings</h1>
        <div className='flex space-x-5 text-2xl'>
            <p>$<CountUp start={0} end={24895} duration={1.3} />+ </p>
            <p > <span className='text-green-500 '>&#9650;</span> 10%</p>
        </div>
        <p className='font-medium'>Compared to last year</p>
    </div>
  )
}

export default TotalRevenueDetails
// 24,895