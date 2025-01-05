import React, { useState } from 'react'
import { ClockIcon } from '../assets/icons/icons';

const InputBox = ({ inputRef, add }) => {
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [expirationTime, setExpirationTime] = useState('24'); // Default 24 hours
  const [timeUnit, setTimeUnit] = useState('hours'); // hours, minutes, seconds

  /**
   * Converts the expiration time from user input to milliseconds and calls the `add` function
   * with the converted value. The conversion depends on the selected time unit (hours, minutes, seconds).
   */
  const handleAdd = () => {
    // Convert time to milliseconds
    let milliseconds;
    switch (timeUnit) {
      case 'minutes':
        milliseconds = expirationTime * 60 * 1000;
        break;
      case 'seconds':
        milliseconds = expirationTime * 1000;
        break;
      case 'hours':
      default:
        milliseconds = expirationTime * 60 * 60 * 1000;
    }
    add(milliseconds);
  };

  return (
    <>
      <div className='flex flex-col w-full my-7 gap-2 bg-white dark:bg-gray-950 border dark:border-gray-800 p-1 rounded-xl'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Enter your task'
            className='w-full bg-gray-50 dark:bg-gray-900 rounded-lg border dark:border-gray-800 outline-none outline-offset-0 flex-1 py-2 px-4 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm focus:border-gray-300 dark:focus:border-gray-600'
            ref={inputRef}
          />
          <button
            onClick={() => setShowTimeSelector(!showTimeSelector)}
            className='flex justify-center items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 active:bg-gray-100 dark:active:bg-gray-200 p-1.5 text-gray-600 dark:text-gray-400'
            title="Set expiration time"
          >
            <img src={ClockIcon} alt="" className='dark:invert'/>
          </button>
          <button
            onClick={handleAdd}
            className='flex justify-center items-center gap-2 rounded-lg bg-gray-950 dark:bg-white active:bg-gray-900 dark:active:bg-gray-200 border border-gray-600/40 dark:border-gray-800/40 px-4 py-2 text-gray-100 dark:text-gray-900 text-sm whitespace-nowrap'
          >
            <p>Add Task</p>
          </button>
        </div>

        {/* Time Selector */}
        {showTimeSelector && (
          <div className='flex items-center gap-2'>
            <input
              type="number"
              min="1"
              value={expirationTime}
              onChange={(e) => setExpirationTime(e.target.value)}
              className='overflow-x-scroll w-9 max-w-16 flex-1 h-9 grid place-items-center bg-gray-50 dark:bg-gray-900 rounded-md border dark:border-gray-800 outline-none text-sm'
            />
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className='bg-gray-50 dark:bg-gray-900 rounded-md border dark:border-gray-800 outline-none h-9 px-2 text-sm overflow-hidden'
            >
              <option value="hours" className='bg-gray-100 dark:bg-gray-900'>Hours</option>
              <option value="minutes" className='bg-gray-100 dark:bg-gray-900'>Minutes</option>
              <option value="seconds" className='bg-gray-100 dark:bg-gray-900'>Seconds</option>
            </select>
            <span className='w-full whitespace-nowrap text-[12px] text-rose-500 dark:text-rose-500 bg-rose-50 dark:bg-rose-900/50 px-2 py-2 rounded-md border border-dashed border-rose-500 dark:border-rose-400 overflow-scroll'>
              {!showTimeSelector ? 'Default: 24 hours' : `Task will expire in ${expirationTime} ${timeUnit}`}
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default InputBox