import { Box, Menu, styled } from '@mui/material';

export const StyledInputWrapper = styled(Box)(() => ({}));

export const StyledMenuWrapper = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: '2.5rem',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',

        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            padding: '0 6px',
            justifyContent: 'center',
            color: theme.palette.text.secondary,
        },
    },
}));

export const StyledButton = styled('button')<{ open: boolean }>(
    ({ theme, open }) => ({
        padding: theme.spacing(0, 1.5),
        gap: theme.spacing(1),
        minWidth: '2.5rem',
        maxHeight: '1.375rem',
        borderRadius: theme.spacing(1),
        border: `1px solid ${theme.palette.secondary['1']}`,
        borderColor: open
            ? theme.palette.primary['6']
            : theme.palette.secondary['1'],
        backgroundColor: theme.palette.white,
        color: theme.palette.text.secondary,
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.2s',

        ...theme.typography.body1,

        '& svg': {
            flexShrink: 0,
            stroke: open
                ? theme.palette.primary['6']
                : theme.palette.text.secondary,
        },
    })
);
