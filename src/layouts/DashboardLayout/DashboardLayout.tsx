import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div>
      <h1>This is Dashboard layout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
