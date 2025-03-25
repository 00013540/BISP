import { Box, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(() => ({}));

export const ContentWrapperStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.white,
    borderRadius: '1rem',
    padding: '1.5rem 1.875rem',
    boxShadow: 'rgba(0, 192, 174, 0.14) 2px 4px 18px 0px',
}));
