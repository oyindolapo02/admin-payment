import React from 'react'
import { Bar } from 'react-chartjs-2'
import {} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Barchart = ({chartData}) => {
  return (
    <div className='flex justify-center items-center my-2 border border-red-400 bg-white rounded-lg md:w-6/12 lg:w-6/12 h-[30vh] lg:h-[40vh] xl:h-[50vh] md:mr-2'>
        <Bar className='border' data={chartData}/>
    </div>
    
  )
}

export default Barchart

{/* <div className='border w-full md:w-full h-2/4 lg:h-full '></div> */}