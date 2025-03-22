import { lazy } from 'react';

import { OverviewSVG, LogoutSVG } from '@/components/icons';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const HomeOverview = lazy(() => import('@/pages/home/Overview/Overview.tsx'));

const { HOME, LOGOUT } = routes;

const homeRoute: BaseRoute = {
    id: HOME.id,
    path: HOME.path,
    title: HOME.title,
    icon: OverviewSVG,
    component: HomeOverview,
};

const logOutRoute: BaseRoute = {
    id: LOGOUT.id,
    path: LOGOUT.path,
    title: LOGOUT.title,
    icon: LogoutSVG,
};

export const dashboardRoutes = [homeRoute, logOutRoute];
