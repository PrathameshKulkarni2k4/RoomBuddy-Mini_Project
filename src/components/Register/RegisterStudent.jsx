import React from 'react'

function RegisterStudent() {
  return (
    <div className='flex justify-center items-center  text-black h-[calc(100dvh-40dvh)] w-full '>
        <div className=' w-[400px] h-[400px] bg-transparent text-black shadow-xl rounded-xl'>
            <h1 className='text-center mt-2 text-2xl underline'>STUDENT SIGN UP</h1>
            <form className='flex flex-col gap-2.5 my-8 mx-6'>
              <label htmlFor="#name">Name</label>
              <input id='name' type="text" placeholder='name' className='pl-2 border-2 text-black border-black outline-0 rounded-md py-1 '/>
              <label htmlFor="#username" className='mt-1'>Username</label>
              <input id='username' type="text" placeholder='username' className='pl-2 border-2 border-black outline-0 rounded-md py-1'/>
              <label htmlFor="#password" className='mt-1'>Password</label>
              <input id='password' type="password" placeholder='password' className='pl-2 border-2 border-black outline-0 rounded-md py-1'/>
              <div className='flex justify-center'>
              <input type="submit" placeholder='SignUP' className='bg-blue-600 text-white rounded-xl w-[350px] p-2 mt-2'/>
              </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterStudent
