import { Item as IItem, IParticipant, ItemStatus, ItemType } from '../types';
import { FieldValue } from 'firebase/firestore';

export class ItemConstructor {
    title: string;
    description: string;
    photo: string;
    category: string;
    ownerUid: string;
    status: ItemStatus;
    participants: IParticipant[];
    address: string;
    releasedAt: FieldValue;
    duration: number;
    type: ItemType;

    constructor(userData: IItem) {
        this.title = userData.title;
        this.description = userData.description;
        this.photo = userData.photo;
        this.category = userData.category;
        this.ownerUid = userData.ownerUid;
        this.status = userData.status;
        this.participants = userData.participants;
        this.address = userData.address;
        this.releasedAt = userData.releasedAt;
        this.duration = userData.duration;
        this.type = userData.type;
    }
}
