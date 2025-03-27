import { User as IUser } from '../types';
import { DocumentReference } from 'firebase/firestore';

export class UserConstructor {
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

    constructor(userData: Partial<IUser>) {
        this.uid = userData.uid || '';
        this.email = userData.email || '';
        this.firstName = userData.firstName || '';
        this.lastName = userData.lastName || '';
        this.phoneNumber = userData.phoneNumber || '';
        this.image = userData.image || '';
        this.imageStoragePath = userData.imageStoragePath || '';
        this.totalBids = userData.totalBids || 20;
        this.favoriteFeeds = userData.favoriteFeeds || [];
        this.myBids = userData.myBids || [];
    }
}
