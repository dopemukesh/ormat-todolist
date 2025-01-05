import React, { useState } from 'react';
import logo from '../assets/ormat-circle-logo.svg';
import update from '../assets/icons/update.svg';
import packageJson from '../../package.json';
import { NavLink } from 'react-router-dom';

const PopoverButton = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <div className="relative flex justify-center">

            <button onClick={togglePopover} className="flex bg-gray-900 text-gray-100 rounded-full">
                <img src={logo} alt="logo" className="hover:animate-spin transition-all duration-900" />
            </button>

            {isPopoverOpen && (
                <div id="my-popover" className="absolute flex flex-col items-center gap-4 bottom-20 w-[406px] bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-300 p-4 rounded-xl shadow-lg">
                    <img src={update} alt="logo" className="w-14 animate-pulse transition-all duration-900" />
                    <h2 className="font-bold mb-2">Updated</h2>
                    <p className="text-center">
                        Your application is updated: <strong>v{packageJson.version}</strong>. You are already using updated app.
                    </p>
                    <button className="flex justify-center items-center gap-2 rounded-lg bg-gray-950 dark:bg-white active:bg-gray-900 dark:active:bg-gray-200 border border-gray-600/40 dark:border-gray-800/40 px-4 py-2 text-gray-100 dark:text-gray-900 text-sm whitespace-nowrap">
                        <NavLink to='/' reloadDocument>Close Now</NavLink>
                    </button>
                </div>
            )}

        </div>
    );
};

export default PopoverButton;
