import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BackIcon } from '../assets/icons/icons';
import ThemeToggle from '../Theme/ThemeToggle';

const Menu = () => {
    const [notifications, setNotifications] = useState(localStorage.getItem('notifications') === 'true');
    const [emailNotifications, setEmailNotifications] = useState(localStorage.getItem('emailNotifications') === 'true');

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const handleNotificationToggle = () => {
        const newState = !notifications;
        setNotifications(newState);
        localStorage.setItem('notifications', newState);
    };

    const handleEmailNotificationsToggle = () => {
        const newState = !emailNotifications;
        setEmailNotifications(newState);
        localStorage.setItem('emailNotifications', newState);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.reload();
    };

    return (
        <div className="min-h-screen w-full md:max-w-md bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 select-none">
            <div className="max-w-lg mx-auto">
                {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1> */}

                <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden space-y-4">

                    {/* Profile Section */}
                    <div className="p-2 bg-white dark:bg-gray-700/50 rounded-xl border border-gray-300 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 group">
                                    <img
                                        src={user?.profilePic || 'https://via.placeholder.com/150'}
                                        alt="Profile"
                                        className="w-12 h-12 group-hover:scale-105 group-hover:rotate-12 transition-transform duration-700 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
                                    />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-gray-200">{user?.name || 'Guest'}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage your profile</p>
                                </div>
                            </div>
                            <NavLink to="/profile">
                                <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-[10px] leading-3 text-white rounded whitespace-nowrap">
                                    See Profile
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="p-2 opacity-40 pointer-events-none hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">Notifications</h3>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications}
                                    onChange={handleNotificationToggle}
                                />
                                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                        </div>

                        {notifications && (
                            <div className="mt-4 ml-9">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={emailNotifications}
                                        onChange={handleEmailNotificationsToggle}
                                        className="form-checkbox h-5 w-5 text-emerald-600"
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm">Email notifications</span>
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Theme Section */}
                    <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-gray-400 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 24 24">
                                        <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clipRule="evenodd" />
                                        <path d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                                        Switch theme
                                    </h3>
                                </div>
                            </div>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Help Section */}
                    <div>
                        <a href="mailto:dope.mukeshyadav@gmail.com" className="p-2 block hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 dark:text-gray-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">Help & Support</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Logout Section */}
                    <div
                        onClick={handleLogout}
                        className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg border border-red-200 hover:border-red-500 dark:border-red-500 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-red-500 hover:text-red-600">Logout</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-10 w-full">
                <span className="font-medium text-yellow-400">Everything is under development.</span>
            </p>
        </div>
    );
};

export default Menu;
