import React from 'react'
import { useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Expandedcards = ({onClick}) => {

  return (
    <div className='border border-green-400 bg-gray-400 h-3/5 w-full md:left-0 md:right-0 lg:w-4/5 lg:left-28 xl:left-52 z-10 top-24 absolute'>
      <div className='flex justify-end items-center bg-blue-400 h-8 text-2xl'><MdOutlineCancel className='mr-2' onClick={onClick}/></div>
      <div>
        {/* <Bar/> */}
      </div>
    </div>
  )
}

// className='border border-green-400 bg-gray-400 h-3/5 w-full md:left-0 md:right-0 lg:w-4/5 lg:left-28 xl:left-52 z-10 top-24 absolute'

export default Expandedcards