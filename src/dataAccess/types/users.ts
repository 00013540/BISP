export interface User {
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
}

export interface CreateUserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
