import React, { useState, useEffect } from 'react';
import Header from './Header';
import Calendar from './Calendar';
import { format, isWithinInterval, startOfDay, endOfDay, subDays } from 'date-fns';

const Histry = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [expiredTasks, setExpiredTasks] = useState([]);

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
            isComplete: false
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
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 6,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 7,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 8,
            text: "This is a test task that is expired and incomplete , you can see your future expired tasks here",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 9,
            text: "Review team updates",
            createdAt: subDays(new Date(), 2).toISOString(),
            expiresAt: subDays(new Date(), 2).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: true
        },
        {
            id: 10,
            text: "Update documentation and audit the code",
            createdAt: subDays(new Date(), 3).toISOString(),
            expiresAt: subDays(new Date(), 3).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: false
        },
        {
            id: 11,
            text: "Client meeting preparation and update the code",
            createdAt: subDays(new Date(), 3).toISOString(),
            expiresAt: subDays(new Date(), 3).setHours(23, 59, 59, 999),
            expired: true,
            isComplete: true
        }
    ];

    useEffect(() => {
        // Get expired tasks from localStorage
        const expiredTasksFromStorage = JSON.parse(localStorage.getItem('expiredTasks') || '[]');
        
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
    }, [selectedDate]);

    return (
        <div className='bg-white flex flex-grow max-w-[1024px] flex-1 px-4 pb-12'>
            {/* <Header /> */}
            <div className='grid md:grid-cols-2 md:place-items-start place-items-center justify-center gap-8 my-8'>
                {/* Calendar Section */}
                <div className='rounded-lg grid place-items-center'>
                    <div className='bg-gray-50 border-dashed border border-gray-200 p-4 rounded-xl'>
                        <Calendar
                            selectedDate={selectedDate}
                            onDateSelect={setSelectedDate}
                        />
                    </div>
                </div>

                {/* Expired Tasks Section */}
                <div className='p-4 rounded-lg'>
                    <h2 className='text-xl font-semibold mb-4'>
                        Expired Tasks for {format(selectedDate, 'MMMM d, yyyy')}
                    </h2>

                    {expiredTasks.length === 0 ? (
                        <p className='text-gray-500'>No expired tasks found for this date.</p>
                    ) : (
                        <div id='expiredTasks' className='space-y-4 bg-gray-50 p-1 rounded-xl border border-gray-200 overflow-y-scroll max-h-[500px]'>
                            {expiredTasks.map(task => (
                                <div key={task.id} className="flex flex-col rounded-xl relative bg-rose-100 beforeAfterBorder_r opacity-75" >
                                    {/* Status Header */}
                                    <div className="flex justify-between items-center text-[10px] leading-4 font-medium whitespace-nowrap py-1 px-2 rounded-t-xl border border-b-0 bg-rose-100 border-rose-300 text-red-500">
                                        <div className="flex items-center gap-2">
                                            <p>EXPIRED</p>
                                            <span className={`px-2 py-[2px] rounded-[4px] border ${task.isComplete
                                                ? "bg-emerald-50 border-emerald-300 text-emerald-500"
                                                : "bg-yellow-50 border-yellow-300 text-yellow-500"
                                                }`}>
                                                {task.isComplete ? "COMPLETED" : "INCOMPLETE"}
                                            </span>
                                        </div>
                                        <div className="bg-white px-2 py-[2px] rounded-[4px] border border-rose-300 text-gray-500">
                                            {format(new Date(task.expiresAt), 'h:mm:ss a')}
                                        </div>
                                    </div>

                                    {/* Task Content */}
                                    <div className="z-[1] flex flex-1 rounded-xl p-2 border bg-white border-rose-300">
                                        <div className="relative flex items-start justify-between w-full">
                                            <p className={`mx-2 flex self-center text-sm md:text-base break-words hyphens-auto select-none ${task.isComplete ? "line-through decoration-emerald-500 decoration-[1.5px] text-gray-400" : "text-gray-600"
                                                }`}>
                                                {task.text}
                                            </p>
                                            <div className="flex items-center gap-2 w-fit justify-end">
                                                <span className="text-[10px] font-medium whitespace-nowrap py-1 px-2 rounded-md border bg-rose-100 border-rose-300 text-red-500">
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