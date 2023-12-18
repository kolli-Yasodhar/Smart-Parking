import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);


function VehicleDetails() {

  const state = {
    labels: [
      'January',
      'Feburary',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [
      {
        label: 'Two Wheelers',
        backgroundColor: 'blue',
        borderWidth: 2,
        data: [38, 23, 43, 34, 43, 47, 19],
      },
      {
        label: 'Three Wheelers',
        backgroundColor: '#34eb89',
        borderWidth: 2,
        data: [8, 13, 33, 24, 53, 37, 29],
      },
      {
        label: 'Four Wheelers',
        backgroundColor: '#0cede6',
        borderWidth: 2,
        data: [19, 38, 23, 43, 34, 43, 47],
      },
    ],
  }


  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <Bar
        data={state}
      />
      <h1 className='text-2xl font-serif mt-5'>Vehicle Statistics</h1>

    </div>
  );
}

export default VehicleDetails;
