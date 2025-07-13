import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate  = useNavigate();
const handleSubmit = () => {
  navigate('/contact/form');
};

  return (
    <>
      <section className="about_section">
        <h1 className="text-3xl font-bold mb-4 text-[#456882]">About Me</h1>
       <div className="">
         <p className="text-lg">
          I am a skilled and experienced technician specializing in computer hardware, networking devices, and security system installation. With hands-on expertise in diagnosing and fixing issues, I provide dependable and professional tech support to individuals and businesses.
        </p>

        <p className="mt-4 text-2xl text-[#555879] font-bold">
          My services include:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg">
          <li>Computer hardware setup and repair</li>
          <li>Networking device installation and troubleshooting</li>
          <li>Security camera and surveillance system installation</li>
          <li>System performance optimization and issue fixing</li>
        </ul>

        <p className="text-lg">
          I take pride in delivering reliable and efficient service with a focus on customer satisfaction. Whether you're setting up a new office, need a home security upgrade, or require technical troubleshooting — I’m here to help.
        </p>
      
       </div>
       <div className="">
          <p onClick={handleSubmit} className="mt-6 text-center font-semibold text-blue-600 cursor-pointer">
          📞 Contact now for a free consultation or to schedule a service!
        </p>
       </div>

      </section>
    </>
  )
}

export default About