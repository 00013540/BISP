import { styled, Box } from '@mui/material';

export const FormFieldsWrapperStyled = styled(Box)(({ theme }) => ({
    margin: theme.spacing(10, 0),

    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(6, 0),
    },
}));
