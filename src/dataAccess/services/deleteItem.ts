import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase';

export const deleteItem = async (uid: string) => {
    const itemRef = doc(db, 'Items', uid);
    await deleteDoc(itemRef);

    return null;
};
