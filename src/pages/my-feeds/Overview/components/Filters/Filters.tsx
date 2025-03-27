import { Button } from '@mui/material';

import { StatusFilters } from '@/components/common';

import { FiltersProps } from './Filters.types.ts';
import { FiltersWrapperStyled } from './Filters.styled.ts';
import { OPTIONS } from './Filters.constants.ts';

const Filters = ({
    value,
    setIsOpenCreateDialog,
    handleChangeStatus,
    ...props
}: FiltersProps) => {
    return (
        <FiltersWrapperStyled {...props}>
            <StatusFilters
                value={value}
                onChange={handleChangeStatus}
                options={OPTIONS}
            />
            <Button onClick={() => setIsOpenCreateDialog(true)}>
                New feed
            </Button>
        </FiltersWrapperStyled>
    );
};

export default Filters;
