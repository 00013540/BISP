import { FieldValue, Timestamp } from 'firebase/firestore';

interface UserData {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    image: string;
    imageStoragePath: string;
}

export interface ParticipantData {
    user: UserData;
    placedBid: number;
}

export enum ItemType {
    FIRST_BID = 'FIRST_BID',
    AUCTION = 'AUCTION',
}

export enum ItemDuration {
    ONE = 1,
    THREE = 3,
    FIVE = 5,
}

export enum ItemStatus {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    CLAIMED = 'CLAIMED',
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
    ownerPhone: string;
    status: ItemStatus;
    participants: IParticipant[];
    address: string;
    releasedAt: FieldValue | Timestamp;
    duration: number;
    type: ItemType;
    isClaimAllowed: boolean;
}

export interface ItemData {
    uid: string;
    title: string;
    description: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
    ownerPhone: string;
    status: ItemStatus;
    participants: ParticipantData[] | IParticipant[];
    address: string;
    releasedAt: FieldValue | Timestamp;
    duration: number;
    type: ItemType;
    isClaimAllowed: boolean;
}

export interface CreateItemData {
    title: string;
    description: string;
    address: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
    ownerPhone: string;
}

export interface UpdateItemData {
    uid: string;
    title: string;
    description: string;
    address: string;
    image: string;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
}

export interface ActivateItemData {
    uid: string;
    duration: number;
    type: ItemType;
}

export interface GetItemParams {
    uid: string;
}

export interface AddBidData extends IParticipant {
    itemUid: string;
}

export interface RemoveBidData {
    itemUid: string;
    refToUserUid: string;
}

export interface AddToFavoriteData {
    refToUserUid: string;
    refToItem: string;
}

export interface RemoveFromFavoriteData {
    refToUserUid: string;
    refToItem: string;
}
