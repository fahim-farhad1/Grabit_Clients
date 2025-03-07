import React from 'react'
import UserSidebar from '../Components/UserSidebar/UserSidebar'
import { Outlet } from 'react-router'
import Container from '../Components/Container/Container'

const UserDashboard = () => {
  return (
    <Container className='flex gap-10'>
      <UserSidebar />
      <Outlet />
    </Container>
  )
}

export default UserDashboard
