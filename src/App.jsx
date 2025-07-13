import React from 'react'
import Navbar from './component/Navbar'
import { Home, Products, About, Contact, Admin } from './pages'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import ContactInfo from './component/ContactInfo'
import ContactForm from './component/ContactForm'
import ContactLayout from './Layout/ContactLayout'
import NotFound from './component/NotFound'

const App = () => {


  const router =createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<ContactLayout />}>
                <Route path="info" element={<ContactInfo/>}/>
                <Route path="form" element={<ContactForm/>}/>
          </Route>
          <Route path="admin_login" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    )
  )
  return (
   
    <RouterProvider router={router} />
   
  )
}

export default App
