export interface CustomCardProps {
    uid: string;
    title: string;
    description: string;
    address: string;
    image: string;
    status: string;
    imageStoragePath: string;
    onDelete?: (uid: string, imageStoragePath: string) => void;
    onUpdate?: (uid: string) => void;
    onActivate?: (uid: string) => void;
}
