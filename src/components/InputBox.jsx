import React, { useState } from 'react'

const InputBox = ({ inputRef, add }) => {
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [expirationTime, setExpirationTime] = useState('24'); // Default 24 hours
  const [timeUnit, setTimeUnit] = useState('hours'); // hours, minutes, seconds

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
      <div className='flex flex-col w-full my-7 gap-2'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Add your task'
            className='w-full bg-gray-50 rounded-md border outline-none outline-offset-0 flex-1 py-2.5 px-4 placeholder:text-gray-400 text-sm focus:border-emerald-500'
            ref={inputRef}
          />
          <button
            onClick={() => setShowTimeSelector(!showTimeSelector)}
            className='flex justify-center items-center gap-2 rounded-md bg-gray-100 active:bg-gray-200 border px-3 py-2 text-gray-600'
            title="Set expiration time"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>
          <button
            onClick={handleAdd}
            className='flex justify-center items-center gap-2 rounded-md bg-emerald-500 active:bg-emerald-400 border border-emerald-600/40 px-4 py-2 text-gray-100 text-sm font-medium whitespace-nowrap'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg>
            <p>Add Task</p>
          </button>
        </div>

        {/* Time Selector */}
        {showTimeSelector && (
          <div className='flex items-center gap-2 px-2'>
            <input
              type="number"
              min="1"
              value={expirationTime}
              onChange={(e) => setExpirationTime(e.target.value)}
              className='w-20 bg-gray-50 rounded-md border outline-none py-1 px-2 text-sm'
            />
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className='bg-gray-50 rounded-md border outline-none py-1 px-2 text-sm'
            >
              <option value="hours">Hours</option>
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
            </select>
            <span className='text-sm text-gray-500'>
              {!showTimeSelector ? 'Default: 24 hours' : `Task will expire in ${expirationTime} ${timeUnit}`}
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default InputBox