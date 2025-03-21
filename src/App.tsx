import { ThemeProvider, CssBaseline } from '@mui/material';

import { generateTheme } from '@/theme';
import GlobalScrollbarStyles from '@/theme/scrollbar';
import RoutesHandler from '@/router/RoutesHandler/RoutesHandler.tsx';

function App() {
    const currentTheme = generateTheme();

    return (
        <ThemeProvider theme={currentTheme}>
            <RoutesHandler />
            <CssBaseline />
            <GlobalScrollbarStyles />
        </ThemeProvider>
    );
}

export default App;
