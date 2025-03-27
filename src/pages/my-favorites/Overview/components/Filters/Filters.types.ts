import { BoxProps } from '@mui/material';

export interface FiltersProps extends BoxProps {
    value: string;
    handleChangeStatus: (state: string) => void;
}
