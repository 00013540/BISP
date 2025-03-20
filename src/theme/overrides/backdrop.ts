const Backdrop = () => {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },

                invisible: {
                    backgroundColor: 'transparent',
                },
            },
        },
    };
};

export default Backdrop;
