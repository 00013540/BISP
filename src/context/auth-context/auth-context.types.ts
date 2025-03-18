import React from 'react';
import { User } from 'firebase/auth';

export interface AuthContextInterface {
  currentUser: null | User;
  userLoggedIn: boolean;
  loading: boolean;
}

export interface AuthContextProviderProps {
  children: React.ReactNode;
}
