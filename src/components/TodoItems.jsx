import React, { useState, useEffect } from 'react'
import tick from '../assets/icons/tick.svg'
import unTick from '../assets/icons/not_tick.svg'
import upArrow from '../assets/icons/upArrow-icon.svg'
import dnArrow from '../assets/icons/downArrow-icon.svg'
import { format } from 'date-fns'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, startEdit, cancelEdit, saveEdit, editTodoId, editText, setEditText, expiresAt, onMoveItem }) => {

  const isEditing = id === editTodoId;

  const [showEditBox, setShowEditBox] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const expirationTime = new Date(expiresAt).getTime();
      const difference = expirationTime - now;

      if (difference <= 0) {
        setTimeLeft('Expired');
        return;
      }

      // Calculate time units
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setTimeLeft(`${minutes}m ${seconds}s`);
      } else {
        setTimeLeft(`${seconds}s`);
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  const handleEditClick = () => {
    if (!isComplete) { // Allow editing only if the task is not complete
      startEdit(id, text); // Set the editing state in the parent
      setShowEditBox(true); // Show the EditBox
    }
  };

  const handleCancelClick = () => {
    cancelEdit(); // Reset edit state in the parent
    setShowEditBox(false); // Hide the EditBox
  };

  const handleSaveClick = () => {
    saveEdit(id); // Save the changes in the parent
    setShowEditBox(false); // Hide the EditBox
  };

  return (
    <>
      <div className={`flex flex-col rounded-xl relative ${isComplete ? "bg-emerald-100 dark:bg-emerald-500/40 beforeAfterBorder_g" : "bg-yellow-50 dark:bg-yellow-500/40 beforeAfterBorder_y"} select-none`}>

        {/* <div className='flex'> */}
        <div className={`flex justify-between items-center text-[10px] leading-4 font-medium whitespace-nowrap py-1 px-2 rounded-t-xl border border-b-0 ${isComplete ? "bg-emerald-100 dark:bg-transparent border-emerald-300 text-emerald-500" : "bg-yellow-50 dark:bg-transparent border-yellow-300 text-yellow-500"}`}>
          <p> {isComplete ? "COMPLETED" : "IN PROGRESS"} </p>

          <div className='flex items-center gap-2'>
            {/* <span className={`bg-white dark:bg-zinc-900 px-2 py-[2px] rounded-[4px] border ${isComplete ? "border-emerald-300 text-zinc-300 dark:text-zinc-600" : "border-yellow-300 text-zinc-600 dark:text-zinc-500"}`}>
              Created: {format(new Date(id), 'h:mm a')}
            </span> */}

            <span className={`bg-white dark:bg-zinc-900 px-2 py-[2px] rounded-[4px] border ${isComplete ? "border-emerald-300 text-zinc-300 dark:text-zinc-600" : "border-yellow-300 text-red-500"}`}>
              Expires in: {timeLeft}
            </span>

            <div className={`bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-[2px] rounded-[4px] border cursor-pointer select-none ${isComplete ? "border-emerald-300 text-zinc-300 dark:text-zinc-600" : "border-yellow-300 text-zinc-600 dark:text-yellow-500"}`}>
              <p onClick={handleEditClick}>Edit</p>
            </div>
          </div>

        </div>

        {/* editBox */}
        {showEditBox && (
          <div className='fixed inset-0 grid place-items-center bg-zinc-800 bg-opacity-20 backdrop-blur-sm dark:bg-zinc-900 dark:bg-opacity-50 z-[400]'>
            <div className="editBox absolute  min-w-80 max-w-full flex-1 p-2 z-50 rounded-xl border dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
              {/* Editable Text Field */}
              <textarea
                type="text"
                value={editText}
                placeholder='Your text will go here'
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-2 py-1 border dark:border-zinc-700 outline-none outline-offset-0 flex-1 focus:border-emerald-500 rounded-md text-sm min-h-24 dark:bg-zinc-800/50 dark:text-zinc-300 dark:focus:border-emerald-500 dark:placeholder:text-zinc-400"
              />

              <div className='updateBtns flex gap-2 mt-4 py-1'>
                <div className="p-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-xs font-medium text-white rounded-md dark:text-zinc-800 whitespace-nowrap">
                  <p onClick={handleSaveClick}>Save Changes</p>
                </div>

                <div className="p-2.5 dark:bg-zinc-800 hover:bg-zinc-200 bg-white dark:hover:bg-zinc-700 text-xs font-medium dark:text-white  text-zinc-800 rounded-md whitespace-nowrap">
                  <p onClick={handleCancelClick}>Cancel</p>
                </div>

              </div>
            </div>
          </div>
        )}
        {/* </div> */}

        <div className={`z-[1] flex flex-1 rounded-xl p-2 border ${isComplete ? 'bg-white dark:bg-zinc-800 border-emerald-300 dark:border-emerald-300' : 'border-yellow-300 dark:border-yellow-300 bg-white dark:bg-zinc-800'}`}>


          <img onClick={() => { toggle(id) }} src={isComplete ? tick : unTick} alt="" className='h-7 cursor-pointer select-none' />
          <div className='relative flex items-start justify-between w-full'>
            <p className={`mx-2 decoration-[1.5px] decoration-emerald-500 flex self-center text-sm md:text-base break-words hyphens-auto select-none ${isComplete ? "line-through text-zinc-400 dark:text-zinc-500" : "text-zinc-800 dark:text-white"}`}>
              {text}
            </p>

            <div className='flex items-center gap-2 w-fit justify-end'>
              {/* <p className={`text-[8px] font-medium whitespace-nowrap py-1 px-2 rounded-md border ${isComplete ? "bg-emerald-100 border-emerald-500 text-emerald-500" : "bg-yellow-50 border-yellow-400 text-yellow-500"}`}>
                {isComplete ? "COMPLETED" : "IN PROGRESS"}
              </p> */}

              {/* Up Down button */}
              <div id='upDownArrow' className='flex gap-1'>
                <div
                  onClick={() => onMoveItem(id, 'up')}
                  className='cursor-pointer select-none'
                >
                  <div className='group grid place-content-center h-7 w-7 rounded-md cursor-pointer border border-emerald-600 bg-emerald-500 md:hover:bg-emerald-600 active:bg-emerald-600'>
                    <img src={upArrow} alt="" />
                  </div>
                </div>

                <div
                  onClick={() => onMoveItem(id, 'down')}
                  className='cursor-pointer select-none'
                >
                  <div className='group grid place-content-center h-7 w-7 rounded-md cursor-pointer border border-rose-600  bg-rose-500 md:hover:bg-rose-600 active:bg-rose-600'>
                    <img src={dnArrow} alt="" />
                  </div>
                </div>
              </div>

              {/* Delete button */}
              <div onClick={() => { deleteTodo(id) }} className='group grid place-content-center h-7 w-7 p-1 rounded-md cursor-pointer border bg-zinc-100 hover:bg-zinc-200 active:bg-rose-500'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-active:stroke-white' d="M20.5001 6H3.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M9.5 11L10 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M14.5 11L14 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path className='group-active:stroke-white' d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#111827" strokeWidth="1.5" />
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