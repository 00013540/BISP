import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '@/firebase';

import { CreateItemData, ItemStatus, ItemType } from '../types';
import { ItemConstructor } from '../constructors';

export const createItem = async (itemData: CreateItemData) => {
    const itemsRef = collection(db, 'Items');
    const newItem = new ItemConstructor({
        ...itemData,
        status: ItemStatus.NEW,
        participants: [],
        duration: 0,
        type: ItemType.FIRST_BID,
        releasedAt: serverTimestamp(),
        isClaimAllowed: false,
    });
    await addDoc(itemsRef, { ...newItem });
    return itemData;
};
