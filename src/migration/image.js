import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { bucket } from './firebase.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadImage = async () => {
    try {
        const fileName = `${Date.now()}-${uuidv4()}-placeholder.jpg`;
        const filePath = path.resolve(__dirname, 'placeholder.jpg');
        const imageStoragePath = `uploads/${fileName}`;

        const file = bucket.file(imageStoragePath);
        await bucket.upload(filePath, {
            destination: imageStoragePath,
            metadata: {
                contentType: 'image/png',
            },
        });

        await file.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${imageStoragePath}`;

        return {
            image: publicUrl,
            imageStoragePath: imageStoragePath,
        };
    } catch (error) {
        console.error('Error uploading image: ', error);
        return null;
    }
};
