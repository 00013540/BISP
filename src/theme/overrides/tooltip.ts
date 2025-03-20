import type { Theme } from '@mui/material';

const Tooltip = (theme: Theme) => {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    ...theme.typography.body1,
                    padding: theme.spacing(2, 3),
                    backgroundColor: theme.palette.gray[10],
                },
                arrow: {
                    color: theme.palette.gray[10],
                },
            },
        },
    };
};

export default Tooltip;
