const Alert = () => {
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    color: 'rgba(0, 0, 0, 0.45)',
                },
            },
            variants: [
                {
                    props: {
                        color: 'error',
                        severity: 'error',
                        variant: 'standard',
                    },
                    style: {
                        backgroundColor: 'rgb(253, 237, 237)',
                    },
                },
            ],
        },
    };
};

export default Alert;
