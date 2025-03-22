import { lazy } from 'react';

import { MarketplaceSVG, PortfolioSVG, LogoutSVG } from '@/components/icons';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const HomeOverview = lazy(() => import('@/pages/home/Overview/Overview.tsx'));
const MyFeedsOverview = lazy(
    () => import('@/pages/my-feeds/Overview/Overview.tsx')
);

const { HOME, MY_FEEDS, LOGOUT } = routes;

const homeRoute: BaseRoute = {
    id: HOME.id,
    path: HOME.path,
    title: HOME.title,
    icon: MarketplaceSVG,
    component: HomeOverview,
};

const myFeedsRoute: BaseRoute = {
    id: MY_FEEDS.id,
    path: MY_FEEDS.path,
    title: MY_FEEDS.title,
    icon: PortfolioSVG,
    component: MyFeedsOverview,
};

const logOutRoute: BaseRoute = {
    id: LOGOUT.id,
    path: LOGOUT.path,
    title: LOGOUT.title,
    icon: LogoutSVG,
};

export const dashboardRoutes = [homeRoute, myFeedsRoute, logOutRoute];
