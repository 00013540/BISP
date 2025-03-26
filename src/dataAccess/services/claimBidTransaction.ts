import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { AddToFavoriteData, User } from '../types';

export const addToFavorite = async (favoriteFeedData: AddToFavoriteData) => {
    const userRef = doc(db, 'Users', favoriteFeedData.refToUserUid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;
    const favoriteFeeds = [
        ...userData.favoriteFeeds,
        favoriteFeedData.refToItem,
    ];

    const updatedItem = {
        favoriteFeeds,
    };
    await updateDoc(userRef, { ...updatedItem });

    return favoriteFeedData;
};
