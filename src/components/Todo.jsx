import React, { useEffect, useRef, useState } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import InputBox from './InputBox';
import { format } from 'date-fns';

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
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
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const checkExpiration = () => {
      const now = new Date();
      setTodoList(prevTodos => 
        prevTodos.map(todo => {
          if (new Date(todo.expiresAt) <= now && !todo.isComplete) {
            return { ...todo, expired: true };
          }
          return todo;
        })
      );
    };

    checkExpiration();
    const interval = setInterval(checkExpiration, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='bg-white container px-4 w-full'>
        {/* Header Component */}
        <Header />
        <InputBox add={add} inputRef={inputRef} />

        {/* ----- todo lists ----- */}
        <div
          className={`lists overflow-y-scroll max-h-[656px] md:max-h-[556px] bg-gray-50 my-4 rounded-2xl flex flex-col gap-2 ${
            todoList.length > 0 ? 'p-1.5 border' : 'p-0'
          }`}
        >
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
