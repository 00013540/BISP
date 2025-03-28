import admin from 'firebase-admin';
import { getStorage } from 'firebase-admin/storage';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'bisp-1f0c4.firebasestorage.app',
});

export const db = admin.firestore();
export const auth = admin.auth();
export const bucket = getStorage().bucket();
