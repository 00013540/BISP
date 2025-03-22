export interface EmailSentProps {
    title?: string;
    description?: string;
    buttonText?: string;
    footer?: string;
    onClick: () => void;
    isLoading?: boolean;
}
