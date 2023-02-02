import React from 'react'
import Typed from 'react-typed'
import landingimg  from '../../Components/landingpageimg/landingimg.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Landingpage = () => {

  return (
    <div className='flex flex-col w-screen min-h-screen bg-gradient-to-r bg-slate-50 to-blue-200'>
        <div className='flex justify-center items-center bg-white h-14' ><div className='flex justify-end items-center border w-full bg-slate-200 rounded-md h-full md:w-10/12'><Link to='/login'><button className='border rounded-md px-3 py-2 text-lg font-semibold text-slate-600'>Login</button></Link></div></div>
        <div className='flex flex-col bg-slate-200 border rounded-3xl m-auto h-[75vh] pt-3 w-10/12 lg:flex-row lg:w-4/6'>
            <div className='flex flex-col justify-center border w-full items-center text-center px-2 pb-5 h-2/4 lg:h-full lg:text-left lg:items-start lg:pr-5 lg:pl-3'>
                <h1 className='mb-7 text-3xl font-extrabold text-slate-800'>DY-CONNECT-PAYROLL</h1>
                <h3 className='mb-7 text-2xl font-bold text-slate-800'>EASY PAYROLL LIKE NO OTHER</h3>
                <p className='mb-9 text-lg font-medium text-slate-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vel dolor quis non! Officia tempora, placeat culpa obcaecati nisi facilis maiores, quis, temporibus ullam doloribus praesentium aspernatur laboriosam at. Et!</p>
                <Typed className='text-slate-400 font-medium' strings={['YOU ARE WELCOME', 'THIS APP SERVES YOU BETTER', 'HAVE A NICE BROWSING SESSION']} typeSpeed={120} backSpeed={140} loop/>

                <Link to='/registration'><button className='flex items-center justify-center rounded-2xl border bg-blue-400 h-14 font-medium text-lg my-3 px-2 text-slate-600'>Get Started <AiOutlineArrowRight className='ml-2'/></button></Link>
            </div>
            <div className='flex flex-col justify-center border w-full items-center text-center px-2 h-2/4 lg:h-full'>
                <div className='border rounded-3xl border-blue-600 h-full w-full lg:h-1/2 overflow-hidden'>
                  <img className='w-full h-full object-cover' src={landingimg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage

{/* <img className='w-full h-full object-cover' src={landingimg} alt="" /> */}