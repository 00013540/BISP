import React, { useState, useContext, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase';
import { useGetUser } from '@/dataAccess/hooks/users';

import {
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
    const [userUid, setUserUid] = useState('');
    const [loading, setLoading] = useState(true);

    const { data: userData, refetch, isFetching } = useGetUser(userUid);

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
            refetch();
        }
    }, [userUid, refetch]);

    const contextValue = {
        currentUser: userData || null,
        userLoggedIn: !!userData,
        loading: loading || isFetching,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
