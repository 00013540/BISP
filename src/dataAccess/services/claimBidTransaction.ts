import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { ClaimBidTransactionData, ItemStatus } from '../types';

export const claimBidTransaction = async (data: ClaimBidTransactionData) => {
    const itemRef = doc(db, 'Items', data.refToItem);

    await updateDoc(itemRef, {
        status: ItemStatus.CLAIMED,
    });

    return data;
};
