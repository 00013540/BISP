import { Item as IItem, IParticipant, ItemStatus, ItemType } from '../types';
import { FieldValue } from 'firebase/firestore';

export class ItemConstructor {
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
    releasedAt: FieldValue;
    duration: number;
    type: ItemType;
    isClaimAllowed: boolean;
    isTransactionAllowed: boolean;

    constructor(userData: IItem) {
        this.title = userData.title;
        this.description = userData.description;
        this.image = userData.image;
        this.imageStoragePath = userData.imageStoragePath;
        this.category = userData.category;
        this.ownerUid = userData.ownerUid;
        this.ownerPhone = userData.ownerPhone;
        this.status = userData.status;
        this.participants = userData.participants;
        this.address = userData.address;
        this.releasedAt = userData.releasedAt;
        this.duration = userData.duration;
        this.type = userData.type;
        this.isClaimAllowed = userData.isClaimAllowed;
        this.isTransactionAllowed = userData.isTransactionAllowed;
    }
}
