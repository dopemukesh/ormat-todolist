// Created by Mukesh Yadav

import React, { useEffect } from 'react'
import Todo from './components/Todo'
// import Header from './components/Header'

const App = () => {
  useEffect(() => {
    // Select the meta tag for the theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    // Set the theme color to white for light theme
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#ffffff');
    }
  }, []);

  return (
    <>
      <main className='flex justify-center overflow-hidden'>
        <Todo />
      </main>
    </>
  )
}

export default App
