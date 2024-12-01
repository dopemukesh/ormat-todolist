import React from 'react'
import logo from '../assets/gradient-ball-logo.svg';
import PopoverButton from './Popover';


const BottomBar = () => {
    return (
        <>
            <div className='fixed bottom-0 z-50 w-full flex sm:hidden justify-center  h-14 bg-white shadow-up-lg shadow-gray-200/50'>
                <div className='flex justify-center h-14 w-14 absolute bottom-7 text-gray-100'>
                    <PopoverButton />
                </div>

            </div>
        </>
    )
}

export default BottomBar