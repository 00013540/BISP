import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { UpdateUserData } from '../types';

export const updateUser = async (userData: UpdateUserData) => {
    const userRef = doc(db, 'Users', userData.uid);

    const updatedUserData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        image: userData.image,
        imageStoragePath: userData.imageStoragePath,
    };
    await updateDoc(userRef, { ...updatedUserData });

    return userData;
};
