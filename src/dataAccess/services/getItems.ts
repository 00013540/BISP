import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

import { Item, ItemData } from '../types';

export const getItems = async (): Promise<ItemData[]> => {
    const itemsSnapshot = await getDocs(collection(db, 'Items'));

    const allItems = await Promise.all(
        itemsSnapshot.docs.map(async (itemSnap): Promise<ItemData> => {
            const itemData = itemSnap.data() as Item;

            const participantsReqs = itemData.participants.map(
                async (participant) => {
                    const participantRef = doc(
                        db,
                        'Users',
                        participant.refToUserUid
                    );
                    const participantSnap = await getDoc(participantRef);
                    const participantData = participantSnap.data();
                    return {
                        user: {
                            uid: participant.refToUserUid,
                            email: participantData?.email || '',
                            firstName: participantData?.firstName || '',
                            lastName: participantData?.lastName || '',
                            phoneNumber: participantData?.phoneNumber || '',
                            image: participantData?.image || '',
                            imageStoragePath:
                                participantData?.imageStoragePath || '',
                        },
                        placedBid: participant.placedBid,
                    };
                }
            );

            const parsedParticipants = await Promise.all(participantsReqs);

            return {
                uid: itemSnap.id,
                title: itemData.title,
                description: itemData.description,
                image: itemData.image,
                imageStoragePath: itemData.imageStoragePath,
                category: itemData.category,
                ownerUid: itemData.ownerUid,
                status: itemData.status,
                participants: parsedParticipants,
                address: itemData.address,
                releasedAt: itemData.releasedAt,
                duration: itemData.duration,
                type: itemData.type,
            };
        })
    );

    return allItems;
};
