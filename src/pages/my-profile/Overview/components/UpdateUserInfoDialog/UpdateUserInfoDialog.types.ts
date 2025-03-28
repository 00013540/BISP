import { UpdateUserData } from '@/dataAccess/types';

export interface UpdateUserInfoDialogProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    updateData: UpdateUserData;
}
