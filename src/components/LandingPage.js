import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation to AuthPage
import didiharu from '../images/didiharu.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the AuthPage when the "Get Started" button is clicked
    navigate('/auth');
  };

  return (
    <div className="relative h-screen">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${didiharu})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-teal-600/70" />

      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          दिदी 
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-center max-w-xl"
        >
          Empowering Nepali women through mentorship, support, and community
        </motion.p>

        {/* Get Started Button */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <button
    className="w-full border-2 border-crimson-600 text-crimson-600 py-3 px-6 rounded-md hover:bg-crimson-600 hover:text-white hover:border-crimson-600 transition-all duration-300"
    onClick={handleGetStarted}
  >
    Get Started
  </button>
</motion.div>

      </div>
    </div>
  );
};

export default LandingPage;
