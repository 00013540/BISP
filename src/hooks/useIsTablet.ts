import { useTheme, useMediaQuery } from '@mui/material';

export const useIsTablet = () => {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.between('sm', 'lg'));
};
