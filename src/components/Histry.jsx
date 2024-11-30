import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';


const Histry = () => {
    return (
        <>
            <div className='bg-white container px-4 w-full'>
                <Header />
                <section>
                    <h2>Your daily histry will be saved here after expiration</h2>

                    <NavLink to='/' className='flex justify-center items-center gap-2 rounded-md bg-emerald-500 active:bg-emerald-400 border border-emerald-600/40 px-4 py-2 text-gray-100 text-sm font-medium whitespace-nowrap'>
                        <p>Back To Home</p>
                    </NavLink>
                </section>
            </div>
        </>
    )
}

export default Histry