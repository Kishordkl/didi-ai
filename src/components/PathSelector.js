import React from 'react';
import { motion } from 'framer-motion';
import { Bird, Heart } from 'lucide-react';

const PathSelector = ({ onSelect }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-8">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-sky-400 to-blue-600 p-8 rounded-2xl cursor-pointer"
        onClick={() => onSelect('fly')}
      >
        <div className="flex flex-col items-center text-white">
          <Bird size={48} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">I Am Willing to Fly!</h2>
          <p className="text-center">Connect with mentors and achieve your dreams</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-purple-400 to-pink-600 p-8 rounded-2xl cursor-pointer"
        onClick={() => onSelect('help')}
      >
        <div className="flex flex-col items-center text-white">
          <Heart size={48} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">I Am in Trouble</h2>
          <p className="text-center">Get support and guidance when you need it most</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PathSelector;
