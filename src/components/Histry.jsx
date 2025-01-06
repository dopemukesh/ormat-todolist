import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import { format, isWithinInterval, startOfDay, endOfDay, subDays } from 'date-fns';
import { BackIcon } from '../assets/icons/icons';
import { NavLink } from 'react-router-dom';

const Histry = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [expiredTasks, setExpiredTasks] = useState(JSON.parse(localStorage.getItem(`expiredTasks_${currentUser.email}`) || '[]'));
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Dummy expired tasks data
    const dummyExpiredTasks = [
        {
            id: 1,
            text: "This is a test task that is expired and complete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 1).toISOString(),
            expiresAt: subDays(new Date(), 1).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: true
        },
        {
            id: 2,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 3,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: true
        },
        {
            id: 4,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 5,
            text: "Client meeting preparation and update the code",
            createdAt: subDays(new Date(), 3).toISOString(),
            expiresAt: subDays(new Date(), 3).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: true
        }
    ];

    useEffect(() => {
        // Get expired tasks from localStorage with correct key
        const expiredTasksFromStorage = JSON.parse(localStorage.getItem(`expiredTasks_${currentUser.email}`) || '[]');

        // Only use dummy data if there are no expired tasks in storage
        const allTasks = expiredTasksFromStorage.length > 0
            ? expiredTasksFromStorage
            : dummyExpiredTasks;

        // Filter tasks for selected date
        const filteredExpiredTodos = allTasks.filter(todo => {
            const todoDate = new Date(todo.createdAt);
            return isWithinInterval(todoDate, {
                start: startOfDay(selectedDate),
                end: endOfDay(selectedDate)
            });
        });

        setExpiredTasks(filteredExpiredTodos);
    }, [selectedDate, currentUser.email]);

    const clearAllExpiredTasks = () => {
        localStorage.setItem(`expiredTasks_${currentUser.email}`, '[]');
        setExpiredTasks([]);
    };

    return (
        <div className='flex flex-col flex-grow max-w-[1024px] flex-1 px-4 pb-12 select-none'>
            <div className='flex items-center gap-2 py-2'>
                <NavLink to={-1}>
                    <button
                        className='flex justify-center items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 active:bg-gray-100 dark:active:bg-gray-700 p-1.5 text-gray-600 dark:text-gray-400'
                        title="Back" >
                        <img src={BackIcon} alt="" className='dark:invert' />
                    </button>
                </NavLink>
            </div>
            <div className='grid md:grid-cols-2 md:place-items-start justify-center gap-8 mb-8'>
                {/* Calendar Section */}
                <div className='rounded-lg grid place-items-center'>
                    <div className='bg-gray-100 dark:bg-gray-800 w-fit border-dashed border border-gray-200 dark:border-gray-700 p-4 rounded-2xl'>
                        <Calendar
                            selectedDate={selectedDate}
                            onDateSelect={setSelectedDate}
                        />
                    </div>
                </div>

                {/* Expired Tasks Section */}
                <div className='p-4 rounded-lg'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4'>
                        <h2 className='text-lg sm:text-xl font-semibold'>
                            Expired Tasks for {format(selectedDate, 'MMMM d, yyyy')}
                        </h2>
                        {expiredTasks.length > 0 && (
                            <button
                                onClick={clearAllExpiredTasks}
                                className='self-end px-3 py-1.5 sm:py-1 text-sm bg-rose-500 text-white rounded-md hover:bg-rose-600 active:bg-rose-400 whitespace-nowrap'
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    {expiredTasks.length === 0 ? (
                        <p className='text-gray-500'>No expired tasks found for this date.</p>
                    ) : (
                        <div id='expiredTasks' className='space-y-4 bg-white dark:bg-gray-800 p-1 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-y-scroll max-h-[500px]'>
                            {expiredTasks.map(task => (
                                <div key={task.id} className="flex flex-col rounded-xl relative bg-rose-100 dark:bg-rose-900 beforeAfterBorder_r opacity-75" >
                                    {/* Status Header */}
                                    <div className="flex justify-between items-center text-[10px] leading-4 font-medium whitespace-nowrap py-1 px-2 rounded-t-xl border border-b-0 bg-rose-100 dark:bg-rose-900/50 border-rose-300 text-rose-500">
                                        <div className="flex items-center gap-2">
                                            <p>EXPIRED</p>
                                            <span className={`px-2 py-[2px] rounded-[4px] border ${task.isComplete
                                                ? "bg-emerald-50 dark:bg-emerald-900 border-emerald-300 text-emerald-500 dark:text-emerald-300"
                                                : "bg-yellow-50 dark:bg-yellow-900 border-yellow-300 text-yellow-500 dark:text-yellow-300"
                                                }`}>
                                                {task.isComplete ? "COMPLETED" : "INCOMPLETE"}
                                            </span>
                                        </div>
                                        <div className="bg-white dark:bg-gray-950 px-2 py-[2px] rounded-[4px] border border-rose-300 text-gray-500">
                                            {format(new Date(task.expiresAt), 'h:mm:ss a')}
                                        </div>
                                    </div>

                                    {/* Task Content */}
                                    <div className="z-[1] flex flex-1 rounded-xl p-2 border bg-white dark:bg-gray-950 border-rose-300">
                                        <div className="relative flex items-start justify-between w-full">
                                            <p className={`mx-2 flex self-center text-sm md:text-base break-words hyphens-auto select-none ${task.isComplete ? "line-through decoration-emerald-500 decoration-[1.5px] text-gray-400" : "text-gray-600"
                                                }`}>
                                                {task.text}
                                            </p>
                                            <div className="flex items-center gap-2 w-fit justify-end">
                                                <span className="text-[10px] font-medium whitespace-nowrap py-1 px-2 rounded-md border bg-rose-100 dark:bg-gray-900 border-rose-300 dark:border-rose-500 text-rose-500">
                                                    Created: {format(new Date(task.createdAt), 'h:mm:ss a')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Histry;