// import React from 'react'
import React, { useEffect, useRef } from 'react'

import todoIcon from '../assets/icons/todo_icon.png'

const Header = () => {

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

  return (
    <>
        <header className='flex flex-col sticky top-0 z-50 bg-white p-4'>
                    {/* ----- title -----  */}
                    <div className='flex items-center gap-2'>
                        <img src={todoIcon} alt="" className='w-8' />
                        <h1 className='text-3xl font-semibold'>To-Do List</h1>
                    </div>

                    {/* ----- input box -----  */}
                    <div className='flex items-center my-7 gap-2'>
                        <input type="text" placeholder='Add your task' ref={inputRef} className='bg-gray-100 rounded-md border outline-none flex-1 py-2.5 px-4 placeholder:text-gray-600 text-sm focus:border-violet-500' />

                        <button onClick={add} className='flex justify-center items-center gap-2 border-none rounded-md bg-indigo-500 px-4 py-2 text-gray-100 text-sm font-medium whitespace-nowrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus "><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                            <p>Add List</p>
                        </button>
                    </div>
                </header>
    </>
  )
}

export default Header