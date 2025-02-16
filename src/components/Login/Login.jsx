import React from 'react'
import { Outlet } from 'react-router'

function Login() {
  return (
    <div>
      <div>
        Select user type
      </div>
      <Outlet/>
    </div>
  )
}

export default Login
