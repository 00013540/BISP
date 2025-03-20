import type { TextFieldProps } from '@mui/material';

export interface LabelProps {
    disabled?: boolean;
}

export interface HelperTextProps {
    warning?: boolean;
    success?: boolean;
    error?: boolean;
}

export type CustomTextFieldProps = TextFieldProps & {
    warning?: boolean;
    success?: boolean;
};
