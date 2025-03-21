import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { User } from '../types';

export const getUser = async (uid: string): Promise<User> => {
    const docRef = doc(db, 'Users', uid);
    const docSnap = await getDoc(docRef);

    return docSnap.data() as User;
};
