import React from 'react'
import logo from '../assets/img/logo.png'
import { TbLogin2 } from "react-icons/tb";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <p className='font-medium text-2xl italic'>SKR <span className='font-bold text-blue-500'>S</span>ystem</p>
        <ul>
    <NavLink to="/"><li>Home    </li></NavLink>
    <NavLink to="/about"><li>About   </li></NavLink>
    <NavLink to="/products"><li>Products</li></NavLink>
    <NavLink to="/contact"><li>Contact </li></NavLink>
        </ul>
      <button to="/admin_login" onClick={()=>navigate('/admin_login',{replace:true})} className='flex flex-col justify-center items-center cursor-pointer'>
          <TbLogin2 className='h-auto w-10'/>
          Admin Login    
        </button>
    </nav>
     )
}

export default Navbar