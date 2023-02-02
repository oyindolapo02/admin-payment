import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types';
// import { auth } from '../../firebase';
import axios from 'axios'

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

const Loginp = ({ setToken }) => {
  const [tokenss, setTokenss] = useState()

  const navigate = useNavigate()


  const [error, seterror] = useState(false)
  const [email, setemail] = useState()
  const [password, setpassword] = useState()


  const handleSubmit = async e => {
    e.preventDefault();
    const tokens = await loginUser({
      email,
      password,
    });
    // setToken(tokens);
    // console.log(setToken(tokens))
    console.log(tokens)
    navigate('/')
  }



  // const handleSubmit = (e)=> {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       seterror(error)
  //       console.log(error.message)
  //     });
  // }

  // const handleLogin = (e)=> {
  //   e.preventDefault();
  //   logIn();
    
  // }


  // const posts = `https://6387d1c7a4bb27a7f778f779.mockapi.io/crudereact`

  // const createApi = async()=> {
  //   try {
  //     const postUrl = await (posts, {
  //     email,
  //     password,
  //     })
  //     console.log(postUrl)
  //   } catch(error) {
  //     console.log(error.message)
  //   }
  // }


  return (
    <div className='flex items-center justify-center w-screen bg-slate-200 h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center border rounded-2xl bg-white w-3/6 h-3/5 pt-6 lg:w-2/6'>
        <h1 className='font-bold text-xl'>Sign-In</h1>
        <div className='flex items-center justify-center border border-green-400 w-10/12 h-12 mt-5'>
          <input
          className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="text"
            placeholder='E-mail Address'
            // required
            // value={email}
            onChange={(e)=> setemail(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center border border-green-400 w-10/12 h-12 mt-5 mb-2'>
          <input
            className='border rounded-lg w-full h-5/6 bg-gray-300 pl-2'
            type="text"
            placeholder='Password'
            // required
            // value={password}
            onChange={(e)=> setpassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-end border border-green-400 w-10/12 text-blue-600'>
          {error && <span className='cursor-pointer font-medium'>Forgot password?</span>}
        </div>
        <div className='flex items-center justify-center border border-green-400 w-10/12 h-12 mt-5 mb-7'>
          <button type='submit' className='border rounded-lg bg-blue-600 text-white w-full h-5/6 font-semibold'>Sign In</button>
        </div>
        <div className='border border-green-400'>
          <Link to='/registration'><p className='cursor-pointer font-medium text-blue-600'>Don't have an account? Sign-Up !</p></Link>
        </div>
      </form>
      
    </div>
  )
}

Loginp.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Loginp