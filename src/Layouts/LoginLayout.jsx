import React from 'react'
import Login from '../Pages/Auth/Login'
import { Outlet } from 'react-router'

const LoginLayout = () => {
  return (
    <div className='flex justify-center  mt-10 min-h-screen'>
     <Outlet />
    </div>
  )
}

export default LoginLayout
