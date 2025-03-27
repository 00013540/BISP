import { BoxProps } from '@mui/material';

export interface FiltersProps extends BoxProps {
    value: string;
    handleChangeCategory: (state: string) => void;
    searchValue: string;
    handleChangeSearch: (state: string) => void;
    handleChangeDebounceSearch: (state: string) => void;
}
