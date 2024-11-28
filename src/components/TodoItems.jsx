import React from 'react'
import tick from '../assets/icons/tick.svg'
import unTick from '../assets/icons/not_tick.svg'
// import deleteIcon from '../assets/icons/delete.svg'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <>
      <div className={`flex flex-col rounded-xl ${isComplete ? "bg-emerald-100 border-emerald-300" : "bg-yellow-50"}`}>

        <p className={`text-[8px] font-medium whitespace-nowrap py-1 px-2 rounded-t-md  ${isComplete ? "bg-emerald-100 border-emerald-300 text-emerald-500" : "bg-yellow-50 border-yellow-300 text-yellow-500"}`}>
          {isComplete ? "COMPLETED" : "IN PROGRESS"}
        </p>

        <div className={`flex flex-1 rounded-xl p-2 border ${isComplete ? 'bg-white border-emerald-300' : 'bg-white'}`}>


          {/* <p className={`text-[8px] font-medium whitespace-nowrap py-1 px-2 rounded-md border ${isComplete ? "bg-emerald-100 border-emerald-500 text-emerald-500" : "bg-yellow-50 border-yellow-400 text-yellow-500"}`}>
            {isComplete ? "COMPLETED" : "IN PROGRESS"}
          </p> */}


          <img onClick={() => { toggle(id) }} src={isComplete ? tick : unTick} alt="" className='h-7 cursor-pointer select-none' />
          <div className='relative flex items-start justify-between w-full'>
            <p className={`mx-2 decoration-[1.5px] decoration-emerald-500 flex self-center text-sm md:text-base break-words hyphens-auto break-all ${isComplete ? "line-through text-gray-400" : ""}`}>
              {text}
            </p>

            <div className='flex items-center gap-2 w-fit justify-end'>
              {/* <p className={`text-[8px] font-medium whitespace-nowrap py-1 px-2 rounded-md border ${isComplete ? "bg-emerald-100 border-emerald-500 text-emerald-500" : "bg-yellow-50 border-yellow-400 text-yellow-500"}`}>
                {isComplete ? "COMPLETED" : "IN PROGRESS"}
              </p> */}
              <div onClick={() => { deleteTodo(id) }} className='group grid place-content-center h-7 w-7 p-1 rounded-md cursor-pointer border bg-gray-100 hover:bg-gray-200 active:bg-rose-500'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-active:stroke-white' d="M20.5001 6H3.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M9.5 11L10 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M14.5 11L14 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#111827" stroke-width="1.5" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default TodoItems