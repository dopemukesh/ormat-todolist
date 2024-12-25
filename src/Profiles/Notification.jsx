import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch notifications from an API
    // For now, we'll use mock data
    const mockNotifications = [
      {
        id: 1,
        title: 'Welcome!',
        message: 'Welcome to our platform. Get started by exploring our features.',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString() // 1 hour ago
      },
      {
        id: 2,
        title: 'Profile Update',
        message: 'Your profile has been successfully updated.',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }
    return `${Math.floor(diffInHours / 24)} day${Math.floor(diffInHours / 24) === 1 ? '' : 's'} ago`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-8 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-zinc-900 mb-6">Notifications</h1>
        
        <div className="bg-white shadow rounded-lg divide-y divide-zinc-200">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-zinc-500">
              No notifications
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id}
                className={`p-4 ${notification.read ? 'bg-white' : 'bg-emerald-50'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-zinc-900">
                      {notification.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {notification.message}
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                      {formatTimestamp(notification.timestamp)}
                    </p>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="ml-4 px-3 py-1 text-xs text-emerald-600 hover:text-emerald-500 font-medium"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
