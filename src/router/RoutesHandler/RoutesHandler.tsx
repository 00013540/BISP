import { ReactNode, ReactElement, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { authRoutes } from '@/router/auth.ts';
import { dashboardRoutes } from '@/router/dashboard.ts';
import { BaseRoute } from '@/router/router.types.ts';
import { AuthLayout } from '@/layouts/AuthLayout';
import { EmptyLayout } from '@/layouts/EmptyLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';

const Page404 = lazy(() => import('@/pages/error/Page404/Page404'));

const renderRoutes = (layout: ReactNode, routes: BaseRoute[]) => {
  const renderedRoutes = new Array<ReactElement>();
  routes.forEach((route) => {
    if (route.children?.length) {
      route.children.forEach((nestedRoute) => {
        const Component = nestedRoute.component;
        if (Component) {
          renderedRoutes.push(
            <Route
              path={nestedRoute.path}
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        }
      });
    } else {
      const Component = route.component;
      if (Component) {
        renderedRoutes.push(
          <Route
            path={route.path}
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Component />
              </Suspense>
            }
          />
        );
      }
    }
  });

  return <Route element={layout}>{...renderedRoutes}</Route>;
};

const RoutesHandler = () => {
  return (
    <Routes>
      {renderRoutes(<DashboardLayout />, dashboardRoutes)}
      {renderRoutes(<AuthLayout />, authRoutes)}
      <Route element={<EmptyLayout />}>
        <Route
          path="/404"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Page404 />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default RoutesHandler;
