import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase';

import { ControlTransactionData } from '../types';

export const controlTransaction = async (data: ControlTransactionData) => {
    const itemRef = doc(db, 'Items', data.refToItem);

    await updateDoc(itemRef, {
        isTransactionAllowed: data.isTransactionAllowed,
    });

    return data;
};
