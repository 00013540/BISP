import { styled, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';

export const WrapperStyled = styled(Box)(() => ({
    maxWidth: '21.5rem',
    width: '100%',
    padding: '1rem',
}));

export const FormFieldsWrapperStyled = styled(Box)(({ theme }) => ({
    margin: theme.spacing(8, 0, 10),

    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(6, 0),
    },
}));

export const SubmitButtonStyled = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
    },
}));
