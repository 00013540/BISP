import { Box, IconButton, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
}));

export const InnerWrapperStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
}));

export const InputStyled = styled('input')(({ theme }) => ({
    height: '1.375rem',
    maxWidth: '2rem',
    padding: theme.spacing(0, 1.5),
    borderRadius: '0.25rem',
    outline: 'none',
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.secondary['1']}`,
    transition: 'all 0.2s',

    ...theme.typography.body1,

    '&:focus': {
        borderColor: theme.palette.primary['6'],
    },
}));

export const IconButtonStyled = styled(IconButton)(({ disabled, theme }) => ({
    '& svg': {
        stroke: disabled ? theme.palette.primary[2] : theme.palette.primary[6],
    },
}));
