import { BoxProps } from '@mui/material';

export interface FiltersProps extends BoxProps {
    setIsOpenCreateDialog: (state: boolean) => void;
    value: string;
    handleChangeStatus: (state: string) => void;
}
