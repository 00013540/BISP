import { styled, Box } from '@mui/material';

export const WrapperStyled = styled(Box)(() => ({
    maxWidth: '30rem',
    width: '100%',
    padding: '1rem',
}));

export const FormFieldsWrapperStyled = styled(Box)(({ theme }) => ({
    margin: theme.spacing(8, 0, 10),

    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(6, 0),
    },
}));
