import { NavLink } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { generateTheme } from '@/theme';
import { doSignOut } from '@/firebase/auth.ts';
import { queryClient } from '@/dataAccess/reactQuery';
import GlobalScrollbarStyles from '@/theme/scrollbar';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
  const currentTheme = generateTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/items">Items</NavLink>
          <NavLink to="/auth/sign-in">Sign in</NavLink>
          <NavLink to="/auth/sign-up">Sign up</NavLink>
          <button onClick={doSignOut}>Log out</button>
        </div>
        <RoutesHandler />
      </QueryClientProvider>
      <CssBaseline />
      <GlobalScrollbarStyles />
    </ThemeProvider>
  );
}

export default App;
