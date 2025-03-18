import { NavLink } from 'react-router';

import { doSignOut } from '@/firebase/auth.ts';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/auth/sign-in">Sign in</NavLink>
        <NavLink to="/auth/sign-up">Sign up</NavLink>
        <button onClick={doSignOut}>Log out</button>
      </div>
      <RoutesHandler />
    </div>
  );
}

export default App;
