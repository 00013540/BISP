import { styled } from '@mui/material';

import type { HelperTextProps, LabelProps } from './CustomTextField.types';

export const Label = styled('label')<LabelProps>`
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    margin-bottom: 0.25rem;
    color: ${({ disabled, theme }) =>
        disabled ? theme.palette.text.disabled : theme.palette.text.primary};
`;

export const HelperText = styled('span')<HelperTextProps>`
    color: ${({ warning, error, success, theme }) =>
        warning
            ? theme.palette.warning.main
            : error
              ? theme.palette.error.main
              : success
                ? theme.palette.success.main
                : 'inherit'};
`;
