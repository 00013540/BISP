import { NavLink } from 'react-router';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <RoutesHandler />
    </div>
  );
}

export default App;
