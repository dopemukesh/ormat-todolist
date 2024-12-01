import React from 'react'

const InputBox = ({ inputRef, add }) => {
  return (
    <>
        {/* ----- input box ----- */}
      <div className='flex items-center justify-center w-full my-7 gap-2'>
        <input
          type="text"
          placeholder='Add your task'
          className='w-full bg-gray-50 rounded-md border outline-none outline-offset-0 flex-1 py-2.5 px-4 placeholder:text-gray-400 text-sm focus:border-emerald-500'
          ref={inputRef}
        />
        <button
          onClick={add}
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
    </>
  )
}

export default InputBox