import type { Theme } from '@mui/material';

const Chip = (theme: Theme) => {
    return {
        MuiChip: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(0.5, 2),
                    borderRadius: theme.spacing(2),
                    height: 'initial',
                },

                label: {
                    padding: 0,
                    ...theme.typography.body1,
                },
            },
            variants: [
                {
                    props: { color: 'success' },
                    style: {
                        backgroundColor: `${theme.palette.primary['1']}`,
                        color: `${theme.palette.primary['6']}`,
                    },
                },
                {
                    props: { color: 'error' },
                    style: {
                        backgroundColor: `${theme.palette.error.light}`,
                        color: `${theme.palette.error.main}`,
                    },
                },
            ],
        },
    };
};

export default Chip;
