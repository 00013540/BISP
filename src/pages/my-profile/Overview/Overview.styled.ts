import { Box, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.white,
    minHeight: 'calc(100vh - 2rem)',
    padding: '1rem',
    borderRadius: '1rem',

    [theme.breakpoints.down('lg')]: {
        minHeight: 'calc(100vh - 3rem - 78px)',
    },

    [theme.breakpoints.down('sm')]: {
        minHeight: 'calc(100vh - 1rem - 66px)',
    },
}));

export const WrapperLoaderStyled = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 4rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
        minHeight: 'calc(100vh - 5rem - 78px)',
    },

    [theme.breakpoints.down('sm')]: {
        minHeight: 'calc(100vh - 3rem - 66px)',
    },
}));

export const ImageStyled = styled('img')(() => ({
    width: '100%',
    height: '100%',
    minHeight: '200px',
    maxHeight: '350px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '1rem',
}));
