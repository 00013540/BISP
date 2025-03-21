import React from 'react';
import { User } from '@/dataAccess/types';

export interface UserContextInterface {
    currentUser: null | User;
    userLoggedIn: boolean;
    loading: boolean;
}

export interface UserContextProviderProps {
    children: React.ReactNode;
}
