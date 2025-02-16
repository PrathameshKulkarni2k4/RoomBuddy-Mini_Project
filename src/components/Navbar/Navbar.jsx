import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='h-20 bg-blue-200 flex justify-between items-center'>
      <div>
         <h1 className='text-4xl font-bold ml-3'><span className='text-red-500'>R</span>oom<span className='text-red-500'>B</span>uddy</h1>
      </div>
      <div className='flex gap-12'>
        <NavLink to={'/'}>
          Home
        </NavLink>
        <NavLink to={'/'}>
          About US
        </NavLink>
        <NavLink to={'/'}>
          Contact US
        </NavLink>
      </div>
      <div className='mr-3'>
        <Link to={'/login'} >
          <button className='bg-red-600 text-white py-2 px-3 rounded-l-2xl'>LOGIN</button>
        </Link>
        <Link to={'/register'} >
          <button className='bg-white text-red-600 py-2 px-3 rounded-r-2xl'>REGISTER</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
