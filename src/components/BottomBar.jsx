import React from 'react'
import { NavLink } from 'react-router-dom';
import PopoverButton from './Popover';
import { AiChatIcon } from '../assets/icons/icons.jsx';



const BottomBar = () => {
    return (
        <>
            <div className='fixed bottom-0 z-50 w-full flex sm:hidden justify-center  h-14 bg-white dark:bg-zinc-900 shadow-up-lg shadow-zinc-200/50 dark:shadow-zinc-950/20'>
                <div className='flex items-center justify-between w-full px-8'>
                    <div className='flex items-center justify-center w-14 h-14'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-emerald-500' : 'text-zinc-400 dark:text-zinc-500'}>
                            {({ isActive }) => (
                                <div className="flex flex-col items-center">
                                    {isActive ? (
                                        // this icon is for active state
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495Z" fill="url(#paint0_linear_2928_16)" />
                                            <rect x="8" y="17.4443" width="8" height="1.6" rx="0.8" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2928_16" x1="7.81009" y1="4.04366" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#41B88E" />
                                                    <stop offset="1" stopColor="#1A8864" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    ) : (
                                        // this icon is for light and dark mode theme
                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                            className='fill-zinc-400 dark:fill-zinc-500' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495Z" />
                                            <rect x="8" y="17.4443" width="8" height="1.6" rx="0.8" className='fill-white dark:fill-zinc-900' />
                                        </svg>
                                    )}
                                    <span className="text-xs mt-1">Home</span>
                                </div>
                            )}
                        </NavLink>
                    </div>

                    <div className='flex items-center justify-center w-14 h-14'>
                        <NavLink to="/ai" className={({ isActive }) => isActive ? 'text-emerald-500' : 'text-zinc-400 dark:text-zinc-500'}>
                            {({ isActive }) => (
                                <div className="flex flex-col items-center">
                                    {isActive ? (
                                        // this icon is for active state
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.03216L12.4681 3.63284C13.5862 7.45617 16.576 10.4459 20.3993 11.564L22 12.0322L20.3993 12.5003C16.576 13.6184 13.5862 16.6081 12.4681 20.4315L12 22.0322L11.5319 20.4315C10.4138 16.6081 7.42401 13.6184 3.60068 12.5003L2 12.0322L3.60068 11.564C7.42401 10.4459 10.4138 7.45617 11.5319 3.63284L12 2.03216Z" fill="url(#paint0_linear_39_37)" />
                                            <path d="M15.7322 1.96826L16.1308 2.39045C17.083 3.39887 18.4835 3.85244 19.846 3.59367L20.4165 3.48534L19.9943 3.88397C18.9858 4.83611 18.5323 6.23658 18.791 7.59913L18.8994 8.16957L18.5007 7.74739C17.5486 6.73897 16.1481 6.2854 14.7856 6.54416L14.2151 6.6525L14.6373 6.25387C15.6457 5.30172 16.0993 3.90126 15.8405 2.53871L15.7322 1.96826Z" fill="url(#paint1_linear_39_37)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_39_37" x1="20.4805" y1="1.96826" x2="12" y2="22.0322" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#41B88E" />
                                                    <stop offset="1" stopColor="#1A8864" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_39_37" x1="20.4805" y1="1.96826" x2="12" y2="22.0322" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#41B88E" />
                                                    <stop offset="1" stopColor="#1A8864" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    ) : (
                                        // this icon is for light and dark mode theme
                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                            className='fill-zinc-400 dark:fill-zinc-500' xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.03216L12.4681 3.63284C13.5862 7.45617 16.576 10.4459 20.3993 11.564L22 12.0322L20.3993 12.5003C16.576 13.6184 13.5862 16.6081 12.4681 20.4315L12 22.0322L11.5319 20.4315C10.4138 16.6081 7.42401 13.6184 3.60068 12.5003L2 12.0322L3.60068 11.564C7.42401 10.4459 10.4138 7.45617 11.5319 3.63284L12 2.03216Z"/>
                                            <path d="M15.7322 1.96826L16.1308 2.39045C17.083 3.39887 18.4835 3.85244 19.846 3.59367L20.4165 3.48534L19.9943 3.88397C18.9858 4.83611 18.5323 6.23658 18.791 7.59913L18.8994 8.16957L18.5007 7.74739C17.5486 6.73897 16.1481 6.2854 14.7856 6.54416L14.2151 6.6525L14.6373 6.25387C15.6457 5.30172 16.0993 3.90126 15.8405 2.53871L15.7322 1.96826Z" />
                                        </svg>

                                    )}
                                    <span className="text-xs mt-1">AI</span>
                                </div>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div className='flex justify-center items-center h-10 w-10 absolute bottom-7 text-zinc-100 dark:text-white'>
                    <PopoverButton />
                </div>

            </div>
        </>
    )
}

export default BottomBar
