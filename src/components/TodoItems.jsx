import React, { useState } from 'react'
import tick from '../assets/icons/tick.svg'
import unTick from '../assets/icons/not_tick.svg'
// import deleteIcon from '../assets/icons/delete.svg'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, startEdit, cancelEdit, saveEdit, editTodoId, editText, setEditText }) => {

  const isEditing = id === editTodoId;

  const [showEditBox, setShowEditBox] = useState(false);

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
      <div className={`flex flex-col rounded-xl relative ${isComplete ? "bg-emerald-100 beforeAfterBorder_g" : "bg-yellow-50 beforeAfterBorder_y"}`}>

        {/* <div className='flex'> */}
        <div className={`flex justify-between items-center text-[10px] leading-4 font-medium whitespace-nowrap py-1 px-2 rounded-t-xl border border-b-0 ${isComplete ? "bg-emerald-100 border-emerald-300 text-emerald-500" : "bg-yellow-50 border-yellow-300 text-yellow-500"}`}>
          <p> {isComplete ? "COMPLETED" : "IN PROGRESS"} </p>
          <div className={`bg-white hover:bg-gray-100 px-2 py-[2px] rounded-[4px] border cursor-pointer select-none ${isComplete ? "border-emerald-300 text-gray-300" : "border-yellow-300 text-gray-600"}`}>
            <p onClick={handleEditClick}>Edit</p>
          </div>
        </div>

        {/* editBox */}
        {showEditBox && (
          <div className='fixed inset-0 grid place-items-center bg-gray-800 bg-opacity-20 backdrop-blur-sm z-[400]'>
            <div className="editBox absolute  min-w-80 max-w-full flex-1 p-2 z-50 rounded-md border border-gray-400 bg-gray-100">
              {/* Editable Text Field */}
              <textarea
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-2 py-1 border outline-none outline-offset-0 flex-1 focus:border-emerald-500 rounded-md text-sm min-h-24"
              />

              <div className='updateBtns flex gap-2 mt-4 py-1'>
                <div className={`bg-emerald-500 active:bg-emerald-400 hover:bg-emerald-600 px-2 rounded-[4px] border text-white cursor-pointer select-none border-emerald-500`}>
                  <p onClick={handleSaveClick}>Save</p>
                </div>

                <div className={`bg-rose-500 active:bg-rose-400 hover:bg-rose-600 px-2 rounded-[4px] border text-white cursor-pointer select-none border-rose-500`}>
                  <p onClick={handleCancelClick}>Cancel</p>
                </div>

              </div>
            </div>
          </div>
        )}
        {/* </div> */}

        <div className={`z-[1] flex flex-1 rounded-xl p-2 border ${isComplete ? 'bg-white border-emerald-300' : 'bg-white'}`}>


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