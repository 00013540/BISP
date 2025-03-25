import { styled, Box } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 2rem)',
    borderRadius: '1rem',
    padding: '1.5rem',
    backgroundColor: theme.palette.white,

    [theme.breakpoints.down('sm')]: {
        padding: '1rem',
    },
}));

export const ImageStyled = styled('img')(() => ({
    maxHeight: '500px',
    minHeight: '250px',
    height: '100%',
    width: '100%',
    borderRadius: '0.5rem',
    backgroundSize: 'cover',
    objectFit: 'cover',
}));
