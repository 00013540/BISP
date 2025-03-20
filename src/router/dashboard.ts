import { lazy } from 'react';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const HomeOverview = lazy(() => import('@/pages/home/Overview/Overview.tsx'));
const ItemsOverview = lazy(() => import('@/pages/items/Overview/Overview.tsx'));

const { HOME, ITEMS } = routes;

const homeRoute: BaseRoute = {
    id: HOME.id,
    path: HOME.path,
    component: HomeOverview,
};

const itemsRoute: BaseRoute = {
    id: ITEMS.id,
    path: ITEMS.path,
    component: ItemsOverview,
};

export const dashboardRoutes = [homeRoute, itemsRoute];
