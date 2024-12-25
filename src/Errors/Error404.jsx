import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="absolute inset-0 bg-white z-[99999999999] min-h-svh flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold text-rose-500">404</h1>
                <p className="text-zinc-500">Page is <span className='text-yellow-500 font-semibold'>under construction</span> or not found</p>
            </div>
            <div className="mt-6">
                <NavLink
                    to="/"
                    className='flex justify-center items-center gap-2 rounded-lg bg-zinc-900 active:bg-zinc-700 border border-zinc-600 w-full px-4 py-2.5 text-zinc-100 text-sm whitespace-nowrap'
                >
                    Go Back
                </NavLink>
            </div>
        </div>
    );
};

export default Error404;
