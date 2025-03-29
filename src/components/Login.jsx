import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn,setSignIn]=useState(true);
  const toggleForm=()=>{
    setSignIn(!isSignIn);

  }
  return (
    <div className='relative w-full h-screen bg-black'>
      <Header />
      
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg'
          alt='Netflix Background'
          className='w-full h-full object-cover opacity-50'
        />
      </div>
      
      {/* Login Form */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-xl shadow-lg w-96 text-white'>
        <h2 className='text-3xl font-bold text-center mb-6'>{isSignIn?"Sign In":"Sign up"}</h2>
        <form className='flex flex-col gap-4'>
          {!isSignIn?<input
            type='text'
            placeholder='Enter Name'
            className='p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600'
          />:null}
          <input
            type='email'
            placeholder='Email Address'
            className='p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600'
          />
          <input
            type='password'
            placeholder='Password'
            className='p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600'
          />
          <button className='p-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition'>
          {isSignIn?"Sign In":"Sign up"}
          </button>
        </form>
        
        {/* Additional Options */}
        <div className='flex justify-between text-sm text-gray-400 mt-4'>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' className='accent-red-600' />
            <span>Remember Me</span>
          </label>
          <a href='#' className='hover:underline'>Need Help?</a>
        </div>
        
        {/* Sign Up Link */}
        <div className='mt-6 text-center'>
          <span className='text-gray-400'>{isSignIn?"New To Netflix ?":" click For Sign In"} </span>
          <a href='#' onClick={toggleForm} className='text-white font-semibold hover:underline'>{isSignIn?"Sign Up":"Sign In"}</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
