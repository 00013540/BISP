import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

import { Item, ItemData } from '../types';

export const getItems = async (): Promise<ItemData[]> => {
    const itemsSnapshot = await getDocs(collection(db, 'Items'));

    const allItems = itemsSnapshot.docs.map((itemSnap): ItemData => {
        const itemData = itemSnap.data() as Item;

        return {
            uid: itemSnap.id,
            title: itemData.title,
            description: itemData.description,
            image: itemData.image,
            imageStoragePath: itemData.imageStoragePath,
            category: itemData.category,
            ownerUid: itemData.ownerUid,
            status: itemData.status,
            participants: itemData.participants,
            address: itemData.address,
            releasedAt: itemData.releasedAt,
            duration: itemData.duration,
            type: itemData.type,
        };
    });

    return allItems;
};
