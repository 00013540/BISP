import { styled } from '@mui/material';

export const ListStyled = styled('ul')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    columnGap: theme.spacing(7.5),
    rowGap: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(4),
    },
}));

export const ButtonStyled = styled('button')(({ theme }) => ({
    ...theme.typography.h5,

    cursor: 'pointer',
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    color: theme.palette.secondary[2],
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',

    '&:hover': {
        color: theme.palette.primary['5'],
    },
    '&:active': {
        color: theme.palette.primary['7'],
    },

    '&[disabled]': {
        cursor: 'default',
        color: `${theme.palette.primary[6]} !important`,
    },

    [theme.breakpoints.down('sm')]: {
        ...theme.typography.body1,
        fontWeight: 500,
    },
}));
