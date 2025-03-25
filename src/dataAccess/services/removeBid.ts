import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { RemoveBidData, Item } from '../types';

export const removeBid = async (participantData: RemoveBidData) => {
    const itemRef = doc(db, 'Items', participantData.itemUid);
    const itemSnap = await getDoc(itemRef);
    const itemData = itemSnap.data() as Item;

    const filteredBids = itemData.participants.filter(
        (participant) =>
            participant.refToUserUid !== participantData.refToUserUid
    );

    const updatedItem = {
        participants: filteredBids,
    };
    await updateDoc(itemRef, { ...updatedItem });

    return participantData;
};
