import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { RemoveFromFavoriteData, User } from '../types';

export const removeFromFavorite = async (
    favoriteFeedData: RemoveFromFavoriteData
) => {
    const userRef = doc(db, 'Users', favoriteFeedData.refToUserUid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;
    const favoriteFeeds = userData.favoriteFeeds.filter(
        (feed) => (feed as unknown as string) !== favoriteFeedData.refToItem
    );

    const updatedItem = {
        favoriteFeeds,
    };
    await updateDoc(userRef, { ...updatedItem });

    return favoriteFeedData;
};
