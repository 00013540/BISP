import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { Item, User, UserData } from '../types';

export const getUser = async (uid: string): Promise<UserData> => {
    const userRef = doc(db, 'Users', uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;

    const favoriteFeedsRequests = userData.favoriteFeeds.map(
        async (favoriteFeedRef) => {
            const favoriteFeedSnap = await getDoc(favoriteFeedRef);
            const favoriteFeedData = favoriteFeedSnap.data() as Item;

            return {
                uid: favoriteFeedSnap.id,
                title: favoriteFeedData.title,
                description: favoriteFeedData.description,
                photo: favoriteFeedData.photo,
                status: favoriteFeedData.status,
                address: favoriteFeedData.address,
            };
        }
    );

    const myFeedsRequests = userData.myFeeds.map(async (myFeedRef) => {
        const myFeedSnap = await getDoc(myFeedRef);
        const myFeedData = myFeedSnap.data() as Item;

        return {
            uid: myFeedSnap.id,
            title: myFeedData.title,
            description: myFeedData.description,
            photo: myFeedData.photo,
            status: myFeedData.status,
            address: myFeedData.address,
        };
    });

    const myBidsRequests = userData.myBids.map(async (myBidRef) => {
        const myBidSnap = await getDoc(myBidRef);
        const myBidData = myBidSnap.data() as Item;

        return {
            uid: myBidSnap.id,
            title: myBidData.title,
            description: myBidData.description,
            photo: myBidData.photo,
            status: myBidData.status,
            address: myBidData.address,
        };
    });

    const favoriteFeedsParsed = await Promise.all(favoriteFeedsRequests);
    const myFeedsParsed = await Promise.all(myFeedsRequests);
    const myBidsParsed = await Promise.all(myBidsRequests);

    return {
        uid,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        photo: userData.photo,
        totalBids: userData.totalBids,
        favoriteFeeds: favoriteFeedsParsed,
        myFeeds: myFeedsParsed,
        myBids: myBidsParsed,
    };
};
