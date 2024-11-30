// Created by Mukesh Yadav

import React, { useEffect } from 'react'
import Todo from './components/Todo'
// import Header from './components/Header'

const App = () => {
  // Assuming you have a way to check for the theme (e.g., dark or light mode)
  const isDarkTheme = true;  // Replace with your actual theme state

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkTheme ? '#000000' : '#ffffff');
    }
  }, [isDarkTheme]);

  return (
    <>
      <main className='flex justify-center overflow-hidden'>
        <Todo />
      </main>
    </>
  )
}

export default App
