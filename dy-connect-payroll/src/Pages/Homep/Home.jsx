import React from 'react'
import Header from '../../Components/Header/Header'
import Barchart from '../Barchart/Barchart'
import Linechart from '../Linechart/Linechart'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {UserData} from '../../Data'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data)=> data.month),
    datasets: [{
      label: 'Users Gained',
      data: UserData.map((data)=> data.userGain),
      // backgroundColor: ['green', 'blue', 'purple'],
      // borderColor: 'black',
      // borderWidth: 1,
    }]
  })

  return (
    <div className='flex flex-col items-center border w-full min-h-screen border-purple-300 bg-slate-200'>
      <Header />
      <div className='flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-around border border-red-500 w-full md:w-full lg:w-4/5 xl:w-4/5 bg-white mt-5 rounded-lg'>
        <Cards/>
      </div>
      <div className='flex flex-col justify-center border border-yellow-400 mt-5 w-full md:w-full lg:w-4/5 xl:w-4/5 md:flex-row lg:flex-row'>
        <Barchart chartData={userData}/>
        <Linechart chartData={userData}/>
      </div>
      {/* <div className='border border-b-teal-600 bg-green-700 w-full h-72'><Footer/></div> */}
      <div>
        <Footer/>
      </div>
      <Footer/>
      {/* <Footer/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home