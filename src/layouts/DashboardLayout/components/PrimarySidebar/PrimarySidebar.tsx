import type { FC } from 'react';
import { Fragment, useCallback, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router';
import { Collapse, Typography, Box, Button } from '@mui/material';

import { RawRoute } from '@/router/router.types.ts';
import { dashboardRoutes } from '@/router/dashboard';
import { useUser } from '@/context/user-context';
import { BrandLogo } from '@/components/common';
import { useIsTabletOrMobile } from '@/hooks';

import type { PrimarySidebarProps } from './PrimarySidebar.types';
import { PrimarySidebarButton } from '../PrimarySidebarButton';
import { ensureTrailingSlash } from '../../DashboardLayout.utils';
import {
    PrimarySidebarContainer,
    PrimarySidebarMenuWrapper,
    PrimarySidebarHeaderWrapper,
    TotalBalanceWrapperStyled,
} from './PrimarySidebar.styled';

let IS_INITIAL_LOAD = true;

const PrimarySidebar: FC<PrimarySidebarProps> = ({ isOpen, closeSidebars }) => {
    const { pathname } = useLocation();
    const isTabletOrMobileView = useIsTabletOrMobile();
    const { loading: isUserLoading, currentUser, refetch } = useUser();

    const [activeRouteId, setActiveRouteId] = useState('/');
    const [nestedActiveRouteId, setNestedActiveRouteId] = useState('');
    const [activeCollapseId, setActiveCollapseId] = useState('');

    const updateActiveCollapseId = useCallback(
        (id: string) => {
            if (activeCollapseId === id) setActiveCollapseId('');
            else setActiveCollapseId(id);
        },
        [activeCollapseId]
    );

    const isActiveRoute = useCallback(
        (route: RawRoute) => {
            return route.id === activeRouteId;
        },
        [activeRouteId]
    );

    const isNestedActiveRoute = useCallback(
        (route: RawRoute) => {
            return route.id === nestedActiveRouteId;
        },
        [nestedActiveRouteId]
    );

    const updateActivePath = useCallback(() => {
        const activeRoute = dashboardRoutes.find((route) => {
            // We shouldn't use the 'indexOf' method with the root route
            // because it would always match with the 'pathname' and no further routes would be checked.
            //
            // The 'pathname' of all routes contains the portion of the path that the root route has, so the
            // root route would always be selected.
            if (route.path === '/')
                return (
                    ensureTrailingSlash(`${route.path}`) ===
                    ensureTrailingSlash(pathname)
                );

            // But it is safe to use this method for all other paths
            return (
                ensureTrailingSlash(pathname).indexOf(
                    ensureTrailingSlash(`${route.path}`)
                ) === 0
            );
        });

        if (activeRoute) setActiveRouteId(activeRoute.id);

        if (activeRoute?.children) {
            const nestedRoute = activeRoute.children.find(
                (nestedRoute) =>
                    ensureTrailingSlash(`${nestedRoute.path}`) ===
                    ensureTrailingSlash(pathname)
            );

            setNestedActiveRouteId(nestedRoute ? nestedRoute.id : '');

            if (nestedRoute?.path && IS_INITIAL_LOAD) {
                setActiveCollapseId(activeRoute.id);
                IS_INITIAL_LOAD = false;
            }
        } else {
            setNestedActiveRouteId('');
        }
    }, [pathname]);

    useEffect(() => {
        updateActivePath();
    }, [pathname, updateActivePath]);

    // The SidebarContainer is set as always visible above 'lg' breakpoint
    return (
        <PrimarySidebarContainer className="tourSidebar" isOpen={isOpen}>
            {!isTabletOrMobileView && (
                <PrimarySidebarHeaderWrapper>
                    <Link to="/">
                        <BrandLogo />
                    </Link>
                </PrimarySidebarHeaderWrapper>
            )}
            <PrimarySidebarMenuWrapper>
                <Box>
                    {dashboardRoutes.map((route) =>
                        route.hideInSidebar ? null : (
                            <Fragment key={route.id}>
                                {route.children?.length ? (
                                    <>
                                        <PrimarySidebarButton
                                            collapsable
                                            isCollapseOpen={
                                                activeCollapseId === route.id
                                            }
                                            id={route.id}
                                            key={`sidebar_category_${route.id}`}
                                            name={route.title}
                                            className={`${isActiveRoute(route) && 'active'} isParentRoute`}
                                            icon={route.icon}
                                            updateActiveCollapseId={
                                                updateActiveCollapseId
                                            }
                                        />
                                        <Collapse
                                            in={activeCollapseId === route.id}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            {route.children.map(
                                                (nestedRoute) =>
                                                    nestedRoute.hideInSidebar ? null : (
                                                        <PrimarySidebarButton
                                                            id={nestedRoute.id}
                                                            key={`sidebar_link_${nestedRoute.id}`}
                                                            name={route.title}
                                                            to={`${nestedRoute.path}`}
                                                            className={`${isNestedActiveRoute(nestedRoute) && 'active'} isNestedRoute`}
                                                            closeSidebars={
                                                                closeSidebars
                                                            }
                                                        />
                                                    )
                                            )}
                                        </Collapse>
                                    </>
                                ) : (
                                    <PrimarySidebarButton
                                        id={route.id}
                                        key={`sidebar_category_${route.id}`}
                                        name={route.title}
                                        to={`${route.path}`}
                                        icon={route.icon}
                                        className={`${isActiveRoute(route) && 'active'}`}
                                        closeSidebars={closeSidebars}
                                        updateActiveCollapseId={
                                            updateActiveCollapseId
                                        }
                                    />
                                )}
                            </Fragment>
                        )
                    )}
                </Box>
                <Box padding={4} display="flex" justifyContent="center">
                    <TotalBalanceWrapperStyled>
                        <Typography variant="body1">Total bids:</Typography>
                        <Typography variant="h4" color="text.highlight" mb={2}>
                            {currentUser?.totalBids || 0}
                        </Typography>
                        <Button
                            loading={isUserLoading}
                            size="medium"
                            onClick={refetch}
                        >
                            Update
                        </Button>
                    </TotalBalanceWrapperStyled>
                </Box>
            </PrimarySidebarMenuWrapper>
        </PrimarySidebarContainer>
    );
};

export default PrimarySidebar;
