// Created by Mukesh Yadav

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Histry from './components/Histry';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Settings from './components/Settings';
import Profile from './Profiles/Profile';
import Notification from './Profiles/Notification';
import Login from './Profiles/Login';
import Signup from './Profiles/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Error404 from './Errors/Error404';
import ComingSoon from './AI/ComingSoon';
import WebHome from './components/webComponents/WebHome';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('currentUser') ? true : false
  );

  useEffect(() => {
    // Select the meta tag for the theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

    // Set the theme color based on the current theme
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentTheme === 'light' ? '#ffffff' : '#131316');
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
            <Route path="/register" element={<Signup />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>

              <Route path="/" element={<WebHome />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/histry" element={<Histry />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ai" element={<ComingSoon />} />
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
