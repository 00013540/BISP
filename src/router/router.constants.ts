export const routes = {
    HOME: {
        id: 'home',
        path: '/',
        title: 'Feeds',
    },
    FEED: {
        id: 'feed',
        path: '/feed/:feedAddress',
    },
    MY_FEEDS: {
        id: 'my_feeds',
        path: '/my-feeds',
        title: 'My Feeds',
    },
    MY_FAVORITES: {
        id: 'my_favorites',
        path: '/my-favorites',
        title: 'My Favorites',
    },
    MY_PROFILE: {
        id: 'my_profile',
        path: '/my-profile',
        title: 'My Profile',
    },
    LOGOUT: {
        id: 'logout',
        path: '/auth/sign-in',
        title: 'Logout',
    },
    AUTH: {
        id: 'auth',
        path: '/auth',
    },
    SIGN_IN: {
        id: 'auth_sign_in',
        path: '/auth/sign-in',
    },
    SIGN_UP: {
        id: 'auth_sign_up',
        path: '/auth/sign-up',
    },
    RESET_PASSWORD: {
        id: 'auth_reset_password',
        path: '/auth/reset-password',
    },
};
