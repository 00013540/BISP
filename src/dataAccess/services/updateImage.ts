import { FirebaseError } from 'firebase/app';
import {
    ref,
    getStorage,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const handleDelete = async (imagePath: string) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    try {
        await deleteObject(imageRef);
    } catch (error) {
        console.error('Error deleting image:', error);
    }
};

export const updateImage = async ({
    image,
    imagePath,
}: {
    image: File;
    imagePath: string;
}): Promise<{ url: string; path: string }> => {
    await handleDelete(imagePath);

    const storage = getStorage();
    const uniqueName = `${Date.now()}-${uuidv4()}-${image.name}`;
    const filePath = `uploads/${uniqueName}`;
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, image);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            null,
            (error) => reject(new FirebaseError(error.code, error.message)),
            async () => {
                const downloadURL = await getDownloadURL(
                    uploadTask.snapshot.ref
                );
                resolve({ url: downloadURL, path: filePath });
            }
        );
    });
};
