import React, { createContext, useState } from 'react';
import api from '../services/api.js';

// Create a global context to share user state across the app
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Initialize user state from localStorage if available
  const [user, setUser] = useState(() => {
    const userFromStorage = localStorage.getItem('user');
    return userFromStorage ? JSON.parse(userFromStorage) : null;
  });

  // Handle user sign-in (returns the user object to the calling component)
  const signIn = async (email, password) => {
    const response = await api.post('/auth/signin', { email, password });
    const userData = response.data.user;

    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);

    return userData; // The caller will decide what to do next
  };

  // Handle user sign-out (no navigation here)
  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Provide global state and auth functions to the rest of the app
  return (
    <StoreContext.Provider value={{ user, setUser, signIn, signOut }}>
      {children}
    </StoreContext.Provider>
  );
};

