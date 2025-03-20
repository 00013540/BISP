import type { Theme } from '@mui/material';

const Typography = (theme: Theme) => {
    return {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    title1: 'h1',
                    title2: 'h2',
                },
            },
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                },
            },
            variants: [
                {
                    props: { variant: 'title1' },
                    style: {
                        fontSize: '4rem',
                        lineHeight: '4.5rem',
                        fontWeight: 800,
                    },
                },
                {
                    props: { variant: 'title2' },
                    style: {
                        fontSize: '3rem',
                        lineHeight: '3.5rem',
                        fontWeight: 800,
                    },
                },
            ],
        },
    };
};

export default Typography;
