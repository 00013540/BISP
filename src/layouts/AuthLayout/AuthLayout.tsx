import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <h1>This is Auth layout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
