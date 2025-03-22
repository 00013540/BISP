import {
  FormLabel as MuiFormLabel,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  FormHelperText as MuiFormHelperText,
  styled,
} from '@mui/material';

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.375rem',

  '&.Mui-focused, &.Mui-error': {
    color: theme.palette.text.primary,
  },
}));

export const Select = styled(MuiSelect)(({ theme }) => ({
  height: '2.875rem',
  backgroundColor: theme.palette.white,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: theme.palette.secondary['5'],

  '& .MuiOutlinedInput-input': {
    padding: '0.75rem',
  },

  '& .MuiSvgIcon-root': {
    fill: theme.palette.secondary['4'],
  },

  '&.Mui-focused .MuiSvgIcon-root': {
    fill: theme.palette.primary['6'],
  },

  '.MuiOutlinedInput-notchedOutline': {
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

  '&.Mui-error': {
    backgroundColor: theme.palette.error.light,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
    '& .MuiSvgIcon-root': {
      fill: theme.palette.error.main,
    },
  },
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  transition: 'all 0.2s',

  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: theme.palette.gray['2'],
  },

  '&:hover': {
    backgroundColor: theme.palette.gray['2'],
  },
}));

export const FormHelperText = styled(MuiFormHelperText)(() => ({}));
