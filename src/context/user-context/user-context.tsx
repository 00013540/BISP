import React, { useState, useContext, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase';
import { UserData } from '@/dataAccess/types';
import { useGetUser } from '@/dataAccess/hooks';

import {
    UserContextInterface,
    UserContextProviderProps,
} from './user-context.types.ts';

const UserContext = React.createContext<UserContextInterface>({
    currentUser: null,
    userLoggedIn: false,
    loading: true,
    clearUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [userUid, setUserUid] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<null | UserData>(null);

    const { refetch, isFetching } = useGetUser(userUid);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, initializeUser);
        return unSubscribe;
    }, []);

    async function initializeUser(user: null | User) {
        try {
            if (user) setUserUid(user.uid);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (userUid) {
            refetch().then((data) => {
                if (data.data) {
                    setCurrentUser(data.data);
                }
            });
        }
    }, [userUid, refetch]);

    const clearUser = () => {
        setCurrentUser(null);
    };

    const contextValue = {
        currentUser: currentUser,
        userLoggedIn: !!currentUser,
        loading: loading || isFetching,
        clearUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
