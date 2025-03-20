import { useTheme, useMediaQuery } from '@mui/material';

export const useIsTabletOrMobile = () => {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.down('lg'));
};
