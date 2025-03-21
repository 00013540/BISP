import { User as IUser } from '../types';

export class User {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo: string;
    totalBids: number;
    favoriteFeeds: string[];
    myFeeds: string[];
    myBids: string[];

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
