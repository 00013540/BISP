import { UpdateItemData } from '@/dataAccess/types';

export interface UpdateFeedDialogProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    updateData: UpdateItemData;
}
