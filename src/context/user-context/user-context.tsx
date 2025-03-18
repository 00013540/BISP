import React, { useState, useContext, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase/firebase.ts';

import {
  UserData,
  UserContextInterface,
  UserContextProviderProps,
} from './user-context.types.ts';

const UserContext = React.createContext<UserContextInterface>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<null | UserData>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeUser);
    return unSubscribe;
  }, []);

  async function initializeUser(user: null | User) {
    try {
      if (user) {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { firstName, lastName } = docSnap.data();
          setCurrentUser({ ...user, firstName, lastName });
          setUserLoggedIn(true);
        }
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const contextValue = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
