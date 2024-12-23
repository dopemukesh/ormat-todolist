// Created by Mukesh Yadav

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Histry from './components/Histry';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Settings from './components/Settings';
import DevxAI from './AI/DevxAI';
import Profile from './Profiles/Profile';
import Notification from './Profiles/Notification';
import Login from './Profiles/Login';
import Signup from './Profiles/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Error404 from './Errors/Error404';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('currentUser') ? true : false
  );

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
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex justify-center overflow-hidden">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>

              <Route path="/" element={<Todo />} />
              <Route path="/histry" element={<Histry />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/devxAI" element={<DevxAI />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notification" element={<Notification />} />
            </Route>
            
            {/* 404 Error Route */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <BottomBar />
      </Router>
    </>
  );
};

export default App;
