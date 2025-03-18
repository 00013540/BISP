import type { Theme } from '@mui/material';

const CssBaseline = (theme: Theme) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          height: '100%',
          margin: 0,
          backgroundColor: theme.palette.gray['3'],
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
