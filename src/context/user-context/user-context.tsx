import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
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
    favoriteItems: {},
    userLoggedIn: false,
    loading: true,
    refetch: () => {},
    clearUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const navigate = useNavigate();

    const [userUid, setUserUid] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<null | UserData>(null);

    const {
        data,
        refetch,
        isLoading: isUserLoading,
    } = useGetUser(userUid, {
        enabled: !!userUid,
    });

    const favoriteItems = useMemo(() => {
        return (
            currentUser?.favoriteFeeds?.reduce(
                (acc, cur) => ({
                    ...acc,
                    [cur.uid]: true,
                }),
                {}
            ) || {}
        );
    }, [currentUser?.favoriteFeeds]);

    const clearUser = () => {
        setUserUid('');
        setCurrentUser(null);

        navigate('/auth/sign-in');
    };

    async function initializeUser(user: null | User) {
        try {
            if (user) setUserUid(user.uid);
            else clearUser();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, initializeUser);
        return unSubscribe;
    }, []);

    useEffect(() => {
        if (data) setCurrentUser(data);
    }, [data]);

    const contextValue = {
        favoriteItems,
        currentUser: currentUser,
        userLoggedIn: !!currentUser,
        loading: loading || isUserLoading,
        refetch,
        clearUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
