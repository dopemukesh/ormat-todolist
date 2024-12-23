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
      <div className='flex flex-col w-full my-7 gap-2 bg-gray-50 border p-1 rounded-lg'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Add your task'
            className='w-full bg-white rounded-md border outline-none outline-offset-0 flex-1 py-2.5 px-4 placeholder:text-gray-400 text-sm focus:border-gray-300'
            ref={inputRef}
          />
          <button
            onClick={() => setShowTimeSelector(!showTimeSelector)}
            className='flex justify-center items-center gap-2 rounded-md bg-white active:bg-gray-200 border p-2 text-gray-600'
            title="Set expiration time"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg> */}
            <img src={ClockIcon} alt="" />
          </button>
          <button
            onClick={handleAdd}
            className='flex justify-center items-center gap-2 rounded-md bg-gray-900 active:bg-gray-700 border border-gray-600/40 px-4 py-2.5 text-gray-100 text-sm font-medium whitespace-nowrap'
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg> */}
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
              className='overflow-x-scroll w-9 max-w-16 flex-1 h-9 grid place-items-center bg-white rounded-md border outline-none text-sm'
            />
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className='bg-white rounded-md border outline-none h-9 px-2 text-sm overflow-hidden'
            >
              <option value="hours">Hours</option>
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
            </select>
            <span className='w-full whitespace-nowrap text-[12px] text-rose-500 bg-rose-50 px-2 py-2 rounded-md border border-dashed border-rose-500 overflow-scroll'>
              {!showTimeSelector ? 'Default: 24 hours' : `Task will expire in ${expirationTime} ${timeUnit}`}
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default InputBox