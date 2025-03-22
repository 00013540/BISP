import { lazy } from 'react';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const SignIn = lazy(() => import('@/pages/auth/SignIn/SignIn.tsx'));
const SignUp = lazy(() => import('@/pages/auth/SignUp/SignUp.tsx'));
const ResetPassword = lazy(
    () => import('@/pages/auth/ResetPassword/ResetPassword.tsx')
);

const { AUTH, SIGN_IN, SIGN_UP, RESET_PASSWORD } = routes;

const authRoute: BaseRoute = {
    id: AUTH.id,
    path: AUTH.path,
    children: [
        {
            id: SIGN_IN.id,
            path: SIGN_IN.path,
            component: SignIn,
        },
        {
            id: SIGN_UP.id,
            path: SIGN_UP.path,
            component: SignUp,
        },
        {
            id: RESET_PASSWORD.id,
            path: RESET_PASSWORD.path,
            component: ResetPassword,
        },
    ],
};

export const authRoutes = [authRoute];
