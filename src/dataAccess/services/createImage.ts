import { FirebaseError } from 'firebase/app';
import {
    ref,
    getStorage,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export const createImage = async (
    image: File
): Promise<{ url: string; path: string }> => {
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
