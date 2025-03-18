import type { Theme } from '@mui/material';

const Divider = (theme: Theme) => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.gray['3'],
          borderBottomWidth: '1.5px',
          margin: `${theme.spacing(6)} 0`,
        },
      },
    },
  };
};

export default Divider;
