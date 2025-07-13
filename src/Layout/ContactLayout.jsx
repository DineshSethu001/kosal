import React from 'react'
import { Outlet } from 'react-router-dom'
import {Contact} from '../pages'
const ContactLayout = () => {
  return (
    <div>
        ContactLayout
        <Contact/>
        <Outlet />
    </div>
  )
}

export default ContactLayout