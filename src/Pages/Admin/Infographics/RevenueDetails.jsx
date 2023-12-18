import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);


const RevenueDetails = () => {
  const state = {
    labels: [
      'Two Wheelers',
      'Three Wheelers',
      'Four Wheelers',
   
    ],
    datasets: [
      {
        label: 'Total Revenue',
        backgroundColor: [
          '#ff3377',
          '#ffa200',
          'Yellow',
          
        ],
        data: [10, 14, 17],
        hoverOffset : 10
      },
    ],
  }
  return (
    <div className='w-[60%]'>
        <Doughnut
          data={state}
        />
         <h1 className='text-2xl font-serif text-center '>Revenue Statistics</h1>
    </div>
  )
}

export default RevenueDetails