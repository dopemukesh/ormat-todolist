import React from 'react'
import Todo from './components/Todo'
import Header from './components/Header'

const App = () => {
  return (
    <>
    {/* <Header /> */}
      <main className='flex justify-center overflow-hidden'>
        <Todo />
      </main>
    </>
  )
}

export default App