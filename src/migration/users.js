import { auth, db } from './firebase.js';
import { USERS } from './constants.js';

const addUsers = async (users) => {
    try {
        const usersRef = db.collection('Users');
        const batchAdd = db.batch();
        const newUsersList = [];

        users.forEach((user) => {
            const docRef = usersRef.doc(user.uid);

            const newUser = {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                totalBids: 20,
                image: '',
                imageStoragePath: '',
                favoriteFeeds: [],
                myBids: [],
            };

            newUsersList.push(newUser);
            batchAdd.set(docRef, newUser);
        });

        await batchAdd.commit();
        return newUsersList;
    } catch (err) {
        console.error('Error adding users: ', err);
    }
};

export const createUsers = async () => {
    try {
        const createUserRequests = USERS.map((user) => {
            return auth.createUser({
                email: user.email,
                password: user.password,
                emailVerified: true,
                disabled: false,
            });
        });

        const createdUsers = await Promise.all(createUserRequests);
        const createdUsersList = createdUsers.map((user, index) => ({
            uid: user.uid,
            firstName: USERS[index].firstName,
            lastName: USERS[index].lastName,
            email: USERS[index].email,
            phoneNumber: USERS[index].phoneNumber,
        }));

        const newUsers = await addUsers(createdUsersList);

        console.log('User created successfully');
        return newUsers;
    } catch (err) {
        console.error('Error creating users: ', err);
    }
};
