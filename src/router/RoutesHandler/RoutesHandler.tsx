import { Routes, Route } from 'react-router';

import { dashboardRoutes } from '@/router/dashboard.ts';
import { DashboardLayout } from '@/layouts/DashboardLayout';

const RoutesHandler = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {dashboardRoutes.map((route) => {
          const Component = route.component;
          if (!Component) return null;
          return <Route path={route.path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
};

export default RoutesHandler;
