// Created by Mukesh Yadav

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Histry from './components/Histry';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Menu from './components/Menu';
import DevxAI from './AI/DevxAI';
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
      <Router>
        {/* Header Component */}
        <Header />
        <main className="flex justify-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/histry" element={<Histry />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/devxAI" element={<DevxAI />} />
          </Routes>
        </main>
        <BottomBar />
      </Router>
    </>
  );
};

export default App;
