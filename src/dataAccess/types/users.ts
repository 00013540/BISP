import { DocumentReference } from 'firebase/firestore';
import { ItemStatus } from './items.ts';

interface ItemData {
    uid: string;
    title: string;
    description: string;
    image: string;
    imageStoragePath: string;
    status: ItemStatus;
    address: string;
}

export interface User {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    image: string;
    imageStoragePath: string;
    totalBids: number;
    favoriteFeeds: DocumentReference[];
    myBids: DocumentReference[];
}

export interface UserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    image: string;
    imageStoragePath: string;
    totalBids: number;
    favoriteFeeds: ItemData[];
    myBids: ItemData[];
}

export interface CreateUserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface ControlTransactionData {
    refToItem: string;
    isTransactionAllowed: boolean;
}

export interface MakeBidTransactionData {
    refToItem: string;
    fromUser: string;
    toUser: string;
    amount: number;
}

export interface ClaimBidTransactionData {
    refToItem: string;
}
