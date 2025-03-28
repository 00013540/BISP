import { Box, styled } from '@mui/material';

import { SIDEBAR_WIDTH, HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '@/theme';

export const LayoutContentContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    marginLeft: `${SIDEBAR_WIDTH}px`,
    marginRight: 0,

    [theme.breakpoints.down('lg')]: {
        marginLeft: 0,
        marginRight: 0,
        paddingTop: `calc(${HEADER_HEIGHT}px + 24px)`,
        paddingBottom: '24px',
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
    },

    [theme.breakpoints.down('sm')]: {
        paddingTop: `calc(${HEADER_HEIGHT_MOBILE}px + 8px)`,
        paddingBottom: '8px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));
