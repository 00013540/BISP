const CssBaseline = () => {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    height: '100%',
                    margin: 0,
                },
                '#root': {
                    minHeight: '100%',
                },
                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                    backgroundColor: 'transparent',

                    '&:visited': {
                        color: 'inherit',
                    },
                },
            },
        },
    };
};

export default CssBaseline;
