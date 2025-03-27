import { BoxProps } from '@mui/material';

export interface FiltersProps extends BoxProps {
    value: string;
    handleChangeCategory: (state: string) => void;
}
