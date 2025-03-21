import { User as IUser } from '../types';
import { DocumentReference } from 'firebase/firestore';

export class UserConstructor {
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

    constructor(userData: Partial<IUser>) {
        this.uid = userData.uid || '';
        this.email = userData.email || '';
        this.firstName = userData.firstName || '';
        this.lastName = userData.lastName || '';
        this.phoneNumber = userData.phoneNumber || '';
        this.photo = userData.photo || '';
        this.totalBids = userData.totalBids || 20;
        this.favoriteFeeds = userData.favoriteFeeds || [];
        this.myFeeds = userData.myFeeds || [];
        this.myBids = userData.myBids || [];
    }
}
