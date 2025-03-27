import { ChangeEvent } from 'react';
import { Grid2 } from '@mui/material';

import { useGetCategories } from '@/dataAccess/hooks';
import { CloseSVG } from '@/components/icons';
import { StatusFilters, CustomTextField } from '@/components/common';

import { FiltersProps } from './Filters.types.ts';
import { FiltersWrapperStyled } from './Filters.styled.ts';

const Filters = ({
    value,
    searchValue,
    handleChangeCategory,
    handleChangeSearch,
    handleChangeDebounceSearch,
    ...props
}: FiltersProps) => {
    const { data: rawData } = useGetCategories();
    const data = rawData || [];

    const options = [
        {
            label: 'All',
            value: '',
        },
        ...data
            .map((category) => ({
                label: category.name,
                value: category.name,
            }))
            .filter((category) => category.value !== 'Other'),
        {
            label: 'Other',
            value: 'Other',
        },
    ];

    const onInputClear = () => {
        handleChangeSearch('');
        handleChangeDebounceSearch('');
    };

    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        handleChangeSearch(e.target.value);
        handleChangeDebounceSearch(e.target.value);
    };

    return (
        <FiltersWrapperStyled {...props}>
            <Grid2 width="100%" container spacing={4}>
                <Grid2
                    size={{ xs: 12, sm: 3 }}
                    display="flex"
                    alignItems="center"
                >
                    <CustomTextField
                        value={searchValue}
                        onChange={onInputChange}
                        slotProps={{
                            input: {
                                endAdornment: searchValue ? (
                                    <CloseSVG
                                        style={{ cursor: 'pointer' }}
                                        height="14px"
                                        width="14px"
                                        onClick={onInputClear}
                                    />
                                ) : null,
                            },
                        }}
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 9 }}
                    display="flex"
                    alignItems="center"
                >
                    <StatusFilters
                        value={value}
                        onChange={handleChangeCategory}
                        options={options}
                    />
                </Grid2>
            </Grid2>
        </FiltersWrapperStyled>
    );
};

export default Filters;
