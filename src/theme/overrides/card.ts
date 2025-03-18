import type { Theme } from '@mui/material';

const Card = (theme: Theme) => {
  return {
    MuiCard: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(4),
        },
      },
    },
  };
};

export default Card;
