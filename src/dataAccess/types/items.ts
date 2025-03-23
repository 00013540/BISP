import { FieldValue } from 'firebase/firestore';

interface UserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    image: string;
    imageStoragePath: string;
}

interface ParticipantData {
    user: UserData;
    placedBid: number;
}

export enum ItemType {
    FIRST_BID = 'FIRST_BID',
    AUCTION = 'AUCTION',
}

export enum ItemStatus {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    CLAIMED = 'CLAIMED',
    CLOSED = 'CLOSED',
    DELETED = 'DELETED',
}

export interface IParticipant {
    refToUserUid: string;
    placedBid: number;
}

export interface Item {
    title: string;
    description: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
    status: ItemStatus;
    participants: IParticipant[];
    address: string;
    releasedAt: FieldValue;
    duration: number;
    type: ItemType;
}

export interface ItemData {
    uid: string;
    title: string;
    description: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
    status: ItemStatus;
    participants: ParticipantData[] | IParticipant[];
    address: string;
    releasedAt: FieldValue;
    duration: number;
    type: ItemType;
}

export interface CreateItemData {
    title: string;
    description: string;
    address: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
}
