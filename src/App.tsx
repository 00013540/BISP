import { NavLink } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { generateTheme } from '@/theme';
import { doSignOut } from '@/firebase/auth.ts';
import GlobalScrollbarStyles from '@/theme/scrollbar';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
  const currentTheme = generateTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/auth/sign-in">Sign in</NavLink>
        <NavLink to="/auth/sign-up">Sign up</NavLink>
        <button onClick={doSignOut}>Log out</button>
      </div>
      <RoutesHandler />
      <CssBaseline />
      <GlobalScrollbarStyles />
    </ThemeProvider>
  );
}

export default App;
