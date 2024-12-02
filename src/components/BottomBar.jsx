import React from 'react'
import { NavLink } from 'react-router-dom';
import PopoverButton from './Popover';
import { AiChatIcon } from '../assets/icons/icons.jsx';


const BottomBar = () => {
    return (
        <>
            <div className='fixed bottom-0 z-50 w-full flex sm:hidden justify-center  h-14 bg-white shadow-up-lg shadow-gray-200/50'>
                <div className='flex items-center justify-between w-full px-8'>
                    <div className='flex items-center justify-center w-14 h-14 text-gray-600 font-semibold'>
                        <NavLink to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 p-1 bg-gray-100 border rounded-md active:bg-gray-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to="/devxAI">
                            <img
                                src={AiChatIcon} 
                                alt="AiChatIcon"
                                className="w-8 p-1 bg-gray-100 border rounded-md active:bg-gray-200" />
                        </NavLink>
                    </div>
                </div>
                <div className='flex justify-center h-14 w-14 absolute bottom-7 text-gray-100'>
                    <PopoverButton />
                </div>

            </div>
        </>
    )
}

export default BottomBar