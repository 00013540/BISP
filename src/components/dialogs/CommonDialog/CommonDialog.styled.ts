import {
    styled,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from '@mui/material';

export const DialogStyled = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.spacing(4),
    },

    [theme.breakpoints.down('sm')]: {
        '& .MuiPaper-root': {
            maxWidth: '100% !important',
            width: '100%',
            margin: '1rem',
        },
    },
}));

export const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
    padding: theme.spacing(7.5, 7.5, 0, 7.5),

    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(6, 6, 0, 6),
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 4, 0, 4),
    },
}));

export const DialogTitleInnerStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(6),
    paddingBottom: theme.spacing(5.5),
    borderBottom: `1.5px solid ${theme.palette.gray['3']}`,

    [theme.breakpoints.down('lg')]: {
        paddingBottom: theme.spacing(4),
    },
}));

export const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
    padding: `${theme.spacing(7.5)} !important`,

    [theme.breakpoints.down('lg')]: {
        padding: `${theme.spacing(6)} !important`,
    },

    [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing(4)} !important`,
    },

    '&::-webkit-scrollbar': {
        width: '3px',
    },

    '&::-webkit-scrollbar-track': {
        background: theme.palette.gray['4'],
    },

    '&::-webkit-scrollbar-thumb': {
        background: theme.palette.gray['6'],
        borderRadius: '10px',
        transition: 'all 0.2s',
    },

    '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.gray['7'],
    },
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        '& svg': {
            width: '1.25rem',
            height: '1.25rem',
        },
    },

    [theme.breakpoints.down('sm')]: {
        '& svg': {
            width: '1rem',
            height: '1rem',
        },
    },
}));
