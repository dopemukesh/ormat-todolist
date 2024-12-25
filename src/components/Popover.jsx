import React, { useState } from 'react';
import logo from '../assets/ormat-circle-logo.svg';
import update from '../assets/icons/update.svg';
import packageJson from '../../package.json';

const PopoverButton = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <div className="relative flex justify-center">

            <button onClick={togglePopover} className="flex bg-zinc-700 text-zinc-100 rounded-full">
                <img src={logo} alt="logo" className="hover:animate-spin transition-all duration-700" />
            </button>

            {isPopoverOpen && (
                <div id="my-popover" className="absolute flex flex-col items-center gap-4 bottom-20 w-[406px] bg-white border-2 border-zinc-200 text-zinc-800 p-4 rounded-xl shadow-lg">
                    <img src={update} alt="logo" className="w-14 animate-pulse transition-all duration-700" />
                    <h2 className="font-bold mb-2">Updated</h2>
                    <p className="text-center">
                        Your application is updated: <strong>v{packageJson.version}</strong>. You are already using updated app.
                    </p>
                    <button className="bg-zinc-800 text-zinc-100 px-4 py-2 rounded">
                        <a href='/'>Close Now</a>
                    </button>
                </div>
            )}

        </div>
    );
};

export default PopoverButton;
