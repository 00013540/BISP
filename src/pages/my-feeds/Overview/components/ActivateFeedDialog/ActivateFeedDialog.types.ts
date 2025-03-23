export interface ActivateFeedDialogProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    activateData: { uid: string };
}
