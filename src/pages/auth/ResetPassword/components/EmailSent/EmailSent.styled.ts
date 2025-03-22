import { styled, Button } from '@mui/material';

export const ButtonStyled = styled(Button)(({ theme }) => ({
    marginTop: '2.5rem',
    marginBottom: '0.625rem',

    [theme.breakpoints.down('sm')]: {
        marginTop: '1.5rem',
    },
}));
