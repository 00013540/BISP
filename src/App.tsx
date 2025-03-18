import { NavLink } from 'react-router';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <NavLink to="/auth/sign-in">Items</NavLink>
      <NavLink to="/auth/sign-up">Items</NavLink>
      <RoutesHandler />
    </div>
  );
}

export default App;
