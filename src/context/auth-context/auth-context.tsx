import React, { useState, useContext, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase/firebase.ts';

import {
  AuthContextProviderProps,
  AuthContextInterface,
} from './auth-context.types.ts';

const AuthContext = React.createContext<AuthContextInterface>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: null | User) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const contextValue = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
