import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Get existing users array from localStorage or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

      // Check if email already exists
      if (existingUsers.find(user => user.email === formData.email)) {
        setError('Email already exists');
        return;
      }

      // Add new user to array
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: ''
      };
      existingUsers.push(newUser);

      // Save updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Redirect to login page after successful signup
      navigate('/login');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-svh w-full flex items-center justify-center bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md flex-1 space-y-8 px-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Create an account
          </h2>
          <p className='text-zinc-600'>Enter your details to register your account</p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="text-rose-500 text-sm">
              {error}
            </div>
          )}

          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="name" className="text-zinc-800">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg relative block w-full px-3 py-2 bg-white border border-zinc-300 placeholder-zinc-400 text-zinc-900 outline-none focus:border-zinc-400 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-zinc-800">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg relative block w-full px-3 py-2 bg-white border border-zinc-300 placeholder-zinc-400 text-zinc-900 outline-none focus:border-zinc-400 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-zinc-800">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="rounded-lg relative block w-full px-3 py-2 bg-white border border-zinc-300 placeholder-zinc-400 text-zinc-900 outline-none focus:border-zinc-400 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              {/* <label htmlFor="confirmPassword" className="text-zinc-800">Confirm Password</label> */}
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="rounded-lg relative block w-full px-3 py-2 bg-white border border-zinc-300 placeholder-zinc-400 text-zinc-900 outline-none focus:border-zinc-400 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className='flex justify-center items-center gap-2 rounded-lg bg-zinc-900 active:bg-zinc-700 w-full px-4 py-2.5 text-white text-sm font-medium whitespace-nowrap'
            >
              Register
            </button>
          </div>

          <div className="text-sm text-center">
            <span className="text-zinc-600">Already have an account ? </span>
            <NavLink
              to="/login"
              className="font-semibold text-zinc-800"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
