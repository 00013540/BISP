import db from './firebase.js';

const categories = [
    'Bicycle',
    'Book',
    'Beauty products',
    'Clothes',
    'Furniture',
    'Musical instruments',
    'Electronic items',
    'Sports equipment',
    'Tools',
    'Other',
];

export async function clearAndAddCategories() {
    const categoriesRef = db.collection('Categories');

    // Step 1: Delete all existing documents
    const snapshot = await categoriesRef.get();
    const batchDelete = db.batch();

    snapshot.forEach((doc) => {
        batchDelete.delete(doc.ref);
    });

    // Step 2: Add new categories
    const batchAdd = db.batch();

    categories.forEach((category) => {
        const docRef = categoriesRef.doc(); // Auto-generate ID
        batchAdd.set(docRef, { name: category });
    });

    try {
        await batchDelete.commit();
        console.log('Existing categories deleted.');
        await batchAdd.commit();
        console.log('New categories added.');
    } catch (err) {
        console.error('Error adding categories: ', err);
    }
}
