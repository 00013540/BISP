import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

import { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
    const querySnapshot = await getDocs(collection(db, 'Users'));

    return querySnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
    })) as User[];
};
