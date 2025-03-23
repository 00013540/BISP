import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

import { db } from '@/firebase';

import { ItemStatus, ItemType, UpdateItemData } from '../types';
import { ItemConstructor } from '../constructors';

export const updateItem = async (itemData: UpdateItemData) => {
    const itemsRef = doc(db, 'Items', itemData.uid);
    const newItem = new ItemConstructor({
        ...itemData,
        status: ItemStatus.NEW,
        participants: [],
        duration: 0,
        type: ItemType.FIRST_BID,
        releasedAt: serverTimestamp(),
    });
    await updateDoc(itemsRef, { ...newItem });
    return itemData;
};
