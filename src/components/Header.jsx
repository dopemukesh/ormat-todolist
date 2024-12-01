import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/gradient-ball-logo.svg';
import historyIcon from '../assets/icons/todoIcon.svg';

const Header = () => {
  return (
    <header className='flex items-center justify-center sticky top-0 z-50 bg-white'>
      {/* ----- title ----- */}
      <div className='flex flex-grow max-w-[1024px] flex-1 border-b-2 py-4 px-4 justify-between items-center'>
        <NavLink to='/' className='flex items-center gap-2'>
          <img src={logo} alt="" className='w-7 rounded-md rotate-center-alternate' />
          <h1 className='text-lg font-bold text-focus-in-normal'>Ormat</h1>
        </NavLink>

        <NavLink to='/histry' className='flex items-center gap-2'>
          <img src={historyIcon} alt="" className='w-7 p-1 bg-gray-100 border rounded-md active:bg-gray-200' />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
