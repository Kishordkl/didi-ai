import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import { auth, signInWithEmailAndPassword } from '../firebase'; // Firebase import
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import child1 from '../images/child1.png'; // Ensure the path to the image is correct

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  // Firebase Authentication logic for email/password login
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/pathselector');  // Redirect to PathSelector after successful login
    } catch (error) {
      setLoading(false);
      setError('Login failed. Please check your credentials.');
      console.error('Login failed', error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${child1})`, // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full"
      >
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-white"
          >
            Welcome to दिदी
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90"
          >
            Your safe space for growth and support
          </motion.p>

          {/* Error Message */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/70 p-3 rounded-lg text-gray-800 focus:outline-none mb-4"
            required
          />

          {/* Password Input */}
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/70 p-3 rounded-lg text-gray-800 focus:outline-none mb-4"
            required
          />

          {/* Login Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={login}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            <LogIn size={20} />
            <span>{loading ? 'Logging in...' : 'Login'}</span>
          </motion.button>

          {/* Terms and Privacy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-center text-white/80"
          >
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
