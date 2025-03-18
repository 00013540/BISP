import type { Theme } from '@mui/material';

const Link = (theme: Theme) => {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: theme.palette.primary['6'],
          display: 'flex',
          alignItems: 'center',
          fontWeight: 500,

          '& svg': {
            color: theme.palette.primary['6'],
            fill: theme.palette.primary['6'],
            stroke: theme.palette.primary['6'],
          },

          '&:visited': {
            color: theme.palette.primary['6'],

            '& svg': {
              color: theme.palette.primary['6'],
              fill: theme.palette.primary['6'],
              stroke: theme.palette.primary['6'],
            },
          },

          '&:hover': {
            color: theme.palette.primary['5'],

            '& svg': {
              color: theme.palette.primary['5'],
              fill: theme.palette.primary['5'],
              stroke: theme.palette.primary['5'],
            },
          },
          '&:focus': {
            color: theme.palette.primary['7'],

            '& svg': {
              color: theme.palette.primary['7'],
              fill: theme.palette.primary['7'],
              stroke: theme.palette.primary['7'],
            },
          },
          '&[aria-disabled="true"]': {
            color: theme.palette.secondary['2'],
            pointerEvents: 'none',

            '& svg': {
              color: theme.palette.primary['2'],
              fill: theme.palette.primary['2'],
              stroke: theme.palette.primary['2'],
            },
          },
        },
      },
    },
  };
};

export default Link;
