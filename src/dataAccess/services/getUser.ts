import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { Item, User, UserData } from '../types';

export const getUser = async (uid: string): Promise<UserData> => {
    const userRef = doc(db, 'Users', uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;

    const favoriteFeedsRequests = userData.favoriteFeeds.map(
        async (favoriteFeedRef) => {
            const itemRef = doc(
                db,
                'Items',
                favoriteFeedRef as unknown as string
            );
            const favoriteFeedSnap = await getDoc(itemRef);
            const favoriteFeedData = favoriteFeedSnap.data() as Item;

            return {
                uid: favoriteFeedSnap.id,
                title: favoriteFeedData.title,
                description: favoriteFeedData.description,
                image: favoriteFeedData.image,
                imageStoragePath: favoriteFeedData.imageStoragePath,
                status: favoriteFeedData.status,
                address: favoriteFeedData.address,
            };
        }
    );

    const myBidsRequests = userData.myBids.map(async (myBidRef) => {
        const itemRef = doc(db, 'Items', myBidRef as unknown as string);
        const myBidSnap = await getDoc(itemRef);
        const myBidData = myBidSnap.data() as Item;

        return {
            uid: myBidSnap.id,
            title: myBidData.title,
            description: myBidData.description,
            image: myBidData.image,
            imageStoragePath: myBidData.imageStoragePath,
            status: myBidData.status,
            address: myBidData.address,
        };
    });

    const favoriteFeedsParsed = await Promise.all(favoriteFeedsRequests);
    const myBidsParsed = await Promise.all(myBidsRequests);

    return {
        uid,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        image: userData.image,
        imageStoragePath: userData.imageStoragePath,
        totalBids: userData.totalBids,
        favoriteFeeds: favoriteFeedsParsed,
        myBids: myBidsParsed,
    };
};
