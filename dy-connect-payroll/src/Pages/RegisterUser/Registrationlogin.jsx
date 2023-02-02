import React from 'react';
import {Link} from 'react-router-dom';
import {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import { FaCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registrationlogin = () => {
  
  const [userName, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [date, setdate] = useState('');
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [errmsg, setnerrmsg] = useState(false)

  const onSubmit = (e)=> {
    e.preventDefault();
    post()
  }

  const userLogins = 'https://6387d1c7a4bb27a7f778f779.mockapi.io/postputdeleteget'

  const post = async()=> {
    try {
      const posts = await axios.post(userLogins, {
        userName,
        email,
        date,
        password,
        confirmPassword
      });
      console.log(posts)
      return posts
    } catch (error) {
      console.log(error.message)
    }
  }
 

  return (
    <div className='flex items-center justify-center w-screen bg-slate-200 h-screen'>
      <form className='flex flex-col items-center border rounded-2xl bg-white w-[50vh] h-[65vh] pt-6 md:w-[50vh] lg:w-[50vh]'>
        <h1 className='font-bold text-xl'>Sign-Up</h1>
        <div className='flex flex-col justify-center border border-green-400 w-10/12 h-16 mt-5'>
          <label htmlFor="username">User Name</label>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="text"
            placeholder='UserName...'
            required
            value={userName}
            onChange={(e=> setuserName(e.target.value))}
          />
        </div>
        <div className='flex flex-col justify-center border border-green-400 w-10/12 h-16 mt-5 mb-2'>
          <label htmlFor="">Email</label>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="email"
            placeholder='E-mail Address'
            required
            value={email}
            onChange={(e)=> setemail(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center border border-green-400 w-10/12 h-16 mt-5 mb-2'>
          <label htmlFor="">Date Of Birth</label>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="date"
            placeholder='Confirm Password'
            required
            value={date}
            onChange={(e)=> setdate(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center border border-green-400 w-10/12 h-16 mt-5 mb-2'>
          <label htmlFor="">Password</label>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center border border-green-400 w-10/12 h-16 mt-5 mb-2'>
          <label htmlFor="">Confirm Password</label>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="password"
            placeholder='Confirm Password'
            required
            value={confirmPassword}
            onChange={(e)=> setconfirmPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center border border-green-400 w-10/12 h-16 mt-5 mb-7'>
          <button type='button' className='border rounded-lg bg-blue-600 text-white w-full h-5/6 font-semibold' onClick={onSubmit}>Sign Up</button>
        </div>
        <div className='border border-green-400 text-blue-600'>
          <Link to='/login'><p className='cursor-pointer font-medium text-blue-600'>Already have an account? Sign-In !</p></Link>
        </div>
      </form>
    </div>
  )
}

export default Registrationlogin