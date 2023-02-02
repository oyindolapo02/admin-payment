import React from 'react'
import './Header.css'
import { useState } from 'react'
import Modal from '../Modals/Modal'
import {AiOutlineSearch, AiTwotoneHome, AiOutlineMenu} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdMessage, MdAnalytics} from 'react-icons/md'

const Header = () => {

  const [modal, setmodal] = useState(false)

  // const [close, setclose] = useState(false)

  const openModal = ()=> {
    const openUp = true
    setmodal(openUp)
  }

  const closeModal = ()=> {
    const closeUp = false
    setmodal(closeUp)
  }

  return (
    <div className='flex flex-col justify-between items-center bg-white px-2 w-full'>  
      <div className='flex justify-between items-center bg-white w-full md:w-full lg:w-4/5 xl:w-4/5 h-10'>
        <div><h1 className='text-2xl font-bold text-yellow-400'>Admin Day Mode</h1></div>
        <div className='flex items-center text-2xl'><li>Login</li><span><MdOutlineKeyboardArrowDown/></span></div>
      </div>
      <div className='flex justify-between w-full md:w-full lg:w-4/5 xl:w-4/5'>
        <div className='flex items-center border md:hidden xl:hidden text-red-300'><AiOutlineMenu className='font-bold  text-yellow-400 hover:bg-yellow-400 hover:text-white text-2xl' onClick={openModal}/></div>
        <div className='flex justify-around items-center font-bold text-yellow-400 py-3 hidden md:flex xl:flex'>
          <Link to='/'><li className='flex items-center px-4 text-yellow-400 border mx-2 rounded hover:bg-yellow-400 hover:text-white'><AiTwotoneHome className=''/>Home</li></Link>
          <Link to='/task'><li className='flex items-center px-4 text-yellow-400 border mx-2 rounded hover:bg-yellow-400 hover:text-white'><FaTasks className=''/>Task</li></Link>
          <Link to='/orders'><li className='flex items-center px-4 text-yellow-400 border mx-2 rounded hover:bg-yellow-400 hover:text-white'><MdMessage className=''/>Orders</li></Link>
          <Link to='/analytics'><li className='flex items-center px-4 text-yellow-400 border mx-2 rounded hover:bg-yellow-400 hover:text-white'><MdAnalytics className=''/>Analytics</li></Link>
          <li className='flex items-center px-4 text-yellow-400 border mx-2 rounded'>Payments</li>
        </div>
        <form className='flex items-center border '>
          <AiOutlineSearch className='border border-blue-400 text-gray-300 h-3/5 w-7'/>
          <input
          className='pl-2 h-3/5 rounded border-2'
            type="text"
            placeholder='search...'
          />
        </form>
      </div>
      {/* {modal ? <Modal/>: null} */}
      {modal ? <Modal click={closeModal} />: null}
    </div>
  )
}

export default Header