import React from 'react'
import Contact from './AllContact'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <div className='container mx-auto'>
      <Nav/>
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default MainLayout
