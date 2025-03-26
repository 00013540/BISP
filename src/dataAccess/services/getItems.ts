import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

import { Item, ItemData } from '../types';

export const getItems = async (
    filters?: Record<string, string | null>
): Promise<ItemData[]> => {
    const itemsRef = collection(db, 'Items');
    const queries = Object.entries(filters || {})
        .map(([key, val]) => {
            return val ? [where(key, '==', val)] : [];
        })
        .flat();
    const q = query(itemsRef, ...queries);
    const itemsSnapshot = await getDocs(q);

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
            ownerPhone: itemData.ownerPhone,
            status: itemData.status,
            participants: itemData.participants,
            address: itemData.address,
            releasedAt: itemData.releasedAt,
            duration: itemData.duration,
            type: itemData.type,
            isClaimAllowed: itemData.isClaimAllowed,
        };
    });

    return allItems;
};
