import React, { useEffect, useRef, useState } from 'react'
import todoIcon from '../assets/icons/todoIcon.svg'
import historyIcon from '../assets/icons/history.svg'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

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

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])
    return (
        <>
            <div className='bg-white container px-4 w-full'>

                <header className='flex flex-col items-center sticky top-0 z-50'>
                    {/* ----- title -----  */}
                    <div className='flex flex-grow w-full border-b-2 py-4 justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <img src={todoIcon} alt="" className='w-7 p-1 bg-gray-200 rounded-md' />
                            <h1 className='text-lg font-bold'>To Do List</h1>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={historyIcon} alt="" className='w-7 p-1 bg-gray-200 rounded-md active:invert' />
                            {/* <img src={todoIcon} alt="" className='w-6 p-1 bg-gray-200 rounded-md' /> */}
                        </div>
                    </div>

                    {/* ----- input box -----  */}
                    <div className='flex items-center justify-center w-full my-7 gap-2'>
                        <input type="text" placeholder='Add your task' ref={inputRef} className='w-56 bg-gray-100 rounded-md border outline-none outline-offset-0 flex-1 py-2.5 px-4 placeholder:text-gray-400 text-sm focus:border-emerald-500' />

                        <button onClick={add} className='flex justify-center items-center gap-2 border-none rounded-md bg-emerald-500 active:bg-emerald-600 px-4 py-2 text-gray-100 text-sm font-medium whitespace-nowrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus "><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                            <p>Add List</p>
                        </button>
                    </div>
                </header>

                {/* ----- todo lists -----  */}
                <div className={`lists overflow-y-scroll max-h-[656px] bg-gray-50 my-4 rounded-2xl flex flex-col gap-1 ${todoList.length > 0 ? 'p-1.5 border' : 'p-0'}`}>
                    {todoList.map((item, index) => {
                        return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                    })}
                </div>
                {todoList.length > 0 ? "" : <p>No items found !</p>}

            </div>
        </>
    )
}

export default Todo