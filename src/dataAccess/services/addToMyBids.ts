import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { AddToMyBidsData, User } from '../types';

export const addToMyBids = async (myBidsData: AddToMyBidsData) => {
    const userRef = doc(db, 'Users', myBidsData.refToUserUid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;

    const doesItemAlreadyExists = !!userData.myBids?.find(
        (feed) => (feed as unknown as string) === myBidsData.refToItem
    );

    if (!doesItemAlreadyExists) {
        const myBids = [...userData.myBids, myBidsData.refToItem];
        const updatedItem = {
            myBids,
        };
        await updateDoc(userRef, { ...updatedItem });
    }

    return myBidsData;
};
