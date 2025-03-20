import type { Theme } from '@mui/material';

const Slider = (theme: Theme) => {
    return {
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-mark': {
                        height: '0.5rem',
                        width: '0.5rem',
                        borderRadius: '50%',
                        transform: 'translate(-4px, -50%)',
                        backgroundColor: theme.palette.secondary['1'],
                        opacity: 1,
                    },
                    '& .MuiSlider-markActive': {
                        backgroundColor: 'currentColor',
                    },
                    '& .MuiSlider-thumb': {
                        height: '0.5rem',
                        width: '0.5rem',
                        borderRadius: '50%',
                    },
                },
            },
        },
    };
};

export default Slider;
