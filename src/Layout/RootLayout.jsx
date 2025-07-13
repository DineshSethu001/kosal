import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
