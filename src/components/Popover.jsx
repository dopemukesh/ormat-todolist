import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'
import logo from '../assets/gradient-ball-logo.svg';
import update from '../assets/icons/update.svg';
import { NavLink } from 'react-router-dom';

const PopoverButton = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <div className="relative flex justify-center">

            <button onClick={togglePopover} className="flex h-14 w-14 bg-gray-700 text-gray-100 rounded-full">
                <img src={logo} alt="logo" className="hover:animate-spin transition-all duration-700" />
            </button>

            {isPopoverOpen && (
                <div id="my-popover" className="absolute flex flex-col items-center gap-4 bottom-20 w-[406px] bg-white border-2 border-gray-200 text-gray-800 p-4 rounded-xl shadow-lg">
                    <img src={update} alt="logo" className="w-14 animate-pulse transition-all duration-700" />
                    <h2 className="font-bold mb-2">Updated</h2>
                    <p className="text-center">
                        Your application is updated: <strong>v0.0.3</strong>. You are already using updated app.
                    </p>
                    <button className="bg-gray-800 text-gray-100 px-4 py-2 rounded">
                        <a href='/'>Close Now</a>
                    </button>
                </div>
            )}

        </div>
    );
};

export default PopoverButton;
