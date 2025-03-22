import { BoxProps } from '@mui/material';

export interface CustomImageUploaderProps extends BoxProps {
    label?: string;
    height?: string;
    width?: string;
    error?: boolean;
    helperText?: string;
    setFormikValue?: (state: string) => void;
    value: null | string | File;
    setValue: (state: null | string | File) => void;
}
