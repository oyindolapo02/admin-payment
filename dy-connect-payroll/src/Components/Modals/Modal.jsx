import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'


const Modal = ({click}) => {
  return (
    <div className='flex flex-col border bg-orange-300 md:hidden fixed z-20 left-0 top-0 w-4/12 h-3/6 pl-3 pt-4 rounded-r-xl'>
        <div className='flex justify-end items-center border text-white-300 h-9 mr-3'><p onClick={click} className='text-3xl'><MdOutlineCancel/></p></div>
        <div className='flex flex-col mt-6 border h-full'>
            <li className='border-b border-gray-400 my-5 text-2xl mr-3'>Home</li>
            <li className='border-b border-gray-400 my-5 text-2xl mr-3'>Task</li>
            <li className='border-b border-gray-400 my-5 text-2xl mr-3'>Message</li>
            <li className='border-b border-gray-400 my-5 text-2xl mr-3'>Analytics</li>
            <li className='rounded-lg my-5 text-2xl mr-3'>Payment</li>
            </div>
    </div>
  )
}

export default Modal