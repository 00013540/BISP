import { UpdateItemData, ItemType } from '@/dataAccess/types';

export interface CustomCardProps {
    uid: string;
    title: string;
    description: string;
    address: string;
    image: string;
    status: string;
    type: ItemType;
    imageStoragePath: string;
    category: string;
    ownerUid: string;
    ownerPhone: string;
    hasActions?: boolean;
    onDelete?: (uid: string, imageStoragePath: string) => void;
    onUpdate?: (data: UpdateItemData) => void;
    onActivate?: (data: { uid: string }) => void;
}
