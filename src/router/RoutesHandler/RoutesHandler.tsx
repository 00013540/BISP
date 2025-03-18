import { ReactNode, ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import { dashboardRoutes } from '@/router/dashboard.ts';
import { authRoutes } from '@/router/auth.ts';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { BaseRoute } from '@/router/router.types.ts';

const renderRoutes = (Layout: ReactNode, routes: BaseRoute[]) => {
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

  return <Route element={Layout}>{...renderedRoutes}</Route>;
};

const RoutesHandler = () => {
  return (
    <Routes>
      {renderRoutes(<DashboardLayout />, dashboardRoutes)}
      {renderRoutes(<DashboardLayout />, authRoutes)}
    </Routes>
  );
};

export default RoutesHandler;
