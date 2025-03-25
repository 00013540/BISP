import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { AddBidData, Item } from '../types';

export const addBid = async (participantData: AddBidData) => {
    const itemRef = doc(db, 'Items', participantData.itemUid);
    const itemSnap = await getDoc(itemRef);
    const itemData = itemSnap.data() as Item;

    const filteredBids = itemData.participants.filter(
        (participant) =>
            participant.refToUserUid !== participantData.refToUserUid
    );
    const allNewBids = [
        ...filteredBids,
        {
            refToUserUid: participantData.refToUserUid,
            placedBid: participantData.placedBid,
        },
    ];

    const updatedItem = {
        participants: allNewBids,
    };
    await updateDoc(itemRef, { ...updatedItem });

    return participantData;
};
