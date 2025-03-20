import { GlobalStyles, useTheme } from '@mui/material';

const GlobalScrollbarStyles = () => {
    const theme = useTheme();

    return (
        <GlobalStyles
            styles={{
                '::-webkit-scrollbar': {
                    width: '3px',
                    height: '3px',
                },
                '::-webkit-scrollbar-track': {
                    background: theme.palette.gray['4'],
                },
                '::-webkit-scrollbar-thumb': {
                    background: theme.palette.gray['6'],
                    borderRadius: '10px',
                    transition: 'all 0.2s',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: theme.palette.gray['7'],
                },
            }}
        />
    );
};

export default GlobalScrollbarStyles;
