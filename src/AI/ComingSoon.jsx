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
                    className='flex justify-center items-center gap-2 rounded-lg bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 active:bg-zinc-700 border border-zinc-600 w-full px-4 py-2.5 text-zinc-100 dark:text-zinc-800 text-sm whitespace-nowrap'
                >
                    Go Back
                </NavLink>
            </div>
        </div>
    )
}

export default ComingSoon;
