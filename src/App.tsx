import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { generateTheme } from '@/theme';
import { queryClient } from '@/dataAccess/reactQuery';
import GlobalScrollbarStyles from '@/theme/scrollbar';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
    const currentTheme = generateTheme();

    return (
        <ThemeProvider theme={currentTheme}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <RoutesHandler />
            </QueryClientProvider>
            <CssBaseline />
            <GlobalScrollbarStyles />
        </ThemeProvider>
    );
}

export default App;
