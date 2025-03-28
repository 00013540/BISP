import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { RemoveFromMyBidsData, User } from '../types';

export const removeFromMyBids = async (myBidsData: RemoveFromMyBidsData) => {
    const userRef = doc(db, 'Users', myBidsData.refToUserUid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;
    const myBids = userData.myBids.filter(
        (feed) => (feed as unknown as string) !== myBidsData.refToItem
    );

    const updatedItem = {
        myBids,
    };
    await updateDoc(userRef, { ...updatedItem });

    return myBidsData;
};
