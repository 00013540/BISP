import { lazy } from 'react';

import { MarketplaceSVG, PortfolioSVG, LogoutSVG } from '@/components/icons';

import { BaseRoute } from './router.types.ts';
import { routes } from './router.constants.ts';

const HomeOverview = lazy(() => import('@/pages/home/Overview/Overview.tsx'));
const MyFeedOverview = lazy(() => import('@/pages/feed/Overview/Overview.tsx'));
const MyFeedsOverview = lazy(
    () => import('@/pages/my-feeds/Overview/Overview.tsx')
);
const MyFavoritesOverview = lazy(
    () => import('@/pages/my-favorites/Overview/Overview.tsx')
);

const { HOME, MY_FEEDS, MY_FAVORITES, LOGOUT, FEED } = routes;

const homeRoute: BaseRoute = {
    id: HOME.id,
    path: HOME.path,
    title: HOME.title,
    icon: MarketplaceSVG,
    component: HomeOverview,
};

const feedRoute: BaseRoute = {
    id: FEED.id,
    path: FEED.path,
    component: MyFeedOverview,
    hideInSidebar: true,
};

const myFeedsRoute: BaseRoute = {
    id: MY_FEEDS.id,
    path: MY_FEEDS.path,
    title: MY_FEEDS.title,
    icon: PortfolioSVG,
    component: MyFeedsOverview,
};

const myFavoritesRoute: BaseRoute = {
    id: MY_FAVORITES.id,
    path: MY_FAVORITES.path,
    title: MY_FAVORITES.title,
    icon: PortfolioSVG,
    component: MyFavoritesOverview,
};

const logOutRoute: BaseRoute = {
    id: LOGOUT.id,
    path: LOGOUT.path,
    title: LOGOUT.title,
    icon: LogoutSVG,
};

export const dashboardRoutes = [
    homeRoute,
    feedRoute,
    myFeedsRoute,
    myFavoritesRoute,
    logOutRoute,
];
