import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GrContactInfo } from "react-icons/gr";
import { SiGoogleforms } from "react-icons/si";


const Contact = () => {
  const navigate = useNavigate();
  return (
    <>

      <div className="">
        <h1 className=''>
          Kindly provide your details below, and we’ll get back to you shortly.
        </h1>

        <div className="contact-button flex justify-center w-full items-center pb-5 gap-20">
          <button className="btn btn_icon" onClick={() => navigate('info')}>Contact Info <GrContactInfo />
 </button>
          <button className="btn btn_icon" onClick={() => navigate('form')}>Contact From <SiGoogleforms />
</button>

        </div>
      </div>
    </>
  )
}

export default Contact