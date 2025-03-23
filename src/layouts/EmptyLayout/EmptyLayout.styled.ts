import { Box, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.white,
}));
