import { useTheme, useMediaQuery } from '@mui/material';

export const useIsDesktop = (breakpoint: 'lg' | 'xl' | 'xxl' = 'lg') => {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.up(breakpoint));
};
