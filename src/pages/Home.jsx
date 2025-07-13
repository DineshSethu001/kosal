import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact'); // Change to your actual route
  };

  return (
    <section className="home_section bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to SKR Tech Services
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your one-stop solution for computer hardware, networking, and security system installation.
          We offer reliable, on-time, and affordable technical support for homes and businesses.
        </p>

        <div className="home_buttons flex justify-center gap-4">
          <button
            onClick={handleContact}
            className="btn"
          >
            📞 Get in Touch
          </button>

          <button
            onClick={() => navigate('/about')}
            className="btn"
          >
            👨‍🔧 Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
