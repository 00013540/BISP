const Alert = () => {
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    fontSize: '0.875rem',
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
