import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SecurityIcon } from '../assets/icons/icons';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Create default admin user if no users exist
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.length === 0) {
        users.push({
          email: 'admin@gmail.com',
          password: 'admin'
        });
        localStorage.setItem('users', JSON.stringify(users));
      }
      const user = users.find(u => u.email === formData.email && u.password === formData.password);

      if (user) {
        // Store current user info (except password) in localStorage
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.' + err);
    }
  };

  return (
    <div className="min-h-svh w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md flex-1 space-y-8 px-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Sign in
          </h2>
          <p className='text-gray-600'>Enter your email and password to sign in</p>
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-800">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:border-gray-400 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-800">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:border-gray-400 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {/* <img src={EyeIcon} alt="" /> */}
            </div>
            <div>
              <NavLink 
                to="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Forgot your password ?
              </NavLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className='flex justify-center items-center gap-2 rounded-lg bg-gray-900 active:bg-gray-700 border border-gray-600 w-full px-4 py-2.5 text-gray-100 text-sm whitespace-nowrap'
            >
              Sign In
            </button>
          </div>

          <div className="text-sm text-center">
            <span className="text-gray-600">Don&apos;t have an account? </span>
            <NavLink 
              to="/signup"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Sign up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
