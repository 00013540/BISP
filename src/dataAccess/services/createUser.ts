import { doc, setDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { CreateUserData } from '../types';
import { User } from '../constructors';

export const createUser = async (userData: CreateUserData) => {
    const userRef = doc(db, 'Users', userData.uid);
    const newUser = new User(userData);
    await setDoc(userRef, { ...newUser });
    return userData;
};
