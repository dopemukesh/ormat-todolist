import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ormat-circle-logo.svg';
import historyIcon from '../assets/icons/todoIcon.svg';
import ThemeToggle from '../Theme/ThemeToggle';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
  };

  return (
    <header className='flex items-center justify-center sticky top-0 z-50 bg-white dark:bg-gray-950'>
      {/* ----- logo ----- */}
      <div className='flex flex-grow max-w-[1024px] flex-1 lg:border lg:dark:border-gray-800 py-4 px-4 justify-between items-center lg:rounded-xl'>
        <NavLink to='/' className='flex items-center gap-2'>
          <img src={logo} alt="" className='w-8 rounded-md rotate-center-alternate' />
          <h1 className='text-lg text-gray-900 dark:text-white font-bold text-focus-in-normal'>Ormat</h1>
        </NavLink>

        {/* ----- Theme Toggle for temperary ----- */}
        {/* <ThemeToggle /> */}
        
        {/* ----- Navigation ----- */}
        <div className='flex items-center gap-2'>

          <NavLink to='/histry' className='flex items-center'>
            {/* <img src={historyIcon} alt="" className="w-8 p-1 bg-gray-100 dark:bg-gray-950 border dark:border-gray-800 rounded-md active:bg-gray-200 dark:active:bg-gray-800" /> */}
          
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1.5 bg-gray-100 dark:bg-gray-950 border dark:border-gray-800 rounded-lg active:bg-gray-200 dark:active:bg-gray-800" stroke='currentColor'>
              <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" strokeWidth="1.5" />
              <path d="M7 4V2.5" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M17 4V2.5" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2.5 9H21.5" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" />
              <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" />
              <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" />
              <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" />
              <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" />
              <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" />
            </svg>

          </NavLink>

          <NavLink to="/settings" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 p-1.5 bg-gray-100 dark:bg-gray-950 border dark:border-gray-800 rounded-lg active:bg-gray-200 dark:active:bg-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </NavLink>

          {isAuthenticated && (
            <button 
              onClick={handleLogout}
              className="text-red-500 hover:text-red-800 hidden">
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
