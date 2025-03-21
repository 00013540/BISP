import { addDoc, collection } from 'firebase/firestore';

import { db } from '@/firebase';

import { CategoryType } from '../types';

export const createCategory = async (category: CategoryType) => {
    const categoryRef = collection(db, 'Categories');
    await addDoc(categoryRef, { name: category });
    return category;
};
