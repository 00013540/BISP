import { Box, styled } from '@mui/material';

export const PageWrapperStyled = styled(Box)(() => ({
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
}));

export const PageBoxStyled = styled(Box)(({ theme }) => ({
    padding: theme.spacing(15),
    backgroundColor: theme.palette.white,
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '27rem',
    textAlign: 'center',
}));

export const ButtonStyled = styled('button')(({ theme }) => ({
    width: '100%',
    height: '2.375rem',
    border: 'none',
    borderRadius: '0.25rem',
    backgroundColor: '#C4C5C5',
    color: theme.palette.white,
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
