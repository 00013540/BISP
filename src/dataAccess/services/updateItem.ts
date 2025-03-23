import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { UpdateItemData } from '../types';

export const updateItem = async (itemData: UpdateItemData) => {
    const itemsRef = doc(db, 'Items', itemData.uid);
    const updatedItem = {
        title: itemData.title,
        description: itemData.description,
        address: itemData.address,
        image: itemData.image,
        imageStoragePath: itemData.imageStoragePath,
        category: itemData.category,
    };
    await updateDoc(itemsRef, { ...updatedItem });
    return itemData;
};
