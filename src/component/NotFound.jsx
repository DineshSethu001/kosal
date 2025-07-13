import React from 'react'
import { FaTentArrowTurnLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NotFount = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>404 || Page not found</h1>
      <br />
<button onClick={()=>navigate('/')} className="btn btn_icon back_button cursor-pointer">
  <FaTentArrowTurnLeft className="text-xl text-orange-500" />
  Go To Home Page
</button>

 

    </div>
  )
}

export default NotFount