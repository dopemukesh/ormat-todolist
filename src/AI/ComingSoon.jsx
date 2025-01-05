import React from 'react'
import { NavLink } from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Coming Soon</h1>
            <p className="text-lg mt-2">We're working on something awesome</p>

            <div className="mt-6">
                <NavLink
                    to="/"
                    className='flex justify-center items-center gap-2 rounded-lg bg-gray-900 dark:bg-white dark:hover:bg-gray-100 active:bg-gray-800 border border-gray-600 w-full px-4 py-2.5 text-gray-100 dark:text-gray-900 text-sm whitespace-nowrap'
                >
                    Go Back
                </NavLink>
            </div>
        </div>
    )
}

export default ComingSoon;
