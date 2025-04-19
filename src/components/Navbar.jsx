import React from 'react'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  function loginClicked() {
    document.querySelector('.absolute').style.display = 'block'
  }
  function signUpClicked() {
    document.querySelector('#signup').style.display = 'block'
  }
  return (
    <>
    
    <div className='flex justify-between bg-gray-950 items-center top-0.5 h-25 m-0 p-0 sticky' >
      <div className='w-20 ml-10 mt-2 mb-2 p-0 flex'>
        <img className='rounded-full' src="https://img.freepik.com/premium-vector/hijab-style-fashion-standing-vector-illustration-design_659631-3170.jpg?semt=ais_hybrid" alt="abaya" />
      </div>
      <ul className='flex justify-between w-2/4 text-2xl text-white font-bold '>
        <NavLink to={'/'} className='hover:text-amber-300 cursor-pointer'>
        <p>Home</p>
        <hr className='h-[1.5] bg-amber-500 w-2/4 relative left-3' />
        </NavLink>
        <NavLink to={'/collection'} className='hover:text-amber-300 cursor-pointer'>
        <p>Collection</p>
        <hr className='h-[1.5] bg-amber-500 w-2/4 relative left-3' />
        </NavLink>
        <NavLink to={'/about'} className='hover:text-amber-300 cursor-pointer'>
        <p>About</p>
        <hr className='h-[1.5] bg-amber-500 w-2/4 relative left-3' />
        </NavLink>
        <NavLink to={'/contact'} className='hover:text-amber-300 cursor-pointer'>
        <p>Contact</p>
        <hr className='h-[1.5] bg-amber-500 w-2/4 relative left-3' />
        </NavLink>
      </ul>
      <div>
      <button onClick={loginClicked} className='bg-red-100 mr-3 p-2 pl-3 pr-3  font-bold rounded-2xl border-none cursor-pointer hover:bg-blue-200'>Login</button>
      <button onClick={signUpClicked} className='bg-red-100 mr-3 p-2 pl-3 pr-3  font-bold rounded-2xl border-none cursor-pointer hover:bg-blue-200'>SignUp</button>
      </div>
    </div>
    <div className='absolute hidden w-196'>
      <Login />
    </div>
    <div id='signup' className='absolute hidden w-196'>
      <SignUp />
    </div>
    </>
  )
}

export default Navbar