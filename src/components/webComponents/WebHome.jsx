import React from 'react'
import { NavLink } from 'react-router-dom'

const WebHome = () => {
    return (
        <div className="flex flex-col items-center md:justify-center min-h-svh px-4 max-w-[1024px]">
            <div className='text-center mt-16 flex flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl dark:shadow-lg'>
                <p className='select-none cursor-default text-sm text-purplex-500 dark:text-purplex-400 py-1 px-2 bg-purplex-50 dark:bg-purplex-800/50 border border-purplex-500 dark:border-purplex-400 rounded-md'>Now in beta</p>
                <h1 className="text-gray-800 dark:text-gray-100 text-xl font-bold text-center lg:text-left md:text-4xl ">
                    Organize your to-do lists from
                    <span className="bg-gradient-to-r from-purplex-300 to-purplex-500 bg-clip-text text-transparent">anywhere</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-500 text-center">
                    Create clear, multi-functional to-do lists to easily manage your ideas and work from anywhere so you never forget anything again.
                </p>
                <NavLink to="/todo">
                    <button className='flex justify-center items-center gap-2 rounded-lg bg-gray-950 dark:bg-white active:bg-gray-900 dark:active:bg-gray-200 border border-gray-600/40 dark:border-gray-800/40 px-4 py-2 text-gray-100 dark:text-gray-900 text-sm whitespace-nowrap'>
                        Get Started
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default WebHome
