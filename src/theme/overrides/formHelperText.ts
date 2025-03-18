import type { Theme } from '@mui/material';

const FormHelperText = (theme: Theme) => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          fontWeight: 400,
          marginLeft: 0,
          marginTop: '0.25rem',
          lineHeight: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.text.secondary,

          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
        },
      },
    },
  };
};

export default FormHelperText;
