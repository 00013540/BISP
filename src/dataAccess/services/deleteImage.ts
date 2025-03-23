import { deleteObject, getStorage, ref } from 'firebase/storage';

export const deleteImage = async (imagePath: string) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);

    return null;
};
