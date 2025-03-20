import React from 'react';
import { User } from 'firebase/auth';

export interface UserContextInterface {
    currentUser: null | User;
    userLoggedIn: boolean;
    loading: boolean;
}

export interface UserContextProviderProps {
    children: React.ReactNode;
}

export interface UserData extends User {
    firstName: string;
    lastName: string;
}
