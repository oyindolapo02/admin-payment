import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Linechart = ({chartData}) => {
  return (
    <div className='flex justify-center items-center my-2 border border-red-400 bg-white rounded-lg md:w-6/12 h-[30vh] lg:h-[40vh] xl:h-[50vh] ml:mr-2'>
        <Line data={chartData}/>
    </div>
  )
}

export default Linechart

{/* <div className='w-full border h-full bg-green-400'>love</div> */}