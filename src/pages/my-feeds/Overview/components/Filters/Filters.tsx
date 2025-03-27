import { Button, Grid2 } from '@mui/material';

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
            <Grid2 width="100%" container spacing={4}>
                <Grid2
                    size={{ xs: 12, sm: 9, lg: 10 }}
                    display="flex"
                    alignItems="center"
                >
                    <StatusFilters
                        value={value}
                        onChange={handleChangeStatus}
                        options={OPTIONS}
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 3, lg: 2 }}
                    display="flex"
                    alignItems="center"
                >
                    <Button
                        fullWidth
                        onClick={() => setIsOpenCreateDialog(true)}
                    >
                        New feed
                    </Button>
                </Grid2>
            </Grid2>
        </FiltersWrapperStyled>
    );
};

export default Filters;
