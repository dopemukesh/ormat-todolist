import React, { useEffect, useRef, useState } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import InputBox from './InputBox';
import { format } from 'date-fns';

const Todo = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  const [todoList, setTodoList] = useState(() => {
    const userTodos = localStorage.getItem(`tasks_${currentUser.email}`);
    return userTodos ? JSON.parse(userTodos) : [];
  });
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef();

  const add = (expirationMs = 24 * 60 * 60 * 1000) => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const now = new Date();
    const newTodo = {
      id: now.getTime(),
      text: inputText,
      isComplete: false,
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + expirationMs).toISOString(),
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

  const handleMoveItem = (id, direction) => {
    setTodoList(prevTodos => {
      const currentIndex = prevTodos.findIndex(todo => todo.id === id);
      if (
        (direction === 'up' && currentIndex === 0) || 
        (direction === 'down' && currentIndex === prevTodos.length - 1)
      ) {
        return prevTodos; // Don't move if at the edges
      }

      const newTodos = [...prevTodos];
      const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      // Swap items
      [newTodos[currentIndex], newTodos[targetIndex]] = 
      [newTodos[targetIndex], newTodos[currentIndex]];
      
      return newTodos;
    });
  };

  useEffect(() => {
    localStorage.setItem(`tasks_${currentUser.email}`, JSON.stringify(todoList));
  }, [todoList, currentUser.email]);

  useEffect(() => {
    const checkExpiration = () => {
      const now = new Date();
      const expiredTodos = [];
      
      setTodoList(prevTodos =>
        prevTodos.filter(todo => {
          const expirationTime = new Date(todo.expiresAt);
          const isExpired = expirationTime <= now;
          
          if (isExpired) {
            expiredTodos.push({
              ...todo,
              expired: true
            });
            return false;
          }
          return true;
        })
      );

      if (expiredTodos.length > 0) {
        const existingExpired = JSON.parse(localStorage.getItem(`expiredTasks_${currentUser.email}`) || '[]');
        localStorage.setItem(
          `expiredTasks_${currentUser.email}`,
          JSON.stringify([...existingExpired, ...expiredTodos])
        );
      }
    };

    const interval = setInterval(checkExpiration, 1000);
    return () => clearInterval(interval);
  }, [currentUser.email]);

  return (
    <>
      <div className='bg-white dark:bg-zinc-900 max-w-[1024px] flex-grow px-4 w-full sticky top-14'>

        <InputBox add={add} inputRef={inputRef} />

        {/* ----- todo lists ----- */}
        <div
          className={`lists overflow-y-scroll max-h-[656px] md:max-h-[556px] bg-zinc-50 dark:bg-zinc-900 my-4 rounded-2xl flex flex-col gap-2 ${todoList.length > 0 ? 'p-1.5 border dark:border-zinc-700' : 'p-0'}`}>
          {todoList.map((item) => (
            <TodoItems
              key={item.id}
              {...item}
              deleteTodo={deleteTodo}
              toggle={toggle}
              startEdit={startEdit}
              cancelEdit={cancelEdit}
              saveEdit={saveEdit}
              editTodoId={editTodoId}
              editText={editText}
              setEditText={setEditText}
              onMoveItem={handleMoveItem}
            />
          ))}
        </div>
        {todoList.length > 0 ? "" : <p>No items found!</p>}
      </div>
    </>
  );
};

export default Todo;
