export interface DeleteFeedDialogProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    deleteData: {
        uid: string;
        imageStoragePath: string;
    };
}
