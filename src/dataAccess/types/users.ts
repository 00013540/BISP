import { DocumentReference } from 'firebase/firestore';
import { ItemStatus } from './items.ts';

interface ItemData {
    uid: string;
    title: string;
    description: string;
    photo: string;
    status: ItemStatus;
    address: string;
}

export interface User {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo: string;
    totalBids: number;
    favoriteFeeds: DocumentReference[];
    myFeeds: DocumentReference[];
    myBids: DocumentReference[];
}

export interface UserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo: string;
    totalBids: number;
    favoriteFeeds: ItemData[];
    myFeeds: ItemData[];
    myBids: ItemData[];
}

export interface CreateUserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
