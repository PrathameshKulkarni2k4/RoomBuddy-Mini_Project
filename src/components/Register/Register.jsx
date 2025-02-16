import React from 'react'
import { Link, Outlet } from 'react-router'

const handleRegister = () => {
  // document.querySelector('#selectlogin').classList.add('hidden')
}

function Register() {


  return (
    <>
    <div id='selectregister' className=''>
      <div className='my-15'>
        <h1 className='text-5xl text-center text-red-800'>Select user type</h1>
      </div>
      <div className='flex justify-center gap-3'>
        <Link to={'/register/registerowner'} onClick={handleRegister}>
          <div className='flex justify-center bg-amber-100 w-50 p-3 rounded-2xl'>
            <button className='text-center'>OWNER</button>
          </div>
        </Link>
        <Link to={'/register/registerstudent'} onClick={handleRegister}>
        <div className='flex justify-center bg-amber-100 w-50 p-3 rounded-2xl'>
          <button className=''>STUDENT</button>
        </div>
        </Link>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Register
