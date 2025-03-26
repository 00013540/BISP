import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { MakeBidTransactionData, User } from '../types';

export const makeBidTransaction = async (data: MakeBidTransactionData) => {
    const itemRef = doc(db, 'Items', data.refToItem);
    const fromUserRef = doc(db, 'Users', data.fromUser);
    const toUserRef = doc(db, 'Users', data.toUser);

    const [fromUserSnap, toUserSnap] = await Promise.all([
        getDoc(fromUserRef),
        getDoc(toUserRef),
    ]);
    const fromUserData = fromUserSnap.data() as User;
    const toUserData = toUserSnap.data() as User;

    await Promise.all([
        updateDoc(fromUserRef, {
            totalBids: fromUserData.totalBids - data.amount,
        }),
        updateDoc(toUserRef, { totalBids: toUserData.totalBids + data.amount }),
        updateDoc(itemRef, {
            isClaimAllowed: true,
        }),
    ]);

    return data;
};
