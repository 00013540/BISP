import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

import { Category } from '../types';

export const getCategories = async (): Promise<Category[]> => {
    const categoriesSnapshot = await getDocs(collection(db, 'Categories'));
    const categoriesData = categoriesSnapshot.docs.map((categorySnapshot) =>
        categorySnapshot.data()
    ) as Category[];

    return categoriesData;
};
