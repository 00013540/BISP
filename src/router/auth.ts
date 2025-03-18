import { lazy } from 'react';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const SignIn = lazy(() => import('@/pages/auth/SignIn/SignIn.tsx'));
const SignUp = lazy(() => import('@/pages/auth/SignUp/SignUp.tsx'));

const { AUTH, SIGN_IN, SIGN_UP } = routes;

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
  ],
};

export const authRoutes = [authRoute];
