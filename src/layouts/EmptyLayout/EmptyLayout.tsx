import { Outlet } from 'react-router';

const EmptyLayout = () => {
  return (
    <div>
      <h1>This is Empty Layout</h1>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
