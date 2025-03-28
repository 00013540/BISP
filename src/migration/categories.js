import { db } from './firebase.js';
import { CATEGORIES } from './constants.js';

export const createCategories = async () => {
    try {
        const categoriesRef = db.collection('Categories');
        const batchAdd = db.batch();

        CATEGORIES.forEach((category) => {
            const docRef = categoriesRef.doc();
            batchAdd.set(docRef, category);
        });

        await batchAdd.commit();
        console.log('New categories added.');
    } catch (err) {
        console.error('Error adding categories: ', err);
    }
};
