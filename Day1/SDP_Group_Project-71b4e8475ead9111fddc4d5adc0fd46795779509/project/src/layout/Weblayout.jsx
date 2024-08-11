import { BorderBeamDemo } from '@/components/BorderBeamDemo'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
                <Navbar/>
                <Outlet />
                <Footer />
            </div>
  )
}

export default Weblayout