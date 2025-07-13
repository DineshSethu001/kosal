import React from 'react'
import Navbar from './component/Navbar'
import { Home, Products, About, Contact, Admin } from './pages'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'

const App = () => {


  const router =createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin_login" element={<Admin />} />
        </Route>
    )
  )
  return (
   
    <RouterProvider router={router} />
   
  )
}

export default App
