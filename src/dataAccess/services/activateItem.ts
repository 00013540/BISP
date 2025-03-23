import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

import { db } from '@/firebase';

import { ActivateItemData, ItemStatus } from '../types';

export const activateItem = async (itemData: ActivateItemData) => {
    const itemsRef = doc(db, 'Items', itemData.uid);
    const updatedItem = {
        releasedAt: serverTimestamp(),
        status: ItemStatus.ACTIVE,
        duration: itemData.duration,
        type: itemData.type,
    };
    await updateDoc(itemsRef, { ...updatedItem });
    return itemData;
};
