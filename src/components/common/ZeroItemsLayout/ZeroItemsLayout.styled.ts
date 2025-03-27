import { Box, styled } from '@mui/material';

const shouldForwardProp = (prop: string) => prop !== 'lightTheme';

export const ZeroItemsLayoutWrapper = styled(Box, { shouldForwardProp })<{
    lightTheme?: string;
}>(({ lightTheme }) => ({
    padding: '2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    maxWidth: '45em',
    margin: '0 auto',
    opacity: lightTheme === 'true' ? 1 : 0.8,
}));

export const TypographyWrapper = styled(Box, { shouldForwardProp })<{
    lightTheme?: string;
}>(({ theme, lightTheme }) => ({
    padding: '1rem 1.5rem',
    color:
        lightTheme === 'true' ? theme.palette.primary.contrastText : 'inherit',

    [theme.breakpoints.down('md')]: {
        padding: '1rem 0.5rem',
    },
}));
