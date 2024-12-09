import React, { useEffect, useRef, useState } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import InputBox from './InputBox';
import { format } from 'date-fns';

const Todo = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  const [todoList, setTodoList] = useState(() => {
    const userTodos = localStorage.getItem(`todos_${currentUser.email}`);
    return userTodos ? JSON.parse(userTodos) : [];
  });
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");
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
      createdAt: new Date().toISOString(),
      expiresAt: new Date(new Date().setHours(24, 0, 0, 0)).toISOString(),
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const startEdit = (id, text) => {
    setEditTodoId(id);
    setEditText(text);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    if (editText.trim() === "") return;

    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    cancelEdit();
  };

  useEffect(() => {
    localStorage.setItem(`todos_${currentUser.email}`, JSON.stringify(todoList));
  }, [todoList, currentUser.email]);

  useEffect(() => {
    const checkExpiration = () => {
      const now = new Date();
      setTodoList(prevTodos =>
        prevTodos.filter(todo => {
          const isExpired = new Date(todo.expiresAt) <= now && !todo.isComplete;
          if (isExpired) {
            const expiredTasks = JSON.parse(localStorage.getItem(`expiredTasks_${currentUser.email}`) || '[]');
            localStorage.setItem(`expiredTasks_${currentUser.email}`, JSON.stringify([...expiredTasks, { ...todo, expired: true }]));
            return false;
          }
          return true;
        })
      );
    };

    checkExpiration();
    const interval = setInterval(checkExpiration, 60000);

    return () => clearInterval(interval);
  }, [currentUser.email]);

  return (
    <>
      <div className='bg-white max-w-[1024px] flex-grow px-4 w-full sticky top-14'>

        <InputBox add={add} inputRef={inputRef} />

        {/* ----- todo lists ----- */}
        <div
          className={`lists overflow-y-scroll max-h-[656px] md:max-h-[556px] bg-gray-50 my-4 rounded-2xl flex flex-col gap-2 ${todoList.length > 0 ? 'p-1.5 border' : 'p-0'}`}>
          {todoList.map((item, index) => (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
              startEdit={startEdit}
              cancelEdit={cancelEdit}
              saveEdit={saveEdit}
              editTodoId={editTodoId}
              editText={editText}
              setEditText={setEditText}
            />
          ))}
        </div>
        {todoList.length > 0 ? "" : <p>No items found!</p>}
      </div>
    </>
  );
};

export default Todo;
