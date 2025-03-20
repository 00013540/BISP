import type { Theme } from '@mui/material';

const Button = (theme: Theme) => {
    return {
        MuiButton: {
            defaultProps: {
                size: 'large',
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    verticalAlign: 'middle',
                },
            },
            variants: [
                {
                    props: {
                        color: 'primary',
                        variant: 'contained',
                        disabled: false,
                    },
                    style: {
                        backgroundColor: theme.palette.primary['6'],
                        color: `${theme.palette.white} !important`,

                        svg: {
                            fill: `${theme.palette.white} !important`,
                            stroke: `${theme.palette.white} !important`,
                        },

                        '&:hover': {
                            backgroundColor: theme.palette.primary['7'],
                        },
                        '&:focus': {
                            backgroundColor: theme.palette.primary['5'],
                        },
                    },
                },
                {
                    props: {
                        color: 'primary',
                        variant: 'contained',
                        disabled: true,
                    },
                    style: {
                        backgroundColor: `${theme.palette.gray['2']} !important`,
                        color: `${theme.palette.secondary['2']} !important`,

                        '&.MuiLoadingButton-loading': {
                            backgroundColor: `${theme.palette.primary['6']} !important`,
                            color: `${theme.palette.primary['6']} !important`,

                            '& .MuiLoadingButton-loadingIndicator': {
                                color: `${theme.palette.white} !important`,
                            },
                        },
                    },
                },
                {
                    props: {
                        color: 'primary',
                        variant: 'outlined',
                        disabled: false,
                    },
                    style: {
                        backgroundColor: theme.palette.white,
                        border: `1px solid ${theme.palette.primary['6']}`,
                        color: theme.palette.primary['6'],

                        svg: {
                            fill: `${theme.palette.primary['6']} !important`,
                            stroke: `${theme.palette.primary['6']} !important`,
                        },

                        '&:visited': {
                            color: theme.palette.primary['6'],
                        },

                        '&:hover': {
                            color: theme.palette.primary['7'],
                            border: `1px solid ${theme.palette.primary['7']}`,
                            backgroundColor: theme.palette.white,
                        },
                        '&:focus': {
                            color: theme.palette.primary['5'],
                            border: `1px solid ${theme.palette.primary['5']}`,
                            backgroundColor: theme.palette.white,
                        },
                    },
                },
                {
                    props: {
                        color: 'primary',
                        variant: 'outlined',
                        disabled: true,
                    },
                    style: {
                        backgroundColor: `${theme.palette.gray['2']} !important`,
                        border: `1px solid ${theme.palette.secondary['2']} !important`,
                        color: `${theme.palette.secondary['2']} !important`,

                        svg: {
                            fill: `${theme.palette.primary['2']} !important`,
                            stroke: `${theme.palette.primary['2']} !important`,
                        },

                        '&.MuiLoadingButton-loading': {
                            backgroundColor: `${theme.palette.white} !important`,
                            color: `${theme.palette.white} !important`,
                            border: `1px solid ${theme.palette.primary['6']} !important`,

                            '& .MuiLoadingButton-loadingIndicator': {
                                color: `${theme.palette.primary['6']} !important`,
                            },
                        },
                    },
                },
                {
                    props: {
                        color: 'secondary',
                        variant: 'outlined',
                        disabled: false,
                    },
                    style: {
                        backgroundColor: theme.palette.primary['1'],
                        border: `1px solid ${theme.palette.primary['6']}`,
                        color: theme.palette.primary['6'],

                        svg: {
                            fill: `${theme.palette.primary['6']} !important`,
                            stroke: `${theme.palette.primary['6']} !important`,
                        },

                        '&:hover': {
                            backgroundColor: theme.palette.primary['1'],
                            border: `1px solid ${theme.palette.primary['7']}`,
                        },
                        '&:focus': {
                            backgroundColor: theme.palette.primary['1'],
                            border: `1px solid ${theme.palette.primary['5']}`,
                        },
                    },
                },
                {
                    props: {
                        color: 'secondary',
                        variant: 'outlined',
                        disabled: true,
                    },
                    style: {
                        backgroundColor: `${theme.palette.gray['2']} !important`,
                        border: `1px solid ${theme.palette.secondary['2']} !important`,
                        color: `${theme.palette.secondary['2']} !important`,

                        svg: {
                            fill: `${theme.palette.primary['2']} !important`,
                            stroke: `${theme.palette.primary['2']} !important`,
                        },

                        '&.MuiLoadingButton-loading': {
                            backgroundColor: `${theme.palette.primary['1']} !important`,
                            border: `1px solid ${theme.palette.primary['6']} !important`,
                            color: `${theme.palette.primary['1']} !important`,

                            '& .MuiLoadingButton-loadingIndicator': {
                                color: `${theme.palette.primary['6']} !important`,
                            },
                        },
                    },
                },
                {
                    props: {
                        color: 'primary',
                        variant: 'text',
                        disabled: true,
                    },
                    style: {
                        color: `${theme.palette.secondary['2']} !important`,

                        svg: {
                            fill: `${theme.palette.secondary['2']} !important`,
                            stroke: `${theme.palette.secondary['2']} !important`,
                        },
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        height: '1.625rem',
                        fontWeight: 400,
                        padding: '0 0.5rem',
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        height: '1.875rem',
                        fontWeight: 500,
                        padding: '0 0.75rem',
                    },
                },
                {
                    props: { size: 'large' },
                    style: {
                        height: '2.375rem',
                        fontWeight: 500,
                        padding: '0 1.5rem',
                    },
                },
            ],
        },
    };
};

export default Button;
