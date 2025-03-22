import { clearAndAddCategories } from './categories.js';

const createDatabase = async () => {
    await Promise.all([clearAndAddCategories()]);
};

createDatabase();
