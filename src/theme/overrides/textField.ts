import type { Theme } from '@mui/material';

const TextField = (theme: Theme) => {
  return {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        label: '',
      },
      styleOverrides: {
        root: {
          '&.Mui-warning': {
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(244, 193, 15, 0.10)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.warning.main,
              },
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.warning.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.warning.main,
            },
          },
          '&.Mui-success': {
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.primary['1'],
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary['6'],
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary['6'],
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary['6'],
              },
            },
          },
        },
      },
      variants: [
        {
          props: {
            variant: 'outlined',
          },
          style: {
            '& .MuiOutlinedInput-root': {
              height: '2.875rem',
              backgroundColor: theme.palette.white,
              fontSize: '0.875rem',
              fontWeight: 500,
              color: theme.palette.secondary['5'],
              '& .MuiOutlinedInput-input': {
                padding: '0.75rem',
                '&::placeholder': {
                  color: theme.palette.secondary['4'],
                  opacity: 1,
                },
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary['1'],
                borderRadius: '0.25rem',
                borderWidth: '1.5px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary['1'],
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary['6'],
                borderWidth: '1.5px',
              },
            },
            '& .MuiOutlinedInput-root.Mui-error': {
              backgroundColor: theme.palette.error.light,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.error.main,
              },
            },
            '& .MuiOutlinedInput-root.Mui-disabled': {
              backgroundColor: theme.palette.gray['2'],
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.gray['3'],
              },
              '& input::placeholder': {
                WebkitTextFillColor: theme.palette.text.disabled,
              },
            },
          },
        },
      ],
    },
  };
};

export default TextField;
