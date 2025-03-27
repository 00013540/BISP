import React from 'react';
import { UserData } from '@/dataAccess/types';

export interface UserContextInterface {
    favoriteItems: { [key: string]: boolean };
    currentUser: null | UserData;
    userLoggedIn: boolean;
    loading: boolean;
    clearUser: () => void;
    refetch: () => void;
}

export interface UserContextProviderProps {
    children: React.ReactNode;
}
