import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BackIcon } from '../assets/icons/icons'

const Menu = () => {
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState(true)

    const handleNotificationToggle = () => {
        setNotifications(!notifications)
        // Save to localStorage or backend
        localStorage.setItem('notifications', !notifications)
    }

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode)
        // Save to localStorage or backend
        localStorage.setItem('darkMode', !darkMode)
        // Apply dark mode to document
        document.documentElement.classList.toggle('dark')
    }

    const handleEmailNotificationsToggle = () => {
        setEmailNotifications(!emailNotifications)
        // Save to localStorage or backend
        localStorage.setItem('emailNotifications', !emailNotifications)
    }

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.reload();
    }

    return (
        <div className="min-h-screen w-full md:max-w-md bg-gray-50 py-8 px-4 sm:px-6">
            {/* <div className="flex items-center gap-2 py-2 mb-4">
                <NavLink to="/">
                    <img src={BackIcon} alt="BackIcon" className="w-8 p-1 bg-gray-100 border rounded-md active:bg-gray-200" />
                </NavLink>
            </div> */}

            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
                
                <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                    {/* Profile Section */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Profile</h3>
                                    <p className="text-sm text-gray-500">Manage your account settings</p>
                                </div>
                            </div>
                            <NavLink to="/profile">
                                <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                                    Edit
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                                    <p className="text-sm text-gray-500">Configure notification preferences</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={notifications} onChange={handleNotificationToggle} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                        </div>
                        
                        {notifications && (
                            <div className="mt-4 ml-9">
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" checked={emailNotifications} onChange={handleEmailNotificationsToggle} className="form-checkbox h-5 w-5 text-emerald-600" />
                                    <span className="text-gray-700 text-sm">Email notifications</span>
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Theme Section */}
                    <div className="p-4 opacity-50 pointer-events-none">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Dark Mode</h3>
                                    <p className="text-sm text-gray-500">Toggle dark/light theme</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={handleDarkModeToggle} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Help & Support</h3>
                                    <p className="text-sm text-gray-500">Get help or contact support</p>
                                </div>
                            </div>
                            <a href="mailto:support@ormat.com" className="text-emerald-500 hover:text-emerald-600">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Logout Section */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Logout</h3>
                                    <p className="text-sm text-gray-500">Sign out of your account</p>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-sm text-gray-500 mt-10'><span className='font-semibold text-yellow-500'>Everything is under development.</span> Version 0.0.3</p>
        </div>
    )
}

export default Menu
