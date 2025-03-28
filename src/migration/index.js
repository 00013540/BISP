import { createCategories } from './categories.js';
import { createUsers } from './users.js';
import { createItems } from './items.js';

const createDatabase = async () => {
    try {
        await createCategories();
        const users = await createUsers();
        await createItems(users);
    } catch (err) {
        console.log('Error happened in migration: ', err);
    }
};

await createDatabase();
