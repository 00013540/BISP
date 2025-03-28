import { FieldValue } from 'firebase-admin/firestore';
import { db } from './firebase.js';
import { ITEMS_FIRST_BID, ITEMS_AUCTION } from './constants.js';
import { uploadImage } from './image.js';

export const createItems = async (users) => {
    try {
        const itemsRef = db.collection('Items');
        const batchAdd = db.batch();

        const firstUserItems = [
            ...ITEMS_AUCTION.slice(0, 3),
            ...ITEMS_FIRST_BID.slice(0, 2),
        ].map((item) => ({ ...item, ownerUid: users[0].uid }));
        const secondUserItems = [
            ...ITEMS_AUCTION.slice(3, 6),
            ...ITEMS_FIRST_BID.slice(2, 4),
        ].map((item) => ({ ...item, ownerUid: users[1].uid }));
        const thirdUserItems = [
            ...ITEMS_AUCTION.slice(6, 9),
            ...ITEMS_FIRST_BID.slice(4, 6),
        ].map((item) => ({ ...item, ownerUid: users[2].uid }));
        const fourthUserItems = [
            ...ITEMS_AUCTION.slice(9, 12),
            ...ITEMS_FIRST_BID.slice(6, 8),
        ].map((item) => ({ ...item, ownerUid: users[3].uid }));
        const allItems = [
            ...firstUserItems,
            ...secondUserItems,
            ...thirdUserItems,
            ...fourthUserItems,
        ];

        const imageUploadRequests = allItems.map(() => uploadImage());
        const imageUploadResponses = await Promise.all(imageUploadRequests);

        allItems.forEach((item, index) => {
            const docRef = itemsRef.doc();

            const newItem = {
                ...item,
                image: imageUploadResponses[index].image,
                imageStoragePath: imageUploadResponses[index].imageStoragePath,
                releasedAt: FieldValue.serverTimestamp(),
            };

            batchAdd.set(docRef, newItem);
        });

        await batchAdd.commit();
        console.log('New items added.');
    } catch (err) {
        console.error('Error adding items: ', err);
    }
};
